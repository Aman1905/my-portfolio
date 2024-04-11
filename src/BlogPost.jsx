import React from 'react'

const BlogPost = ({ title, image, buttonText, buttonLink }) => {
    return (
      <div className="blog-post">
        <a href={buttonLink} className="blog-post-button">
            <img src={image} alt={title} className="blog-post-image" />
            <h3 className="blog-post-title">{title}</h3>
        </a>
      </div>
    );
  };
export default BlogPost