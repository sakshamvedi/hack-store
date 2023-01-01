import {React,useState} from 'react'
import './Footer.css'
import {SiGooglepay} from 'react-icons/si'

import {FaAmazonPay, FaApplePay, FaCcMastercard, FaCcStripe ,FaCcVisa,FaStripe} from "react-icons/fa"
function Footer() {
    const [services, setservices] = useState(["Gift Card", "Apps" ,"Shooping & Delivery" ,"Technology"])
   const [about, setabout] = useState(["About HackStore" ,  "Careers"  , "News & Blogs" , "Help" ,"Press Center"])
    const [arr, setarr] = useState(["Fashion " , "Dresses" , "Lifestyle" , "Technology" , "Software " , "Applications" , "Laptops " ])
  return (
   <>
   <div className='line'></div>
   <div className="footer-box">
    <div className="box1">
        <img src='H.png'/>
        <h1>Hack-Store</h1>
        <p1>This Project is solely created by saksham vedi <a href ="https://www.linkedin.com/in/sakshamvedi/">Profile</a></p1>
        <p1>We offer you so much discounts and brands  to you with the comfort of your home , so enjoy the family, we do all the travel for you ! </p1>
     <h2>Accepted Payments</h2>
     <span>
        <FaStripe size={50} color ="blue" className='box'/>
        <FaAmazonPay size={40} className='box' />
        <FaCcVisa size={40} color ="#20287f" className='box' />
        <FaCcMastercard  size={40} color = "red" className='box' />
        <FaApplePay size={40} className='box' />
        <SiGooglepay size={40} className='box' />
     </span>
    </div>

    <div className="box2">
        <h1>Departments</h1>
        <ul>
{
    arr.map((data)=>{
        return (
            <>
            <li>
                {data}
            </li>
            
            </>
        )
    })
}

        </ul>
    </div>

    <div className="box2">
        <h1> About Us</h1>
        <ul>
{
    about.map((data)=>{
        return (
            <>
            <li>
                {data}
            </li>
            
            </>
        )
    })
}

        </ul>
    </div>

    <div className="box2">
        <h1> Services</h1>
        <ul>
{
    services.map((data)=>{
        return (
            <>
            <li>
                {data}
            </li>
            
            </>
        )
    })
}

        </ul>
    </div>
   
   </div>
  
   </>
  )
}

export default Footer