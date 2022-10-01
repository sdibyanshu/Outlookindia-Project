import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import "./Login.css";







const initstate = {

  Email: "",
  Password: "",

}


export default function Login() {

  const navigate = useNavigate()



  const [formdatas, setformdatas] = useState(initstate)

  const handleChange = (e) => {
    const { name, value } = e.target;
    setformdatas({ ...formdatas, [name]: value })

  }
  console.log(formdatas)

  const handleClick = () => {
    let registeredUser = JSON.parse(localStorage.getItem("registeredUser")) || [];
    const user = registeredUser.filter((el) => el.Email === formdatas.Email && el.Password === formdatas.Password);
    console.log(registeredUser)
    console.log(user)
    // if(user.length===0&&formdatas.Email===""&&formdatas.Password===""){
    if (user.length !== 0) {
      navigate("/")
    }
    else {
      alert("Fill correct details")
    }

  }


  return (
    <div id='login1'>

      <input type="email" name="Email" placeholder='Email' onChange={handleChange} /><br />
      <input type="password" name="Password" placeholder='password' onChange={handleChange} /><br />
      <button id='sub' onClick={handleClick}>Login</button>
    </div>
  )
}