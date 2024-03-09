import React, { useEffect, useState } from 'react'
import { BrowserRouter as Router, Link, Route, Switch, Routes } from 'react-router-dom'
import './dashboard.css'

import UserIcons from '../components/icons/UserIcons'
import { useNavigate } from 'react-router-dom'
import UserProfile from './UserProfile'
import PlanEvent from './PlanEvent'
import PastEvent from './PastEvent'
import UpcomingEvent from './UpcomingEvents'
import Venue from './venuesel'

const Dashboard2 = () => {
    const [data, setData] = useState({
        name: "",
        email: "",
        profilePic: "",
        location: "",
        interests: "",
    })
    const navigate = useNavigate()
    const token = localStorage.getItem("token")
    //token-->jwt i guess
    useEffect(() => {
        if (!token) {
            navigate("/sign-in")
        }
    },)

    const handleUserProfile = async () => {
        const backendUrl= process.env.REACT_APP_BACKEND_URL;
        const response = await fetch(`${backendUrl}/api/user-details`, {
            method: "post",
            headers: {
                "content-type": "application/json",
                authorization: `jwt ${localStorage.getItem('token')}`
            }
        })

        const dataResponse = await response.json()
        setData(dataResponse.data)
    }

    useEffect(() => {
        if (token) {
            handleUserProfile()
        }
    }, [])

    const handleLogOut = () => {
        localStorage.clear()
        navigate("/sign-in")
    }

    const [selectedOption, setSelectedOption] = useState(null);

    const handleOptionClick = (option) => {
        setSelectedOption(option);
    };

    const renderComponent = () => {
        switch (selectedOption) {
            case 'profile':
                return <UserProfile />;
            case 'planevent':
                return <PlanEvent />;
            case 'upcomingevent':
                return <UpcomingEvent />;
            case 'pastevent':
                return <PastEvent />;
            case 'venue':
                return <Venue/>;
            default:
                return <UserProfile/>;
        }
    };

    return (
        <div className="dashboard">

            {/* Sidebar */}
            <div className="sidebar">
                <div className="logo">EVENTNEXUS</div>
                <ul className="sidebar-menu">
                    <li className="sidebar-menu-item" onClick={() => handleOptionClick('planevent')}>Plan Event</li>
                    <li className="sidebar-menu-item" onClick={() => handleOptionClick('profile')}>Profile</li>
                    <li className="sidebar-menu-item" onClick={() => handleOptionClick('pastevent')}>Past events</li>
                    <li className="sidebar-menu-item" onClick={() => handleOptionClick('upcomingevent')}>Upcoming Events</li>
                    <li className="sidebar-menu-item" onClick={() => handleOptionClick('venue')}>Venue Selection</li>
                    <li className="sidebar-menu-item"><button onClick={handleLogOut}>Log Out</button></li>


                    {/* Add more sidebar menu items as needed */}
                </ul>
            </div>
            {/* Main content */}
            <div className="main-content">
                {/* Content of the dashboard goes here */}
                {/* <h1>Welcome to the Dashboard</h1> */}
                {renderComponent()}
            </div>
        </div>
        //  </Router> 








        // <div className='h-screen-center'>

        //      <div className='user-profile '>
        //       <button className='logout-btn' onClick={handleLogOut}>Logout</button>

        //           {
        //             data?.profilePic ? (
        //               <div>
        //                 <img src={data?.profilePic} className='user-profile-pic'/>
        //               </div>
        //             ) 
        //             : 
        //             <div className='user-profile-icons'>
        //               <UserIcons/>
        //             </div>
        //           }

        //         <img src=''/>

        //         <h1 className='user-name'>{data?.name}</h1>
        //         <p className='user-email'>{data?.email}</p>
        //         <p className='user-email'>{data?.location}</p>
        //         <p className='user-email'>{data?.interests}</p>





        //     </div>
        // </div>

    )
}

export default Dashboard2