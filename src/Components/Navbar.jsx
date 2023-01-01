import React from 'react'
import './Navbar.css'
import {AiOutlineDashboard, AiOutlineDingtalk, AiOutlineLoading3Quarters, AiOutlineLogin , AiOutlineLogout, AiOutlinePoweroff, AiOutlineSearch} from "react-icons/ai"
import {CgBoy} from "react-icons/cg"
import {VscAccount} from "react-icons/vsc"
import {BsCart3} from "react-icons/bs"
import {MdOutlineAccountCircle} from "react-icons/md"
import {Link} from "react-router-dom"
function Navbar() {
function logout()
{
  localStorage.clear();
  window.location.reload();
}

  return (
   <>
   <div className='upperbar'>
    <p1>50% off on Books !! Hurry Buy Now </p1>
   </div>
   <navbar>
   
    <h2>Hack-Store</h2>
     <h1>Home</h1>
     <h1>Store</h1>
     <Link to = "/Events" className='links'>
     <h1>Apps</h1>
     </Link>
     <h1>Game</h1>
     <span className='login'>
        <div className='search-place'>
        <input placeholder='Search Here'/>
     <AiOutlineSearch  size={18} className = "btnx" />
        </div>
        {
          localStorage.getItem("fcfxemailfcfx") ? 
          <>
           
 <VscAccount size={23} className = "icons"/>
 <Link to ="/profile" className='links'>
 <p1>My Profile</p1>
 </Link> 
 </>
 :
 <>
 <VscAccount size={23} className = "icons"/>
       <Link to ="/Account" className='links'>
 <p1>Log In</p1>
 </Link></> 
        }
      <Link to="/cart">
 <BsCart3 color='black' size={22} className ="icons"/>
 <p1> </p1>
 </Link>


 {
  localStorage.getItem("fcfxemailfcfx")?<><AiOutlinePoweroff color='red' size={22} className ="icons" onClick={logout}/></>
:<></>
}
 
 <p1> </p1>
     </span>
     

   </navbar>

   <div className='line'></div>

   </>
  )
}

export default Navbar