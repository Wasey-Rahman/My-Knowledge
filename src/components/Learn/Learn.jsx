import React, { useEffect, useState } from 'react';
import './Learn.css'
import Article from '../Article/Article';
import Bookmark from '../Bookmark/Bookmark';
const Learn = () => {
    const [items,setItems ] = useState([]);
    const [bookmark,setBookmark] = useState([]);

    
    useEffect(() => {
       fetch('items.json')
       .then(res => res.json())
       .then(data => setItems(data))

    },[] );

    const handleAddToBookmark = (item)=>{
       const newBookmark=[...bookmark ,item];
       setBookmark(newBookmark);
    }



   


    return (
        <div className='Learn-container'>
             <div className="item-container">
             {
                items.map(item =><Article
                key={item.id}
                item = {item}
                handleAddToBookmark={handleAddToBookmark}
                ></Article> )
             }
             </div>
             <div className='Bookmark-container'>
                <Bookmark bookmark={bookmark}></Bookmark>
                
             </div>
        </div>
    );
};

export default Learn;