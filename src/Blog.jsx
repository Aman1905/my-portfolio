import React from 'react'
import Navbar from './Navbar'
import BlogCard from './BlogCard';
import azure from './assets/azure-ci-cd.jpeg'
import aws from './assets/aws.jpeg'
import k8s_trends from './assets/k8s-trends.jpeg';
import binarySearch from './assets/binary_search.png'
import awsContainers from './assets/awsContainers.jpeg'
import github from './assets/github.jpeg'
import docker from './assets/docker.jpeg'

const Blog = () => {
  return (
    <>
      <Navbar />
        <div className='container blog__page'>
          <p className='blogPage__heading'><b>Beware!! </b><i>The Room of Requirement</i> still holds the traces of <i><strong>He-Who-Must-Not-Be-Named's</strong></i> dark magic.</p>
            {blogData.map((post, ind) => (
              <BlogCard key={ind} {...post} /> // Spread operator for concise prop passing
            ))}
        </div>    
    </>
  );
};

export default Blog

const blogData = [
  {
    link: 'https://amanchopra-atg.medium.com/trends-in-cloud-native-infrastructure-and-how-you-can-provision-kubernetes-resources-using-iac-1161ae0081c7',
    image: k8s_trends, 
    title: 'Trends In Cloud-Native Infrastructure and How You Can Provision Kubernetes Resources Using IaC Tools',
    description: 'The software development industry is drastically shifting with the rise of cloud technologies. Enterprises are now...',
    date: 'May 10, 2024'
  },
  {
    link: 'https://amanchopra-atg.medium.com/introduction-to-cloud-and-aws-amazon-web-services-59de1fa2d156',
    image: aws, 
    title: 'Introduction to Cloud and AWS (Amazon Web Services)',
    description: 'Cloud is a network of remote servers that store data and provide computing services. Based on services, it is broadly categorized into 3 types...',
    date: 'Feb 25, 2024'
  },
  {
    link: 'https://medium.com/nerd-for-tech/how-to-configure-ci-cd-for-github-repository-using-azure-devops-ce9e9caed222',
    image: azure, 
    title: 'How to Configure CI/CD for GitHub Repository using Azure DevOps?',
    description: 'DevOps engineers can automate the merging of code from various developers into a single shared repository using a set of practices...',
    date: 'Aug 2, 2023'
  },
  {
    link: 'https://medium.com/nerd-for-tech/binary-search-algorithm-using-java-3c7c24d783cf',
    image: binarySearch, 
    title: 'Binary Search Algorithm using Java',
    description: 'It is a type of an efficient searching algorithm which is used for finding an element from a sorted array or list...',
    date: 'May 6, 2022'
  },
  {
    link: 'https://medium.com/nerd-for-tech/containers-in-aws-amazon-web-services-fcc329342135',
    image: awsContainers, 
    title: 'Containers in AWS (Amazon Web Services)',
    description: 'A container is a standard unit of software that packages up code and all its dependencies so the application runs quickly and...',
    date: 'Aug 27, 2021'
  },
  {
    link: 'hhttps://medium.com/nerd-for-tech/git-and-github-beginners-guide-a-hands-on-approach-e97e9489a017',
    image: github, 
    title: 'Git and GitHub — Beginner’s Guide : A Hands-on Approach.',
    description: 'Being a Software Engineer, you probably have heard of these two terms Git and GitHub. Everyone in the programming world...',
    date: 'Jun 6, 2021'
  },
  {
    link: 'https://amanchopra-atg.medium.com/docker-a-beginners-guide-338f20f5f113',
    image: docker, 
    title: 'Docker — A Beginner’s Guide',
    description: 'Docker is an Open Source Centralized PaaS (Platform as a Service) that uses O.S. level virtualization to create...',
    date: 'Nov 13, 2020'
  },
  
];


