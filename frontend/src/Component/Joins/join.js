import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import logo from "../../images/logo.png"
import "./Join.css"


let user;

export default function Join() {
  const [name, setName] = useState("");


  const sendUser = () => {
    user = document.getElementById('joinInput').value;
    document.getElementById('joinInput').value = "";
  }
  return (
    <div className='joinPage'>
      <div className='joinContainer'>
        <img src={logo} alt="logo" />
        <h1> CHAT - APP</h1>
        <input onChange={(e) => setName(e.target.value)} placeholder="Enter your name" type="text" id="joinInput" />
        <Link onClick={(event) => !name ? event.preventDefault() : null} to='/cchat'><button onClick={sendUser} className="joinbtn">Join Button</button></Link>

      </div>
    </div>

  )
}
export { user };

