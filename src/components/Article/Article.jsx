import React from 'react';
import './Article.css'
const Article = (props) => {
    const {authorName,blogTitle,blogCoverImage,authorImage,readTime,publishDate} = props.item;

    const handleAddToSpendTime =() =>{
        console.log('spend')
    }
    return (
        <div className='item'>
           <img src={blogCoverImage} alt="" />
           <h6 className='Read'>{readTime}</h6>
           <img src={authorImage} alt="" className='Author-img'/>
           <h3 className='Author-name'>{authorName}</h3>
          <h6 className='Author-name'>{publishDate}</h6>
           <h2>{blogTitle}</h2>
           <button onClick={handleAddToSpendTime} className='Mark'>Mark as read</button>
           
          
          
        </div>
    );
};

export default Article;