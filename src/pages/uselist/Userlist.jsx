import { Avatar, Button, Card, MenuItem } from '@mui/material'
import React, { useEffect, useState } from 'react'
import Navbar from '../../components/navbar/Navbar'
import SendIcon from '@mui/icons-material/Send';
import { onValue, ref } from 'firebase/database';
import { getDatabase, set } from "firebase/database";
import { useSelector } from 'react-redux';

const Userlist = () => {

    const [userData , setUserData] = useState([])
    const db = getDatabase();
    const data = useSelector(state => state.userLoginInfo.userInfo)
  useEffect(()=>{
    const userListsRef = ref(db, "users/");
    onValue(userListsRef, (snapshot) => {
      let arr =[];
      snapshot.forEach(item=>{
        if (item.key != data.uid) {
          arr.push(item.val());
        }
      })
      setUserData(arr)
    });
  },[])

  return (
    <div>
        <Navbar></Navbar>
        <Card sx={{width:400, mx:'auto'}}>
        {
            userData.map((item)=>(

        <MenuItem sx={{display:'flex' ,justifyContent:'space-around'}}  spacing={2}>
          <Avatar src={item.img} sx={{ width: 50, height: 50, }} /> {item.username}
          <Button sx={{mx:3}} variant="contained" endIcon={<SendIcon />}>
            Send
            </Button>
        </MenuItem>
            ))
        }

        </Card>
    </div>
  )
}

export default Userlist
