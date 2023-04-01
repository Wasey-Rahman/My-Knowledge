import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBookBookmark } from '@fortawesome/free-solid-svg-icons'

import './Article.css'
const Article = (props) => {
    const {authorName,blogTitle,blogCoverImage,authorImage,readTime,publishDate} = props.item;

    const handleAddToBookmark = props.handleAddToBookmark;

   

    return (
        <div className='item'>
           <img src={blogCoverImage} alt="" />
           <h6 className='Read'>{readTime}</h6><button onClick={() =>handleAddToBookmark(props.item)} className='Bookmark'><FontAwesomeIcon icon={faBookBookmark} /></button>
           <img src={authorImage} alt="" className='Author-img'/>
           <h3 className='Author-name'>{authorName}</h3>
          <h6 className='Author-name'>{publishDate}</h6>
           <h2 className='blog'>{blogTitle}</h2>
           <button  className='Mark'>Mark as read</button>
           
          
          
        </div>
        
    );
};

export default Article;