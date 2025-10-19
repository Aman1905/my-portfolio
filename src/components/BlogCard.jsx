import React from 'react'

const BlogCard = ({image, title, description, link, date}) => {
  return (
    <div className="blog-card">
      <a href={link} rel="noreferrer" target='_blank' style={{textDecoration: 'none'}}>
        <div className="blog-card-image">
          <img src={image} alt={title} />
        </div>
        <div className="blog-card-description">
          <h3>{title}</h3>
          <p>{description}</p>
          <h6>{date}</h6>
        </div>
      </a>
    </div>
  )
}

export default BlogCard


