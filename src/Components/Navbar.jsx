import React from 'react'
import './Navbar.css'
import {AiOutlineLogin , AiOutlineSearch} from "react-icons/ai"
import {VscAccount} from "react-icons/vsc"
import {BsCart3} from "react-icons/bs"
import {MdOutlineAccountCircle} from "react-icons/md"
import {Link} from "react-router-dom"
function Navbar() {
  return (
   <>
   <div className='upperbar'>
    <p1>50% off on Books !! Hurry Buy Now </p1>
   </div>
   <navbar>
   
    <h2>Hack-Store</h2>
     <h1>Home</h1>
     <h1>Books</h1>
     <h1>Events</h1>
     <h1>Rentels</h1>
     <span className='login'>
        <div className='search-place'>
        <input placeholder='Search Here'/>
        <button><AiOutlineSearch  size={18}/></button>
        </div>
        
       <VscAccount size={23} className = "icons"/>
       <Link to ="/Account" className='links'>
 <p1>Account</p1>
 </Link>
 <BsCart3 color='black' size={22} className ="icons"/>
 <p1> Cart</p1>
     </span>
     

   </navbar>

   <div className='line'></div>

   </>
  )
}

export default Navbar