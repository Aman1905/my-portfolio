import React from 'react'
import Navbar from './Navbar'
import BlogCard from './BlogCard';
import azure from './assets/azure-ci-cd.jpeg'
import aws from './assets/aws.jpeg'
import k8s_trends from './assets/k8s-trends.jpeg';
import binarySearch from './assets/binary_search.webp'
import awsContainers from './assets/awsContainers.jpeg'
import github from './assets/github.jpeg'
import docker from './assets/docker.jpeg'
import youtubeAPI from './assets/youtube-api.png'
import redisCache from './assets/redis-cache.png'
import lambdaBlog1 from './assets/lambdaBlog1.png'
import lambdaBlog2 from './assets/lambdaBlog2.png'
import lambdaBlog3 from './assets/lambdaBlog3.png'
import lambdaBlog4 from './assets/lambdaBlog4.png'
import lambdaBlog5 from './assets/lambdaBlog5.png'
import lambdaBlog6 from './assets/lambdaBlog6.png'
import lambdaBlog7 from './assets/lambdaBlog7.png'
import lambdaBlog8 from './assets/lambdaBlog8.png'
import lambdaBlog9 from './assets/lambdaBlog9.png'
import lambdaBlog10 from './assets/lambdaBlog10.png'
import lambdaBlog11 from './assets/lambdaBlog11.png'
import lambdaBlog12 from './assets/lambdaBlog12.png'
import lambdaBlog13 from './assets/lambdaBlog13.png'
import lambdaBlog14 from './assets/lambdaBlog14.png'

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
    link: 'https://www.devrelsquad.com/post/how-to-leverage-youtube-data-api-practical-use-cases-for-your-application',
    image: youtubeAPI,
    title: 'How to Leverage YouTube Data API: Practical Use Cases for Your Application',
    description: 'YouTube, a global video-sharing platform is a treasure trove of data. Its Data API allows you to add...',
    date: 'September 12, 2024',
  },
  {
    link: 'https://www.lambdatest.com/blog/unifying-test-execution-across-diverse-tech-with-hyperexecute/',
    image: lambdaBlog14,
    title: 'HyperExecute: Unifying Test Execution Across Diverse Technologies',
    description: 'Imagine being part of a QA team that constantly faces the challenge of managing diverse and often inconsistent testing environments...',
    date: 'September 2, 2024',
  },
  {
    link: 'https://www.devrelsquad.com/post/boost-your-application-s-performance-with-redis-api-a-comprehensive-guide-to-caching',
    image: redisCache,
    title: "Boost Your Application's Performance with Redis API: A Comprehensive Guide to Caching",
    description: 'Caching is an essential optimization technique that stores frequently accessed data in memory, reducing latency...',
    date: 'August 4, 2024',
  },
  {
    link: 'https://www.lambdatest.com/blog/cypress-cucumber-preprocessor-with-hyperexecute/',
    image: lambdaBlog13, 
    title: 'Running Cypress Cucumber Preprocessor with HyperExecute',
    description: 'The Cypress plugin cypress-cucumber-preprocessor helps you write your end-to-end tests using Cucumber syntax,...',
    date: 'July 24, 2024'
  },
  {
    link: 'https://www.lambdatest.com/blog/overcoming-local-testing-limitations-with-hyperexecute/',
    image: lambdaBlog12, 
    title: 'Overcoming Locally Hosted Website Testing Limitations with HyperExecute Background Services',
    description: 'When it comes to agile development, effective quality assurance is crucial, yet sometimes locally hosted web apps can be plagued by resource constraints and unreliable results...',
    date: 'July 9, 2024'
  },
  {
    link: 'https://www.lambdatest.com/blog/automate-dynamic-ui-tests-with-sikuli-and-lambdatest/',
    image: lambdaBlog11, 
    title: 'Automate your Dynamic UI Tests with Sikuli and LambdaTest',
    description: 'Automation in software development was introduced to streamline processes and save time for us developers for more creative endeavours....',
    date: 'June 7, 2024'
  },
  {
    link: 'https://www.lambdatest.com/blog/geo-distributed-real-device-testing-with-hyperexecute/',
    image: lambdaBlog10, 
    title: 'Go Multi-Regional with your Real Device Testing Experience with HyperExecute',
    description: 'Imagine millions of users across the globe relying on your app every day. Each tap, swipe, and click needs to work flawlessly, but the journey to seamless...',
    date: 'May 24, 2024'
  },
  {
    link: 'https://www.lambdatest.com/blog/optimize-your-testing-pipeline-with-hyperexecute/',
    image: lambdaBlog9, 
    title: 'Optimize your Testing Pipeline: Reduce Upload Times and Debug Faster',
    description: 'Imagine you’ve just pushed a tiny code tweak in your codebase to fix a bug, and to test it, you trigger your CI/CD pipeline. But instead of immediate...',
    date: 'May 16, 2024'
  },
  {
    link: 'https://amanchopra-atg.medium.com/trends-in-cloud-native-infrastructure-and-how-you-can-provision-kubernetes-resources-using-iac-1161ae0081c7',
    image: k8s_trends, 
    title: 'Trends In Cloud-Native Infrastructure and How You Can Provision Kubernetes Resources Using IaC Tools',
    description: 'The software development industry is drastically shifting with the rise of cloud technologies. Enterprises are now...',
    date: 'May 10, 2024'
  },
  {
    link: 'https://www.lambdatest.com/blog/cypress-testing-with-hyperexecute/',
    image: lambdaBlog8, 
    title: 'Accelerate Cypress Testing with HyperExecute',
    description: 'Cypress testing has been a cornerstone for web application development, offering a powerful and user-friendly way to automate testing processes...',
    date: 'April 30, 2024'
  },
  {
    link: 'https://www.lambdatest.com/blog/performance-testing-with-hyperexecute/',
    image: lambdaBlog7, 
    title: 'Simplifying Performance Testing with HyperExecute',
    description: 'As a QA professional, familiar with Smoke and Regression Testing, you may already know how important they are to guaranteeing that the core functionality...',
    date: 'March 7, 2024'
  },
  {
    link: 'https://amanchopra-atg.medium.com/introduction-to-cloud-and-aws-amazon-web-services-59de1fa2d156',
    image: aws, 
    title: 'Introduction to Cloud and AWS (Amazon Web Services)',
    description: 'Cloud is a network of remote servers that store data and provide computing services. Based on services, it is broadly categorized into 3 types...',
    date: 'Feb 25, 2024'
  },
  {
    link: 'https://www.lambdatest.com/blog/excel-test-management-with-hyper-execute-parallelization/',
    image: lambdaBlog6, 
    title: 'Excel Test Management: Powering Efficiency with HyperExecute',
    description: 'When we talk about software testing, Excel has been a reliable companion for testers, excelling in organizing test cases, documenting steps, and managing setup details...',
    date: 'Feb 13, 2024'
  },
  {
    link: 'https://www.lambdatest.com/blog/accelerate-mobile-testing-with-hyperexecute-parallelization/',
    image: lambdaBlog5, 
    title: 'Accelerate Your Real Device Testing via HyperExecute Parallelization',
    description: 'When it comes to mobile apps, even a momentary lapse can impact user experience. Achieving flawless performance across diverse devices poses a...',
    date: 'Feb 8, 2024'
  },
  {
    link: 'https://www.lambdatest.com/blog/tailor-the-testing-canvas-with-infrastructure-customization/',
    image: lambdaBlog4, 
    title: 'LambdaTest: Tailor the Testing Canvas via Infrastructure Customization',
    description: 'Testing a software application is like trying to solve a puzzle. As a QA or SDET, you have a mission to build secure apps...',
    date: 'Jan 25, 2024'
  },
  {
    link: 'https://www.lambdatest.com/blog/how-smart-caching-turbocharges-your-testing-workflow/',
    image: lambdaBlog3, 
    title: 'Deliver Faster: How Smart Caching Turbocharges Your Testing Workflow',
    description: 'As enterprises scale their operations and test suites, the time taken for test execution often experiences a proportional increase. This surge poses a significant challenge...',
    date: 'Jan 19, 2024'
  },
  {
    link: 'https://www.lambdatest.com/blog/test-analysis-and-ci-cd-integration-for-streamlined-testing/',
    image: lambdaBlog2, 
    title: 'Streamlining Testing: Moving from Multi-Tool Chaos to a Unified Environment with CI/CD Integration and Test Analysis',
    description: 'Every line of code holds a story in the bustling world of software development. In our previous blog, we uncovered the challenges of a growing enterprise...',
    date: 'Jan 15, 2024'
  },
  {
    link: 'https://www.lambdatest.com/blog/accelerating-jenkins-pipeline-through-intelligent-test-orchestration/',
    image: lambdaBlog1, 
    title: 'Accelerating Jenkins Pipeline Through Intelligent Test Orchestration',
    description: 'Jenkins, a tried-and-true companion for software development teams, has served as the bedrock for streamlining processes...',
    date: 'Jan 8, 2024'
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


