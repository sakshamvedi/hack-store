import React, { useEffect, useState } from 'react'
import "./Cart.css"

import {db} from "./firebase-config";
import {collection , getDoc , addDoc ,getDocs, doc} from "firebase/firestore"

function Cart() {
const userref = collection(db , localStorage.getItem("fcfxemailfcfx"));
const [user, setusers]  = useState([]);
const [add, setadd] = useState(0);
useEffect(() => {
async function getusers()
{
    const data = await getDocs(userref);
       setusers(data.docs.map((doc)=>({...doc.data() , id:doc.id})))
       var value = 0;
user.map((data)=>{
    value = value+data.price;
})

setadd(value);
       console.log(user)
}



getusers()


}, [])

  return (
  <>
  <div className='cart-container'>
    <h1>My Cart</h1>

    {

user.map((data)=>{
    return(
        <>
         <div className='itembox'>
        <div className="box1" style={{backgroundImage : `url(${data.image})`}}>
        </div>
        <div className="box2">
            <p1>{data.titles}</p1>
            <p2>Delivery : 1 to 7 Days</p2>
            <span>
        <p1>Qty : 1</p1>
        <p1>Size : S</p1>
        <p1>{data.price} Rs.</p1>
        </span>
        </div>
       
    </div>
        
        </>
    )
})


    }

    <button>Checkout for Rs. {add}</button>
   
  </div>
  </>
  )
}

export default Cart