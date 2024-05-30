import React from 'react'
import Navbar from './Navbar'

import BlogSection from './BlogSection'; // Import BlogSection component

const posts = [
  // Define your blog post data here (title, image, excerpt, buttonText, buttonLink)
  {
    id: 1,
    title: 'Introduction to Cloud and AWS',
    image: '/assets/aws.png',
    buttonLink: 'https://amanchopra-atg.medium.com/introduction-to-cloud-and-aws-amazon-web-services-59de1fa2d156', // Assuming you have separate pages for individual posts
  },
  {
    id: 2,
    title: 'Containers in AWS',
    image: '/assets/ecs.png',
    buttonLink: 'https://medium.com/nerd-for-tech/containers-in-aws-amazon-web-services-fcc329342135', // Assuming you have separate pages for individual posts
  },
  {
    id: 3,
    title: 'Configure CI/CD using Azure DevOps',
    image: '/assets/azure_devops.png',
    buttonLink: 'https://medium.com/nerd-for-tech/how-to-configure-ci-cd-for-github-repository-using-azure-devops-ce9e9caed222', // Assuming you have separate pages for individual posts
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
    buttonLink: 'https://medium.com/nerd-for-tech/git-and-github-beginners-guide-a-hands-on-approach-e97e9489a017', // Assuming you have separate pages for individual posts
  },
  {
    id: 6,
    title: 'Exploring Blockchain',
    image: '/assets/blockchain.png',
    buttonLink: 'https://medium.com/nerd-for-tech/blockchain-understanding-its-uses-and-implications-162b6d1cffd5', // Assuming you have separate pages for individual posts
  },
  {
    id: 7,
    title: "Beginner's Guide to Docker",
    image: '/assets/docker.png',
    buttonLink: 'https://amanchopra-atg.medium.com/docker-a-beginners-guide-338f20f5f113', // Assuming you have separate pages for individual posts
  },
];

const Blog = () => {
  return (
    <div className='container'>
      <Navbar />
      <div className="blog-page">
        <BlogSection posts={posts} />
      </div>
    </div>
  );
};

export default Blog