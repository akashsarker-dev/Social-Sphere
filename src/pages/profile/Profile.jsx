import React, { useState } from 'react';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import Paper from '@mui/material/Paper';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import Modal from '@mui/material/Modal';
import { styled } from '@mui/system';
import Navbar from '../../components/navbar/Navbar';
import BasicTabs from '../../components/tabpanel/ProfileTabs';
import ProfileImg from '../../assets/profile.png';
import ProfilePicUpload from '../../components/profilepicupload/ProfilePicUpload';
// import { getStorage, ref, uploadString } from "firebase/storage";
import { getDatabase, ref, onValue } from "firebase/database";
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
const CoverPhoto = styled('div')({
  width: '100%',
  height: '150px',
  backgroundColor: '#1877f2',
});

const HoverableAvatar = styled(Avatar)({
  width: 80,
  height: 80,
  margin: 'auto',
  position: 'relative',
  cursor: 'pointer',

  '&:hover .upload-icon': {
    opacity: 1,
  },

  '& .upload-icon': {
    position: 'absolute',
    top: 0,
    left: 0,
    fontSize: 24,
    color: '#fff',
    opacity: 0,
    transition: 'opacity 0.3s ease-in-out',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.41)',
    height: '100%',
    width: '100%',
  },
});

const ModalContent = styled(Paper)({
  position: 'absolute',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 2,
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
});

const Profile = ({storageRef,onGetCropData}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleAvatarClick = () => {
    setIsModalOpen(true);
  };
  const db = getDatabase();
  const handleCloseModal = () => {
    setIsModalOpen(false);
  };
const [userData , setUserData] = useState([])


  useEffect(()=>{
    const userListsRef = ref(db, "users/");
    onValue(userListsRef, (snapshot) => {
      let arr =[];
      snapshot.forEach(item=>{
        // if (item.key != data.uid) {
          arr.push(item.val());
        // }
      })
      setUserData(arr)
    });
  },[])
  console.log(userData,'asssssssss');




  const handleCropData = (data) => {
    // This function will be called when getCropData is invoked in the child
    console.log('Crop data received in parent:', data);
    // You can perform additional logic here in the Profile component
  };
  // const data = useSelector(state => state.userLoginInfo.userInfo)
  return (
    <div>
      <Navbar />
      {/* <CoverPhoto /> */}
      <Paper elevation={3} sx={{ padding: 2, textAlign: 'center' }}>
        <HoverableAvatar onClick={handleAvatarClick}>
          <Avatar src={''} sx={{ width: 80, height: 80, margin: 'auto' }} />
          <div className="upload-icon">
            <CloudUploadIcon />
          </div>
        </HoverableAvatar>
        <Typography variant="h4" sx={{ marginTop: 2 }}>
          Akash Sarker
        </Typography>
        <Typography variant="body2" color="textSecondary">
          City, Country
        </Typography>
      </Paper>
      <BasicTabs />
      <Modal open={isModalOpen} onClose={handleCloseModal}>
      <ProfilePicUpload onCancel={handleCloseModal} onGetCropData={handleCropData} />
      </Modal>
    </div>
  );
};

export default Profile;
