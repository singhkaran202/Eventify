import React, { useEffect, useState } from 'react'
import axios from 'axios';
import './EventBox.css';


const UpcomingEvent = () => {


  // const [showEmailInput, setShowEmailInput] = useState(false);
  // const [email, setEmail] = useState('');

  // const handleRegisterClick = () => {
  //   setShowEmailInput(true);
  // };

  // const handleEmailChange = (e) => {
  //   setEmail(e.target.value);
  // };

  const handleRegister = () => {
    // Here you can integrate with Gmail or perform any other action with the entered email
    console.log('Registered with email:');
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
      const backendUrl= process.env.REACT_APP_BACKEND_URL;
      const response = await axios.get(`${backendUrl}/api/get-events`);
      console.log(response.data.data);
      setData(response.data.data); // Assuming response.data is an array of data objects
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };


  return (
    // <div className='h-screen-center'>
        
        <div className="App">
      <h1>Upcoming events</h1>
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
                />
                <button className="submit-button" onClick={handleRegister}>Register</button>
              </div>
            
          </div>

        ))}
      </div>
    </div>
    // </div>
   
  )
}

export default UpcomingEvent