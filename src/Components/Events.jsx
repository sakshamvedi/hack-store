import {React,useState , useEffect} from 'react'
import { Link } from 'react-router-dom'
import {db} from "./firebase-config";
import {collection , getDoc , addDoc ,getDocs, doc} from "firebase/firestore"

import './Events.css'
import { async } from '@firebase/util';
import { AiFillStar } from 'react-icons/ai';
function Events() {
    const userref = collection(db , "fcfxeventfcfx");
    const [user, setusers]  = useState([]);

    useEffect(() => {
      funvalue();
    }, [])

    async function funvalue()
    {
        const data = await getDocs(userref);
        setusers(data.docs.map((doc)=>({...doc.data() , id:doc.id})))
    }
    

  return (
    <>
    <div className='eventbuttons'>
    {
        localStorage.getItem("fcfxemailfcfx") ?  
        
        <button> <Link to ="/create" className='links'>Create Your Event </Link></button> : <button>Log In to create your Events</button>
    }
        
        
        </div>
     
    {/* <div className='events'>

        {
            user.map((data)=>{
                return(<>
                <div className='events-cards'>
    <div className="box1"></div>
    <div className="box2">
        <p1>{data.nameevent}</p1>
        <p1>{data.orgainizername}</p1>
        <p1>No. of People Allowed : {data.peoplename}</p1>
        <button><a href={data.linkname} className='link'>Join Group</a></button>
        <button><a  className='link'>Register</a></button>
    </div>
</div>

                </>)
            })
        }

    </div> */}

<div className='eventcard'>
{
    user.map((data)=>{
        return(
            <>
                <div className="card">
        <div className="box1" style={{backgroundImage:`url(${data.bannerimage})`}}></div>
        <span>

            <div className="box3">Online</div>
        </span>

        <div className="box4">{data.nameevent}</div>
        <div>
        <span><AiFillStar size={20} color = "green"/>
        <AiFillStar size={20} color = "green"/>
        <AiFillStar size={20} color = "green"/>
        <AiFillStar size={20} color = "green"/>
        <AiFillStar size={20} color = "green"/></span>
        </div>
      
            
            <div className="box5">
<button>{data.date}</button>            
<button className='btn2'>Know More</button>

            </div>
        
    </div>
            
            </>
        )
    })
}
</div>


    </>
  )
}

export default Events