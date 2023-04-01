import React from 'react';
import './Article.css'
const Article = (props) => {
    const {authorName,blogTitle,blogCoverImage,authorImage,readTime,publishDate} = props.item;
    return (
        <div className='article'>
           <img src={blogCoverImage} alt="" /> 
          {/* <img src={authorImage} alt="" /> */}
          
        </div>
    );
};

export default Article;