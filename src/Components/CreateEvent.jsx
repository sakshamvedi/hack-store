import {React ,useState} from 'react'
import './createEvent.css'
import {db} from "./firebase-config";
import {collection , getDoc , addDoc} from "firebase/firestore"


import { async } from '@firebase/util';
function CreateEvent() {
  

const [eventname, seteventname] = useState("");
const [orgainizer, setorgainizer] = useState("");
const [link, setlink] = useState("");
const [people, setpeople] = useState("")
const [number, setnumber] = useState("")

  const dataref = collection(db , "fcfxeventfcfx");
async function submit()
  {
    await addDoc(dataref , {
        nameevent : eventname,
        orgainizername : orgainizer,
       bannerimage:link,
        numbername :number,
       date : people,

    })
    alert("Your Event is Created ")

  }
  return (
    <div className='create-event' style={{backgroundImage : 'url("bg-02.png")'}}>

<h1>Hack-Store Events</h1>
<div>

    <input placeholder='Enter the Event Name'  onChange={(e)=>{seteventname(e.target.value)}}  />
 <input placeholder='Enter the Event Organizer name' onChange={(e)=>{setorgainizer(e.target.value)}} />
 <input placeholder='Enter the Number of Event Organizer ' onChange={(e)=>{setnumber(e.target.value)}}   />
 <input placeholder='Banner Image link of your event ' onChange={(e)=>{setlink(e.target.value)}}   />
 <input placeholder='Date of Event (DD/MM/YY) '  onChange={(e)=>{setpeople(e.target.value)}}   />
 <button onClick={submit}>Create Event</button>
 
</div>

    </div>
  )
}

export default CreateEvent