import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Home = () => {
      const navigate = useNavigate()
      const [input, setInput]=useState("");
      const handleJoin = () => {
            navigate(`/room/${input}`)
      }
  return (
    <div id='home'>
      <input type='text' placeholder='Enter Room ID' value={input} onChange={(e=>setInput(e.target.value))}/>
      <button onClick={handleJoin}>Join Room</button>
    </div>
  )
}

export default Home
