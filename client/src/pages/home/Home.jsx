import React, { useEffect, useState} from 'react';
import axios from 'axios';
import './home.css'
import Hero from '../../components/hero/Hero'
export default function Home() {
  const [items, setItems] = useState([]);
  const [error, setError] = useState(null);
  useEffect(()=>{
    axios
      .get("http://localhost:5001/api/books/all")
      .then((res)=>{
        setItems(res.data);
      })
      .catch((error) => {
        console.log("hello this error is .....", error);
        setError(error);
      })
    
  },[])
  if (error) return <div>Error: {error.message}</div>;
  return (
    <div className='home'>
      <Hero/>
      <div className='home-book'>
        <div className='home-book-topic'>
          Best Seller Books
        </div>
        {items.map((item,index)=>(
          <div className='home-book-lists'>
              <div className='home-book-list' key={index}>
                <p>{item.BookName}</p>
                <p>{item.type}</p>
                <img 
                src={`data:image/png;base64,${item.images}`} 
                alt={"Error images"+ item.BookName} 
                style={{ width: '100px', height: 'auto' }} // ปรับขนาดให้เหมาะสม
              />
              </div>
          
          </div>
        ))}
      </div>
    </div>
  )
}
