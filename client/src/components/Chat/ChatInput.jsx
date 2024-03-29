import React from 'react'
import {useState} from 'react'
import axios from 'axios'
import '../styles/ChatInput.css';

const ChatInput = ({ user, clickedUser, getUserMessages, getClickedUsersMessages }) => {
  const [textArea, setTextArea] = useState("")
  const userId = user?.user_id
  const clickedUserId = clickedUser?.user_id


  
  const addMessage = async () => {
    const options = {
       
        month: 'short',
        day: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric'
      };

      const message = {
          timestamp: new Date().toLocaleTimeString(undefined, options),
          from_userId: userId,
          to_userId: clickedUserId,
          message: textArea
      }

      try {
          await axios.post('https://loveetback.onrender.com/message', { message })
          getUserMessages()
          getClickedUsersMessages()
          setTextArea("")
      } catch (error) {
          console.log(error)
      }
  }


  
  console.log(getUserMessages);

  return (
      <div className="chat-input">
          <textarea value={textArea} onChange={(e) => setTextArea(e.target.value)}/>
          <button className="secondary-button" onClick={addMessage}>Submit</button>
      </div>
  )
}

export default ChatInput