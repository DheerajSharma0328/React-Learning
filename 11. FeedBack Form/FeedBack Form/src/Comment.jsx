import React, { useState } from 'react'
import './comment.css'
import Feedback from './Feedback'

export default function Comment() {

    let [comment, setComment] = useState([{

        username: "@dk",
        feedback: "Nice Job",
        rating: 5

    }])

    let addNewComment = (event) => {

        setComment((currComment) => [...currComment, comment])

    }



    return (

        <>
            <div >
                <h1>All Comment</h1>

                {comment.map((comment, index) => (
                    <div className='comment' key={index}>

                        <span>Feedback-{comment.feedback}</span>
                        <span>Rating - {comment.rating}</span>
                        <p><span>Username- {comment.username}</span></p>

                    </div>
                ))}
            </div>


            <Feedback addNewComment={addNewComment} />
        </>
    )
}
