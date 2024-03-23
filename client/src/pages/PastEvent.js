import React, { useEffect, useState } from 'react'
import axios from 'axios';
import './EventBox.css';
import { toast } from 'react-toastify'
import { Link, useNavigate } from 'react-router-dom'



const PastEvent = () => {


  // const [showEmailInput, setShowEmailInput] = useState(false);
  // const [email, setEmail] = useState('');

  // const handleRegisterClick = () => {
  //   setShowEmailInput(true);
  // };

  // const handleEmailChange = (e) => {
  //   setEmail(e.target.value);
  // };

  // const [email, setEmail] = useState('');

  // const handleEmailChange = (e) => {
  //   setEmail(e.target.value);
  // };

  const [emails, setEmails] = useState([]);

  const handleEmailChange = (index, value) => {
    const newEmails = [...emails];
    newEmails[index] = value;
    setEmails(newEmails);
  };


  const navigate = useNavigate();
  const handleRegister = async (emailText, email, e) => {
    // Here you can integrate with Gmail or perform any other action with the entered email
    console.log('Registered with email:', emailText);

    e.preventDefault()

    const requestBody = {
      email: email, // Include form data
      emailText: emailText // Include emailText
    };

    const backendUrl = process.env.REACT_APP_BACKEND_URL;
    const response = await fetch(`${backendUrl}/api/sendemail`, {
      method: 'post',
      headers: {
        "content-type": 'application/json'
      },
      body: JSON.stringify(requestBody)
    })

    const dataResponse = await response.json()

    console.log("dataREspnse", dataResponse)

    if (dataResponse.error) {
      toast.error(dataResponse.message)
    }

    if (dataResponse.success) {
      toast.success(dataResponse.message)
      localStorage.setItem('token', dataResponse.token)
      navigate('/user-profile')
      // clearEmail(index);
    }

    // const clearEmail = (index) => {
    //   const newEmails = [...emails];
    //   newEmails[index] = ''; // Clear email for the current event box
    //   setEmails(newEmails);
    // };

    // You can reset the email state if needed
    // setEmail('');
    // You can also close the email input field if needed
    // setShowEmailInput(false);
  };

  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const backendUrl = process.env.REACT_APP_BACKEND_URL;
      const response = await fetch(`${backendUrl}/api/get-past-events`, {
        method: "get",
        headers: {
          "content-type": "application/json",
          authorization: `jwt ${localStorage.getItem('token')}`
        }
      });
      const dataResponse = await response.json();

      // console.log(response.data.data);
      setData(dataResponse.data);
      // setData(response.data.data); // Assuming response.data is an array of data objects
      // setEmails(new Array(response.data.data.length).fill('')); // Initialize email states array

    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };


  return (
    // <div className='h-screen-center'>

    <div className="App">
      <h1>Past events</h1>
      <div className="data-container">
        {data.map((item, index) => (

          <div className="event-box">
            <h2 className="event-name">{item.eventName}</h2>
            <div className="event-details">
              {/* <p><span>Event Type:</span>{item.eventT}</p> */}
              <p><span>Event Timings: </span>{item.date}, {item.time}</p>
              <p><span>Venue: </span>{item.venue}</p>
              {item.ticketType === 'Paid' && (
                <p><span>Ticket Price: </span> Rs.{item.ticketPrice}</p>
              )}
              {item.ticketType === 'Free' && (
                <p><span>Ticket Price: </span> Free</p>
              )}

              {/* <p><span>Ticket Price: </span> Rs.{item.ticketPrice}</p> */}
              <p><span>Event Description: </span>{item.description}</p>
            </div>
            {/* <button className="register-button" onClick={handleRegisterClick}>Register</button> */}
            <div className="email-input">
              <input
                type="email"
                placeholder="Enter your email"
                value={emails[index] || ''}
                // onChange={handleEmailChange}
                onChange={(e) => handleEmailChange(index, e.target.value)}
              />
              <button className="submit-button" onClick={(e) => handleRegister(item.emailText, emails[index], e)}>Register</button>
            </div>

          </div>

        ))}
      </div>
    </div>
    // </div>

  )
}

export default PastEvent