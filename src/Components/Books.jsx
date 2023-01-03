import { async } from '@firebase/util';
import{ React ,useEffect , useState} from 'react'
import './Books.css';
import axios from 'axios';
import { AiFillStar, AiOutlineStar } from 'react-icons/ai';
import { Link } from 'react-router-dom';
function Books() {
const [book, setbook] = useState([])
    useEffect(() => {
     mybooks();
      }, [])

      async function mybooks(){
       const data = await axios.get("https://raw.githubusercontent.com/sakshamvedi/books_api/main/books.json");
       console.log(data.data.books);
       setbook(data.data.books)
    }
    
    
      
      

  return (
   <>

   <div className="my-body">
    <div className="shelves">
       <img src='https://cdn.dribbble.com/userupload/2558446/file/original-040b025a8c08dd598fa34301f16b3503.jpg?compress=1&resize=1200x900&vertical=center'></img>
       
       <div>
       <h1>Children are made readers on the laps of their parents.</h1>
       <p1>"Books are the legacies that a great genius leaves to mankind, which are delivered down from generation to generation as presents to the posterity of those who are yet unborn." - Joseph Addison</p1>
       <button>60% Off on Story Telling Books</button>
        </div>
    </div>
   
   <div className="books">
    <h1>Our Collection</h1>
    <div className='books-guide'>
{
    book.map((info)=>{
        return(
            <>
            <div className="mainbox">
    <div className="box1"><img src= {info.image}>
    </img></div>
    <div className="box2">
        <div className="area1">
   <span><h1>{info.title} </h1>
   <p2>{info.price}</p2></span>
   </div>
   <p1>{info.subtitle}</p1>

  <span>
    <AiFillStar color='orange' size={20}/>
  <AiFillStar color='orange' size={20}/>
  <AiFillStar color='orange' size={20}/>
  <AiOutlineStar color='orange' size={20}/>
  <AiOutlineStar color='orange' size={20}/> <p>120+ Reviews</p></span>
   <span>
   
    <button>Read Now</button>
   
   <button className='btn2'>Add to Cart</button>
   </span>
    </div>
  
</div>
            </>
        )
    })
}
   </div>
   </div>

   </div>
   </>
  )
}

export default Books