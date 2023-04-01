import React, { useEffect, useState } from 'react';
import './Learn.css'
import Article from '../Article/Article';
const Learn = () => {
    const [items,setItems ] = useState([]);
    useEffect(() => {
       fetch('items.json')
       .then(res => res.json())
       .then(data => setItems(data))

    },[] )
    return (
        <div className='Learn-container'>
             <div className="item-container">
             {
                items.map(item =><Article
                key={item.id}
                item = {item}
                ></Article> )
             }
             </div>
             <div className="time">
              <h4 className='Title'>Spent time on read :   min</h4>
              <div className=" bookmark-container">
               <h4>Bookmarked Blogs : </h4>
                     
 
              </div>
             </div>
        </div>
    );
};

export default Learn;