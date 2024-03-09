import React, { useEffect, useState } from 'react'
import axios from 'axios';


const UpcomingEvent = () => {
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
    <div className='h-screen-center'>
        
        <div className="App">
      <h1>Data from MongoDB</h1>
      <div className="data-container">
        {data.map((item, index) => (
          <div key={index} className="data-box">
            <h2>{item.eventName}</h2>
            <p>{item.description}</p>
            {/* Other data fields */}
          </div>
        ))}
      </div>
    </div>
    </div>
   
  )
}

export default UpcomingEvent