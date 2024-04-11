import React from 'react'
import Navbar from './Navbar'

import BlogSection from './BlogSection'; // Import BlogSection component

const posts = [
  // Define your blog post data here (title, image, excerpt, buttonText, buttonLink)
  {
    id: 1,
    title: 'Introduction to Cloud and AWS',
    image: '/assets/aws.png',
    buttonLink: '/blog/post-1', // Assuming you have separate pages for individual posts
  },
  {
    id: 2,
    title: 'Containers in AWS',
    image: '/assets/ecs.png',
    buttonLink: '/blog/post-1', // Assuming you have separate pages for individual posts
  },
  {
    id: 3,
    title: 'Configure CI/CD using Azure DevOps',
    image: '/assets/azure_devops.png',
    buttonLink: '/blog/post-1', // Assuming you have separate pages for individual posts
  },
  {
    id: 4,
    title: 'Binary Search in Java',
    image: '/assets/binary_search.png',
    buttonLink: '/blog/post-1', // Assuming you have separate pages for individual posts
  },
  {
    id: 5,
    title: 'Complete Guide to Git and GitHub',
    image: '/assets/github.png',
    buttonLink: '/blog/post-1', // Assuming you have separate pages for individual posts
  },
  {
    id: 6,
    title: 'Exploring Blockchain',
    image: '/assets/blockchain.png',
    buttonLink: '/blog/post-1', // Assuming you have separate pages for individual posts
  },
  {
    id: 7,
    title: "Beginner's Guide to Docker",
    image: '/assets/docker.png',
    buttonLink: '/blog/post-1', // Assuming you have separate pages for individual posts
  },
];

const Blog = () => {
  return (
    <>
      <Navbar />
      <div className="blog-page">
        <BlogSection posts={posts} />
      </div>
    </>
  );
};

export default Blog