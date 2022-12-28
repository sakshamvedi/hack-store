import {React,useEffect,useState , useContext} from 'react'
import './HomeBody.css'
import axios from 'axios';
import {RiSailboatFill} from "react-icons/ri"
import { AiFillHeart, AiFillStar, AiOutlineHeart, AiOutlineStar } from 'react-icons/ai';
import {SiAcer, SiAdidas, SiAdobe, SiApplemusic, SiDell, SiFacebookgaming, SiInfiniti, SiLenovo, SiLogitech, SiNokia, SiPuma, SiReebok, SiSamsung} from 'react-icons/si'
function HomeBody() {
const [image, setimage] = useState([]);
const [datas , setdatas] = useState([]);
// for changing the color icon of heart
const [like, setlike] = useState(false);
const [prodid , setprodid] = useState(-1);
//for storing various products in an array 
const [product, setproduct] = useState([{ id: 1, title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops", price: 109.95, description: "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday", category: "men's clothing", image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg" }]);

useEffect(() => {
  setimage(["https://images.unsplash.com/photo-1542291026-7eec264c27ff?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyNzg2NTJ8MHwxfHNlYXJjaHwxfHxzaG9lc3xlbnwwfHx8fDE2NzIwNjMwNzA&ixlib=rb-4.0.3&q=80&w=1080" , "https://images.unsplash.com/photo-1521056787327-165dc2a32836?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyNzg2NTJ8MHwxfHNlYXJjaHwyfHxCb29rc3xlbnwwfHx8fDE2NzIwNjM1MDM&ixlib=rb-4.0.3&q=80&w=1080" , "https://images.unsplash.com/photo-1567748534085-467f8a8a475d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyNzg2NTJ8MHwxfHNlYXJjaHw4fHx0aWNrZXRzfGVufDB8fHx8MTY3MjA2MzY3Ng&ixlib=rb-4.0.3&q=80&w=1080" , "https://images.unsplash.com/photo-1565625443865-2c41cdb647d2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyNzg2NTJ8MHwxfHNlYXJjaHw4fHxyZW50YWxzfGVufDB8fHx8MTY3MjA2MzcxNA&ixlib=rb-4.0.3&q=80&w=1080" , "https://images.unsplash.com/photo-1535303311164-664fc9ec6532?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyNzg2NTJ8MHwxfHNlYXJjaHw2fHxhcHBzfGVufDB8fHx8MTY3MjA2MzczNQ&ixlib=rb-4.0.3&q=80&w=1080" , "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyNzg2NTJ8MHwxfHNlYXJjaHwxfHxoZWFkcGhvbmV8ZW58MHx8fHwxNjcyMDYzNzgw&ixlib=rb-4.0.3&q=80&w=1080" ,"https://images.unsplash.com/photo-1605733513597-a8f8341084e6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyNzg2NTJ8MHwxfHNlYXJjaHwxfHxoYW5kJTIwYmFnfGVufDB8fHx8MTY3MjA2ODE1MA&ixlib=rb-4.0.3&q=80&w=1080"  ,
"https://images.unsplash.com/photo-1661961112835-ca6f5811d2af?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyNzg2NTJ8MXwxfHNlYXJjaHw4fHx0ZWNofGVufDB8fHx8MTY3MjA2ODI1NA&ixlib=rb-4.0.3&q=80&w=1080"]) 
  setdatas(["Fashion " ,"Books" , "Events" , "Rentals" , "Apps" , "Accesories" ,"Handbags" , "Devlopers" ])

     apicallofproduct();
}, [])

function likethis(index)
{
  
setprodid(index);
setlike(!like);
}


//  Api call for best deals for you 
async function apicallofproduct()
{
const arr = await axios.get('https://fakestoreapi.com/products?');

 setproduct(arr.data)

 const items = await axios.get("https://api.storerestapi.com/products");
 console.table(items.data.data);

}





  return (
   <>
   <div className="herocontainer">
<p1>Shop Our Top Categories</p1>
<div className='productbox'>
{
  image.map((data, index)=>{
    return(
      <><div className='item' style={{backgroundImage : `url(${data})`}}>
      <p1>{datas[index]}</p1>
      </div>
      </>
    )
  }
  )

}
</div>

   </div>

<div className="bestdeals">

<h1>Today Best Deals For You !</h1>
<div className="containercard">
  {
   
    product.map((data,index)=>{
return (
  <>
   
    <div className="mainproductcard">
  <div className="cardimage">
<img src={data.image}></img>
{

}
<div className = "icon" onClick={()=>likethis(index)}>
  {
    (like && prodid==index)?<AiFillHeart color='red' size={30} /> :<AiOutlineHeart color='black' size={30} /> 
  }
</div>
  </div>
  <div className="cardcontent">
<span>
<p1>{data.title}</p1>
<p2>  ₹{data.price}</p2>
</span>
<p>    {
data.description.length<250 ? data.description :

data.description.substring(0,data.description.length-200)}</p>
<ul>
  <li> <AiFillStar color='green'/></li>
  <li> <AiFillStar color='green' /></li>
  <li> <AiFillStar color='green' /></li>
  <li> <AiOutlineStar/></li>
 
</ul>
<button>Add to Cart</button>
  </div>
</div>

  
  </>
)
    })
  }
  </div>
</div>

<div className='brands'>
<h1>Shop By Brands</h1>
<div className="brands-box">
  <div className="brand-id">
    <SiDell className='my-logo'color='black' size={50}/>
    <span>
      <p1>Dell</p1>
      <p2>Inspire the Bloods</p2>
    </span>
  </div>


  <div className="brand-id">
    <SiLenovo className='my-logo'color='red' size={70}/>
    <span>
      <p1>Lenovo</p1>
      <p2>Inspire the Bloods with tech</p2>
    </span>
  </div>
  <div className="brand-id">
    <SiPuma className='my-logo'color='Black' size={50}/>
    <span>
      <p1>Puma</p1>
      <p2>Inspire the Bloods with tech</p2>
    </span>
  </div>
  <div className="brand-id">
    <SiAdidas className='my-logo'color='Black' size={50}/>
    <span>
      <p1>Adidas</p1>
      <p2>Inspire the Bloods with tech</p2>
    </span>
  </div>
  <div className="brand-id">
    <SiAcer className='my-logo'color='black' size={70}/>
    <span>
      <p1>Acer</p1>
      <p2>Inspire the Bloods with tech</p2>
    </span>
  </div>
  <div className="brand-id">
    <SiLogitech className='my-logo'color='gray' size={50}/>
    <span>
      <p1>Logitech</p1>
      <p2>Inspire the Bloods with tech</p2>
    </span>
  </div>
  <div className="brand-id">
    <SiNokia className='my-logo'color='blue' size={70}/>
    <span>
      <p1>Nokia</p1>
      <p2>Inspire the Bloods with tech</p2>
    </span>
  </div>
  <div className="brand-id">
    <SiAdobe className='my-logo'color='red' size={70}/>
    <span>
      <p1>Adobe</p1>
      <p2>Inspire the Bloods with tech</p2>
    </span>
  </div>
  
  


  </div>
</div>


<div className="deals">
  <h1>Get up to 70% Off</h1>
  <div className="off-card">
    <div className="card">
<div className="part-01">
  <p1>Save</p1>
  <p2> 51% </p2>
  <p>Explore our rentals to rent the best furtinure in the market </p>
</div>
<div className="part-02"></div>
    </div>
    
    <div className="card">
<div className="part-01" style={{backgroundColor : "#fadcdd"}}>
  <p1>Save</p1>
  <p2 style = {{color :"red"}}> 70% </p2>
  <p>Shop Books on the lowest price ever in the market   </p>
</div>
<div className="part-02"  style={{backgroundImage : 'url("https://images.unsplash.com/photo-1513001900722-370f803f498d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyNzg2NTJ8MHwxfHNlYXJjaHw1fHxib29rc3xlbnwwfHx8fDE2NzIxNDg3MzE&ixlib=rb-4.0.3&q=80&w=1080")'}} ></div>
    </div>

    <div className="card">
<div className="part-01" style={{backgroundColor : "#d3f7ed"}}>
  <p1>Save</p1>
  <p2 style = {{color :"green"}}> 67% </p2>
  <p>Shop cloths at the biggest discout to enhance your appearence  </p>
</div>
<div className="part-02"  style={{backgroundImage : 'url("https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyNzg2NTJ8MHwxfHNlYXJjaHwzfHxjbG90aGluZ3xlbnwwfHx8fDE2NzIxNTM0ODQ&ixlib=rb-4.0.3&q=80&w=1080")'}} ></div>
    </div>

    <div className="card">
<div className="part-01" style={{backgroundColor : "#f2e4d8"}}>
  <p1>Save</p1>
  <p2 style = {{color :"#93603d"}}> 30% </p2>
  <p>On Apps and Software to accelerate your life </p>
</div>
<div className="part-02"  style={{backgroundImage : 'url("https://images.unsplash.com/photo-1523474438810-b04a2480633c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyNzg2NTJ8MHwxfHNlYXJjaHwzfHxhcHBzJTIwfGVufDB8fHx8MTY3MjE1MzM2Nw&ixlib=rb-4.0.3&q=80&w=1080")'}} ></div>
    </div>

    
    
    </div>


</div>

<div className="main-image">
  <img src='t14.png'></img>
  <button>Learn More</button>
</div>


<div className="help-line">
  <h1>Services to Help you to Shop</h1>
  <div className="container">
    <div className="card">
      <div className="part1">
<p1>
  Frequently Asked 
  
</p1>
<h2>Questions ? </h2>
<p>
  Updates on safe Shopping in our Shop
</p>

      </div>
      <div className="part2" style={{backgroundImage : 'url("https://images.unsplash.com/photo-1647833202056-e6e67293ba81?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyNzg2NTJ8MHwxfHNlYXJjaHw5fHxmYW1pbHl8ZW58MHx8fHwxNjcyMTY3MDMw&ixlib=rb-4.0.3&q=80&w=1080")'}}></div>
    </div>
    <div className="card">
      <div className="part1">
<p1>
  Online Payments
</p1>
<h2>Process</h2>
<p>
  How we render payments to vendors
</p>

      </div>
      <div className="part2" style={{backgroundImage : 'url("https://images.unsplash.com/photo-1608286022625-bc07f7a21154?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyNzg2NTJ8MHwxfHNlYXJjaHw0fHxwYXltZW50c3xlbnwwfHx8fDE2NzIxNjY3NjE&ixlib=rb-4.0.3&q=80&w=1080")'}}></div>
    </div>
    <div className="card">
      <div className="part1">
<p1>
  Home Delievery  
  
</p1>
<h2>Option </h2>
<p>
 How we deliver the goods safely with you 

 
</p>

      </div>
      <div className="part2" style={{backgroundImage : 'url("https://images.unsplash.com/photo-1617194191528-9a50cf609304?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyNzg2NTJ8MHwxfHNlYXJjaHwxfHxob21lJTIwZGVsaXZlcnl8ZW58MHx8fHwxNjcyMTY2ODgx&ixlib=rb-4.0.3&q=80&w=1080")'}}></div>
    </div>
  </div>
</div>


   </>
  )
}

export default HomeBody