import React, { useEffect, useState } from 'react';
import './Learn.css'
const Learn = () => {
    const[item ,setItem] = useState([]);
    useEffect(() =>{
    fetch('item.json')
    .then(res => res.json())
    .then(data => setItem(data))
    },[])
    return (
        <div className='Learn-container'>
            <div className="item-container">

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