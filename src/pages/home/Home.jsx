import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import Homelayout from '../homelayout/Homelayout'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'

const Home = () => {
  const navigate = useNavigate()

  const data = useSelector(state => state.userLoginInfo.userInfo)

  useEffect(()=>{

    if (!data) {
      navigate('/login') 
    }
  })
  return (
    <div>
      <Navbar></Navbar>
      <Homelayout></Homelayout>
    </div>
  )
}

export default Home
