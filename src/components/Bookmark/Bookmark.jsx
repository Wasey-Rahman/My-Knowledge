import React from 'react';
import './Bookmark.css'
const Bookmark = ({bookmark}) => {
    // const bookmark =props.bookmark;
    // const {bookmark} =props;
    console.log(bookmark);
    

    return (
        <div>
            <div className="time">
              <h4 className='Title'>Spent time on read :   min</h4>
              <div className=" bookmark-container">
               <h4>Bookmarked Blogs : {bookmark.length}</h4>
               
                     
 
              </div>
             </div>
        </div>
    );
};

export default Bookmark;