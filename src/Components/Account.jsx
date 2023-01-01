import {React ,useState }from 'react'
import './Account.css';
import Navbar from './Navbar';
import {Link} from "react-router-dom";
import { AiFillAlert, AiFillGoogleCircle } from 'react-icons/ai';
import { BsGoogle } from 'react-icons/bs';
import { FcGoogle } from 'react-icons/fc';
import { useNavigate } from 'react-router-dom';
import {auth} from "./firebase-config";
import {createUserWithEmailAndPassword ,signInWithEmailAndPassword , GoogleAuthProvider ,signInWithPopup} from "firebase/auth"
import { async } from '@firebase/util';
function Account() {
const [email, setemail] = useState("")
const [password, setpassword] = useState("")
const navigate = useNavigate();
async function signin()
{
  try{
  await signInWithEmailAndPassword(
    auth,
    email,
    password,
  )
  afterlogin();
}
catch(error)
{
  alert("Invalid ID/Password");
}
}

async function googlein()
{
  const provider = new GoogleAuthProvider();

  await signInWithPopup(auth , provider).then((result)=>{
   const name = result.user.displayName;
   const email = result.user.email;
   localStorage.setItem("fcfxemailfcfx" , email);
   localStorage.setItem("fcfxnamefcfx" , name);
   navigate('/');

  })
  .catch((error)=>{
    alert("Something went wrong !!!")
  })
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
  <h1>Users Login</h1>
  <p1>Hey , Enter some details to get sign in to shop with us  </p1>
    <input placeholder='Enter Email' onChange={(e)=>(setemail(e.target.value))}/>
    <input type={"password"} placeholder ="Passcode"  onChange={(e)=>(setpassword(e.target.value))}  />
    <button onClick={signin}>Sign In</button>
    <p2>or Sign in With</p2>
    <div onClick={googlein} >
    <FcGoogle size={20} className = "icon"/> Google
    </div>
    <h2>Don't have any account <Link to  = "/register">Register Here</Link></h2>
   
</div>
   </div>
   </>
  )
}

export default Account