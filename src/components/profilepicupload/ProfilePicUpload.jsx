import * as React from 'react';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import { Avatar, BottomNavigation, Box, Card } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import "cropperjs/dist/cropper.css";
import Cropper from "react-cropper";
import { getStorage, ref, uploadString } from "firebase/storage";

const VisuallyHiddenInput = styled('input')({
  clip: 'rect(0 0 0 0)',
  clipPath: 'inset(50%)',
  height: 1,
  overflow: 'hidden',
  position: 'absolute',
  bottom: 0,
  left: 0,
  whiteSpace: 'nowrap',
  width: 1,
});

export default function ProfilePicUpload({ onCancel, storageRef, onGetCropData}) {

  
  const storage = getStorage();
    const handleCancel = () => {
        onCancel();
      };
      const [image, setImage] = React.useState();
  const [cropData, setCropData] = React.useState("");
  const cropperRef = React.createRef();

  const handleImgUpload = (e) => {
    e.preventDefault();
    let files;
    if (e.dataTransfer) {
      files = e.dataTransfer.files;
    } else if (e.target) {
      files = e.target.files;
    }
    console.log(files,'image');
    const reader = new FileReader();
    reader.onload = () => {
      setImage(reader.result);
      console.log(reader.result);
    };
    reader.readAsDataURL(files[0]);
  };

  const getCropData = async () => {
    if (typeof cropperRef.current?.cropper !== "undefined") {
      setCropData(cropperRef.current?.cropper.getCroppedCanvas().toDataURL());

      const storageRef = ref(storage, 'some-child');
      const message4 = cropperRef.current?.cropper.getCroppedCanvas().toDataURL();
      try {
        const snapshot = await uploadString(storageRef, message4, 'data_url');
        console.log('Uploaded a data_url string!');
        // Pass cropData to the parent component
        onGetCropData(cropData);
      } catch (error) {
        // console.log(error.code);
        // Handle the error, if needed
      }
    }
  };

  return (
    <Card sx={{width:'400px' , mx:'auto', p:4,}}>
      
       <div style={{position:'relative',width: "100px", height: "100px", overflow:'hidden',margin:'0 auto', borderRadius:'50%'}}>

      
      {
        image ?
        <div
        className="img-preview"
        style={{ width: "100%",position:'relative', height: "100%" }}
      />
          :
          <Avatar
          className="box"
          style={{ width: "100px", float: "center", height: "100px" }}
        />

      }
    </div>
   {
    !image &&
    <Button onChange={handleImgUpload} sx={{display:'flex', justifyContent:'center',py:10}} component="label" variant="contained" startIcon={<CloudUploadIcon />}>
      Upload Image
      <VisuallyHiddenInput  type="file" />
    </Button>
   }
    
    {
      image &&
    <Cropper
          ref={cropperRef}
          style={{ height: 400, width: "100%" }}
          zoomTo={0.5}
          initialAspectRatio={1}
          preview=".img-preview"
          src={image}
          viewMode={1}
          minCropBoxHeight={10}
          minCropBoxWidth={10}
          background={false}
          responsive={true}
          autoCropArea={1}
          checkOrientation={false} // https://github.com/fengyuanchen/cropperjs/issues/671
          guides={true}
        />
    }

    <BottomNavigation sx={{justifyContent:'space-around', alignItems:'flex-end'}}>

    <Button onClick={handleCancel} variant="contained" >
        Cancle
    </Button>
    <Button onClick={getCropData} variant="contained" endIcon={<SendIcon />}>
        Send
    </Button>
    </BottomNavigation>

    </Card>
  );
}
