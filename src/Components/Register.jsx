import {React,useState} from 'react'
import './Account.css';
import Navbar from './Navbar';
import {createUserWithEmailAndPassword} from "firebase/auth"
import {Link, } from "react-router-dom";
import { AiFillAlert, AiFillGoogleCircle } from 'react-icons/ai';
import { BsGoogle } from 'react-icons/bs';
import { FcGoogle } from 'react-icons/fc';
import { useNavigate } from 'react-router-dom';
import {auth} from "./firebase-config";
function Register() {
    const navigate = useNavigate();
const [email, setemail] = useState("");
const [password, setpassword] = useState("");
async function login(){
  await createUserWithEmailAndPassword(
    auth ,
    email,
    password,
  );
afterlogin()
}


function afterlogin()
{ 
 
  localStorage.setItem("fcfxemailfcfx" , email);
  navigate('/');

}

    return (
   <>
   <div className="background-div" style={{backgroundImage:'url("bg-01.png'}}>
<div className='nav-menu'>
    <img src='H.png'></img>
    <Link to= "/" className='link'>
    <h1>HackStore</h1>
    </Link>
</div>
<div className='account-card'>
  <h1>Welcome Guest </h1>
  <p1>Hey , Enter some details to get sign in to shop with us  </p1>
 
    <input placeholder='Enter Email' onChange={(e)=>(setemail(e.target.value))}/>
    <input type={"password"} placeholder ="Passcode" onChange={(e)=>(setpassword(e.target.value))} />
    <input type={"password"} placeholder ="Confirm Passcode"/>
    <button onClick={login}>Register Account</button>
    <h2>Already Have Account <Link to  = "/account">Log in</Link></h2>
   
</div>
   </div>
   </>
  )
}

export default Register