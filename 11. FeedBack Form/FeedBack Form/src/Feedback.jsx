import { useState } from 'react'
import './Feedback.css'
import {useFormik} from 'formik'

export default function Feedback({addNewComment}) {

    let [formData, setFormData] = useState({
        username: "",
        feedback: "",
        rating: 5,
    })

    let handleInputChange = (event)=>{

        setFormData((currData)=>{
           return {...currData, [event.target.name] : event.target.value}
        })
    }

    let handleSubmit = (event)=>{
        console.log(formData);
        addNewComment(formData)
        event.preventDefault();
        setFormData({
        username: "",
        feedback: "",
        rating: 5,
    })
    }

    return (

        <div className='holder'>
            <h1 className='heading'>FeedBack Form</h1>

            <form className='formdata' onSubmit={handleSubmit}>


                <input type="text" placeholder='Enter Your User Name' value={formData.username} name='username' onChange={handleInputChange}/>

                <textarea placeholder='Give Your Feedback' value={formData.feedback}
                name='feedback' onChange={handleInputChange}></textarea>

                <input type="number" placeholder='Give Your Rating' min={1} max={5} value={formData.rating} name='rating' onChange={handleInputChange}/>

                <button type='submit'>Submit Feedback</button>
            </form>

        </div>

    )
}
