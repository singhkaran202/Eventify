import React, { useEffect, useState } from 'react'
import './planEvent.css'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'

const PlanEvent = () => {
    // const [eventName, setEventName] = useState('');
    // const [eventType, setEventType] = useState('');
    // const [date, setDate] = useState('');
    // const [time, setTime] = useState('');
    // const [venue, setVenue] = useState('');
    // const [ticketType, setTicketType] = useState('');
    // const [ticketPrice, setTicketPrice] = useState('');
    // const [emailText, setEmailText] = useState('');
    // const [description, setDescription] = useState('');
    const [loading,setLoading] = useState(false)

    const [data, setData] = useState({
        eventName: "",
        eventType: "",
        date: "",
        time: "",
        venue: "",
        ticketPrice: "",
        ticketType: "",
        emailText: "",
        description: ""
    })
    
    const navigate = useNavigate()

    const handleOnChange = (e) => {
        const { name, value } = e.target

        setData((preve) => {
            return {
                ...preve,
                [name]: value
            }
        })
    }

    // Function to handle form submission

    const handleSubmit = async (e) => {
        e.preventDefault()



        setLoading(true)
        const backendUrl= process.env.REACT_APP_BACKEND_URL;
        const response = await fetch(`${backendUrl}/api/plan-event`, {
            method: "post",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(data)
        })
        const dataRespnse = await response.json()
        setLoading(false)
        console.log("dataRespnse", dataRespnse)

        if (dataRespnse.error) {
            toast.error(dataRespnse.message)
        }

        if (dataRespnse.success) {
            toast.success(dataRespnse.message)
            setData({
                eventName: "",
                eventType: "",
                date: "",
                time: "",
                venue: "",
                ticketPrice: "",
                ticketType: "",
                emailText: "",
                description: ""
            })
            navigate('/user-profile')
        }
    }
    console.log("data", data)

        return (
            <div className='plan-event-container'>
                <h2 className='plan-event-heading'>Plan Your Next Event</h2>
                <form onSubmit={handleSubmit} className='plan-event-form'>
                    <div>
                        <div>
                            <label htmlFor="eventName">Name your Event:</label>
                            <input type="text" id="name" name='eventName' value={data.eventName} disabled={loading} onChange={handleOnChange} />
                        </div>
                        <label htmlFor="eventType">Event Type:</label>
                        <select id="eventType" name='eventType' value={data.eventType} disabled={loading} onChange={handleOnChange}>
                            <option value="">Select</option>
                            <option value="Meetup">Meetup</option>
                            <option value="Workshop">Workshop</option>
                            <option value="Other">Other</option>
                        </select>
                    </div>
                    {data.eventType === 'Other' && (
                        <div>
                            <label htmlFor="otherEventType">Other Event Type:</label>
                            <input type="text" id="otherEventType" />
                        </div>
                    )}
                    <div>
                        <label htmlFor="date">Date:</label>
                        <input type="date" id="date" name='date' disabled={loading} value={data.date} onChange={handleOnChange} />
                    </div>
                    <div>
                        <label htmlFor="time">Time:</label>
                        <input type="time" id="time" disabled={loading} name='time' value={data.time} onChange={handleOnChange} />
                    </div>
                    <div>
                        <label htmlFor="venue">Venue:</label>
                        <input type="text" id="venue" disabled={loading} name='venue' value={data.venue} onChange={handleOnChange} />
                    </div>
                    <div>
                        <label htmlFor="ticketType">Ticket Price:</label>
                        <select id="ticketType" disabled={loading} name='ticketType' value={data.ticketType} onChange={handleOnChange}>
                            <option value="">Select</option>
                            <option value="Free">Free</option>
                            <option value="Paid">Paid</option>
                        </select>
                        {data.ticketType === 'Paid' && (
                            <input type="number" placeholder="Enter ticket price in INR" disabled={loading} name='ticketPrice' value={data.ticketPrice} onChange={handleOnChange} />
                        )}
                    </div>
                    {/* <div>
                    <label htmlFor="email">Your Email:</label>
                    <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                </div> */}
                    <div>
                        <label htmlFor="email">Mail to send for Interested Participants:<i>(Provide description with proper contact details of organisers)</i></label>
                        <input type="text" id="email" name='emailText' value={data.emailText} disabled={loading} onChange={handleOnChange} />
                    </div>
                    <div>
                        <label htmlFor="description">Event Description:</label>
                        <textarea id="description" disabled={loading} name='description' value={data.description} onChange={handleOnChange} />
                    </div>
                    <button type="submit">Submit</button>
                </form>
            </div>
        )
    }

    export default PlanEvent