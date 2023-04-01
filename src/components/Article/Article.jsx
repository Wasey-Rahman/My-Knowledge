import React from 'react';
import './Article.css'
const Article = (props) => {
    const {authorName,blogTitle,blogCoverImage,authorImage,readTime,publishDate} = props.item;
    return (
        <div className='item'>
           <img src={blogCoverImage} alt="" />
           <img src={authorImage} alt="" className='Author-img'/>
           <h3 className='Author-name'>{authorName}</h3>
           <h6>{publishDate}</h6>
           <h2>{blogTitle}</h2>
           
          
          
        </div>
    );
};

export default Article;