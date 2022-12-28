import axios from 'axios'
import React from 'react'

async function login()
{
   const userdata =  await axios.get('https://fakestoreapi.com/users',{
        method:"POST",
        body:JSON.stringify(
            {
                email:'sakshamvedi@gmail.com',
                username:'sakhsham',
                password:'m38rmF$$%',
                name:{
                    firstname:'John',
                    lastname:'Doe'
                },
                address:{
                    city:'kilcoole',
                    street:'7835 new road',
                    number:3,
                    zipcode:'12926-3874',
                    geolocation:{
                        lat:'-37.3159',
                        long:'81.1496'
                    }
                },
                phone:'1-570-236-7033'
            }
        )
    })

    console.log(userdata);
}


function Rough() {
  return (
    <>
<button onClick={login}>Log in </button>    
    </>
  )
}

export default Rough