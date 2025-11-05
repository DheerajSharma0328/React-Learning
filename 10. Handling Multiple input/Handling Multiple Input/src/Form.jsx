import { useState } from "react"
import "./Form.css"


export default function Form() {

    let [formData, setFormData] = useState({
        fullnamedata: "",
        usernamedata: "",
        userpassdata: ""

    })

    let handleInputchange = (event) => {
        // let fieldName = event.target.name;
        // let newValue = event.target.value;

        setFormData((currData) => {
            // currData[fieldName] = newValue;
            return { ...currData, [event.target.name] : event.target.value }
        })
    }

    let handleDefault = (event) => {
        event.preventDefault();
        console.log(formData);
        setFormData({
            fullnamedata: "",
            usernamedata: "",
            userpassdata: ""

        })
    }

    return (
        <form onSubmit={handleDefault} id="form">

            <div className="name">

                <label htmlFor="fullname">Full Name</label>
                <input
                    type="text"
                    placeholder="Enter Your Name"
                    id="fullname"
                    value={formData.fullnamedata}
                    name="fullnamedata"
                    onChange={handleInputchange}
                />

            </div>

            <div className="user">

                <label htmlFor="username">User Name</label>
                <input
                    type="text"
                    id="username"
                    placeholder="Enter Your User Name"
                    value={formData.usernamedata}
                    name="usernamedata"
                    onChange={handleInputchange}
                />

            </div>

            <div className="password">

                <label htmlFor="userpass">User Password</label>
                <input
                    type="password"
                    id="userpass"
                    placeholder="Enter Your Password"
                    value={formData.userpassdata}
                    name="userpassdata"
                    onChange={handleInputchange}
                />

            </div>


            <button type="submit">Submit</button>

        </form>
    )
}
