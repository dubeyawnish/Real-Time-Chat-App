import React, { useEffect, useState } from 'react'
import { user } from "../Joins/join.js"
import socketIO from "socket.io-client";
import "./Chat.css";
import sendLogo from "../../images/send.png";
import Message from "../Message/msg"
import ReactScrollToBottom from "react-scroll-to-bottom"
import closeIcon from "../../images/closecon.png"


const ENDPOINT = "http://localhost:4500/"

let socket;

export default function Chatt() {

  const [id, setid] = useState("")
  const [messages, setmessages] = useState([])

  const send = () => {
    const message = document.getElementById('chatInput').value;
    socket.emit('message', { message, id });
    document.getElementById('chatInput').value = "";
  }

  useEffect(() => {
     socket = socketIO(ENDPOINT, { transports: ['websocket'] });
    socket.on('connect', () => {
      alert("connected");
      setid(socket.id);
    })
    //console.log(socket);
    socket.emit('joined', { user });

    socket.on('welcome', (data) => {
      setmessages([...messages, data]);
     // console.log(data.user, data.message);
    })

    socket.on('userJoined', (data) => {
      setmessages([...messages, data]);
     // console.log(data.user, data.message);
    })
    socket.on('leave', (data) => {
      setmessages([...messages, data]);
     // console.log(data.user, data.message);
    })


    return () => {
      //socket.emit('disconnect');
      socket.disconnect();
      socket.off();
      

    }
  }, [])
  useEffect(() => {
    socket.on('sendMessage', (data) => {
      setmessages([...messages, data]);
      //console.log(data.user, data.message, data.id);
    })

    return () => {
      socket.off();
    }
  }, [messages])




  return (
    <div className="chatPage">
      <div className="chatContainer">
        <div className="header">
          <h2>Chatting...</h2>
          <a href="/">  <img src={closeIcon} alt="Close" /></a>
        </div>
        <ReactScrollToBottom className="chatBox">
          {messages.map((item, i) => <Message user={item.id === id ? '' : item.user} message={item.message} classs={item.id === id ? 'right' : 'left'} />)}


        </ReactScrollToBottom>
        <div className="inputBox">
          <input onKeyPress={(event) => event.key === 'Enter' ? send() : null} type="text" id="chatInput" />
          <button onClick={send} className='sendBtn' > <img src={sendLogo} alt="send" /></button>
        </div>
      </div>

    </div>
  )
}

