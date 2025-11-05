import { useState } from "react"
import "./Form.css"

export default function Form() {

    let [fullName, setFullName] = useState("");
    let [userName, setUserName] = useState("");

    let handleNameChange = (event) => {

        console.log(event.target.value);
        setFullName(event.target.value)
    }

    let handleUserName = (event) => {

        console.log(event.target.value);
        setUserName(event.target.value)
    }

    return (
        <form action="/" className="clientdetails">

            <h1>Personal Detail Form</h1>

            <div className="clientname">
                <label htmlFor="fullname">Enter Your Full Name</label>
                <input type="text" placeholder="Enter Your Name" value={fullName} onChange={handleNameChange} id="fullname" />

            </div>


            <div className="clientusername">

                <label htmlFor="username">Enter User Full Name</label>

                <input type="text" placeholder="Enter User Name" value={userName} onChange={handleUserName} id="username" />

            </div>

            <div className="submit">
                <button className="submitbtn">Submit</button>
            </div>



        </form>
    )
}
