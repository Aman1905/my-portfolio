import React from 'react';
import BlogPost from './BlogPost'; // Import BlogPost component

const BlogSection = ({ posts }) => {
  return (
    <section className="blog-section container">
      <h2 className="blog-section-heading">Learn in Cosmos...</h2>
      <div className="blog-posts">
        {posts.map((post) => (
          <BlogPost key={post.id} {...post} />
        ))}
      </div>
    </section>
  );
};

export default BlogSection;