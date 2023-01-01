import {React,useState , useEffect} from 'react'
import { Link } from 'react-router-dom'
import {db} from "./firebase-config";
import {collection , getDoc , addDoc ,getDocs, doc} from "firebase/firestore"

import './Events.css'
import { async } from '@firebase/util';
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
     
    <div className='events'>

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

    </div>
    </>
  )
}

export default Events