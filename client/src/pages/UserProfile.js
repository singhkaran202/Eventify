import React, { useEffect, useState } from 'react'
import UserIcons from '../components/icons/UserIcons'
import { useNavigate } from 'react-router-dom'

const UserProfile = () => {
  const [data,setData] = useState({
    name : "",
    email : "",
    profilePic : "",
    location: "",
    interests: "",
  })
  const navigate = useNavigate()
  const token = localStorage.getItem("token")

  useEffect(()=>{
    if(!token){
      navigate("/sign-in")
    }
  },)

  const handleUserProfile = async() => {
    const backendUrl= process.env.REACT_APP_BACKEND_URL;
    const response = await fetch(`${backendUrl}/api/user-details`,{
        method : "post",
        headers : {
          "content-type" : "application/json",
          authorization : `jwt ${localStorage.getItem('token')}`
        }
    })

    const dataResponse = await response.json()
    setData(dataResponse.data)
  }

  useEffect(()=>{
    if(token){
      handleUserProfile()
    }
  },[])

  const handleLogOut = ()=>{
      localStorage.clear()
      navigate("/sign-in")
  }

  

  return (
    <div className='h-screen-center'>
        
         <div className='user-profile '>
          <button className='logout-btn' onClick={handleLogOut}>Logout</button>
            
              {
                data?.profilePic ? (
                  <div>
                    <img src={data?.profilePic} className='user-profile-pic'/>
                  </div>
                ) 
                : 
                <div className='user-profile-icons'>
                  <UserIcons/>
                </div>
              }
           
            <img src=''/>

            <h1 className='user-name'>{data?.name}</h1>
            <p className='user-email'>{data?.email}</p>
            <p className='user-email'>{data?.location}</p>
            <p className='user-email'>{data?.interests}</p>

        </div>
    </div>
   
  )
}

export default UserProfile