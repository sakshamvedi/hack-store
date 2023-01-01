import {React ,useEffect ,useState} from 'react'
import {useLocation} from 'react-router-dom';
import {AiFillStar} from "react-icons/ai";
import {TbDiscount2} from "react-icons/tb"
import './Product.css'
function Product() {

    const location = useLocation();

useEffect(() => {
  discount();  
},[] )

const [dicounts, setdiscounts] = useState("20%")

function discount()
{
   
}

  return (
    <>
    <div className="container-box">
        <div className="box1">
            
            <img src={location.state.ima}/>
            <div className="smallbox">
                <img src= {location.state.ima}/>
            </div>
        </div>
        <div className="box2">
            <h1>{location.state.tit} </h1>
            <span>
                <div> <AiFillStar color = "white"/>
                <p1>5.0</p1></div>

            <p2>Sold 120</p2>
            </span>
            <h2>
           {location.state.description}
            </h2>
          
<div className='price-div'>
    <span><TbDiscount2 color='red' size={30}/><p1 className = "disc">-{dicounts}</p1> 
    <p>₹ {location.state.pri}</p></span>
    <p2>was : <strike>₹ {parseFloat(location.state.pri + 159.71)}</strike></p2>
</div>
<button>In Stock</button>
        </div>
        <div className="box3">
            <label>Delivery</label>
            <input type={"search"} placeholder = "Ayodhya , Uttar-Pradesh (India) " />
            <p1>Total Items : 1</p1>
            <div>
                <span> <p1>Price</p1> <p2>{location.state.pri}</p2></span>
                <span><p1>Shipping</p1> <p2>Free</p2></span>
            </div>
            <button>Add to Cart</button>
           
            <div className='btn2'>
                <button>Buy Now</button>
                 </div>
        </div>
    </div>
    </>
  )
}

export default Product