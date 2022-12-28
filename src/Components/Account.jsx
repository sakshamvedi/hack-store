import React from 'react'
import './Account.css';
import Navbar from './Navbar';
function Account() {
  return (
   <>
   <div className="background-div" style={{backgroundImage:'url("bg-01.png'}}>
<div className='nav-menu'>
    <img src='H.png'></img>
    <h1>HackStore</h1>
</div>
<div className='account-card'>
  <h1>Users Login</h1>
  <p1>Hey , Enter some details to get sign in to shop with us  </p1>
    <input placeholder='Enter Email'/>
    <input type={"password"} placeholder ="Passcode"/>
</div>
   </div>
   </>
  )
}

export default Account