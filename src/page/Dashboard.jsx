import React, { useState } from 'react'

const init={
    username:"akash",
    email:"akash@gmail.com",
    address:"ahmedabad",
    password:"boom"
}

function Dashboard() {
    const [user,setUser] = useState(init)

  
  return (
    <div>
        <div>Dashboard</div>
        {user.map(e=> <div>
            <h3>{user.username}</h3>
            <h4>{user.email}</h4>
            <h4>{user.address}</h4>
        </div>)}
       
    </div>
    
  )
}

export default Dashboard