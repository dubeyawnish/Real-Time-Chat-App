import React from 'react'
import "./msg.css";
 const msg = ({user,message,classs}) => {
    if(user){
        return (
            <div className= {`messageBox ${classs}`}>
               { `${user}:${message}`}
            </div>
          )
    }
    else{
  return (
    <div className={`messageBox ${classs}`}>
    
        {`You:${message}`}
    
        {message}
    </div>
  )
    }
}
export default msg;