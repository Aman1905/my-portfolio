import React from 'react'
import Navbar from './Navbar'
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';

const Work = () => {
  return (
    <>
      <Navbar />
      <div className='container'>
        <div className='container blog__page'>
          <Timeline position="alternate">
            {/* lambdatest start */}
            <TimelineItem>
              <TimelineOppositeContent color="text.secondary">June 2023 - Present</TimelineOppositeContent>
              <TimelineSeparator>
                <TimelineDot />
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent>
                <div className="blog-card">
                  <div className="blog-card-description">
                    <h3>Developer Relations - Technical Writer @ LambdaTest</h3><br/>
                    <p>
                      <ul>
                        <li>Collaborate closely with product managers, developers, and QA engineers to create user-friendly documentation ensuring that complex technical concepts were communicated effectively to end-users.</li><br/>
                        <li>Conducted regular content audits and updates to keep documentation aligned with software updates and customer feedback, improving user experience and reducing support inquiries.</li><br />
                        <li>Authored and maintained a range of documentation, including user guides, API documentation, release notes, and knowledge base articles, consistently receiving positive feedback for clarity and accuracy.</li><br />
                        <li>Responsible for creating code samples, tutorials, and blog posts to assist developers in integrating our platform into their applications, fostering developer engagement.</li><br />
                      </ul>
                    </p>
                    <h6>Continuous Integration (CI) · Cross-team Collaboration · GitHub · Continuous Delivery (CD) · Technical Documentation · YAML · Docusaurus · Testing · Communica · Technical Writing · Git · Blogging</h6>
                  </div>
                </div>
              </TimelineContent>
            </TimelineItem>
            {/* lambdatest end */}
            {/* udyamwell start */}
            <TimelineItem>
              <TimelineOppositeContent color="text.secondary">June 2023 - Present</TimelineOppositeContent>
              <TimelineSeparator>
                <TimelineDot />
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent>
                <div className="blog-card">
                  <div className="blog-card-description">
                    <h3>Technical Project Manager @ UdyamWell</h3><br/>
                    <p>
                      <ul>
                        <li>Led a cross-functional website development team (frontend, backend, content) to deliver a high-performance website.</li><br/>
                        <li>Oversaw cloud infrastructure and DevOps practices on the Azure platform, ensuring efficient website deployment and ongoing maintenance.</li><br />
                        <li>Spearheaded website design and user experience (UX) to create a user-friendly and engaging online presence.</li><br />
                        <li>Successfully deployed the website on the Azure platform, leveraging automation tools and best practices.</li><br />
                      </ul>
                    </p>
                    <h6>DevOps · User Experience (UX) · Azure cloud · Website Design · Content Management · Technical Project Management</h6>
                  </div>
                </div>
              </TimelineContent>
            </TimelineItem>
            {/* udyamwell end */}
            {/* geeksforgeeks start */}
            <TimelineItem>
              <TimelineOppositeContent color="text.secondary">Oct 2022 - Jun 2023</TimelineOppositeContent>
              <TimelineSeparator>
                <TimelineDot />
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent>
                <div className="blog-card">
                  <div className="blog-card-description">
                    <h3>Project Coordinator @ GeeksforGeeks</h3><br/>
                    <p>
                      <ul>
                        <li>Responsible for the Planning and Scheduling of the projects, Communicating with stakeholders, Managing and Administring the Project team, and Resolving issues.</li><br/>
                        <li>Responsible for hiring the new talents in the various teams - DevOps, Gate CS, Python, GBlog, Freelancers.</li><br />
                        <li>Introduced various new practices to increase the DevOps Content growth.</li><br />
                        <li>Worked on the Technical Blogs and other content related to DevOps in the GeeksforGeeks.</li><br />
                        <li>Reviewed and improved the articles on DevOps and Cloud tools.</li><br/>
                        <li>Increased the traffic view of the DevOps content by ~22%.</li><br />
                        <li>Written some in-house articles as well on various Technologies.</li><br />
                        <li>Responsible for the maintenance of quality content on DevOps and Cloud domain.</li><br />
                      </ul>
                    </p>
                    <h6>Azure DevOps · Kubernetes · DevOps · GitHub · Product Management · Cloud Computing · Google Cloud Platform (GCP) · Git · Blogger · Azure · Amazon Web Services (AWS) · Docker · Business Growth · Leadership</h6>
                  </div>
                </div>
              </TimelineContent>
            </TimelineItem>
            {/* geeksforgeeks end */}
            {/* niit start */}
            <TimelineItem>
              <TimelineOppositeContent color="text.secondary">Nov 2021 - Sep 2023</TimelineOppositeContent>
              <TimelineSeparator>
                <TimelineDot />
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent>
                <div className="blog-card">
                  <div className="blog-card-description">
                    <h3>Technical Mentor @ National Institute for Industrial Training</h3><br/>
                    <p>
                      <ul>
                        <li>Project Course - Full Stack Web Development: Created project-based course using HTML5, CSS3, JavaScript, PHP, MySQL, and Azure.</li><br/>
                        <li>Tutorial - Introduction to Full Stack Web Development and DS Algo with Java: Created tutorial (Recorded Live Video and Documentation) for HTML5, CSS3, JS, PHP, MySQL, Azure, and Java.</li><br />
                        <li>Responsible for leading Web Team and building various projects for the organization.</li><br />
                        <li>Impact: The course has been taken by 150+ students so far with 4.65 average ratings.</li><br />
                        <li>Product Management along with the Mentoring of the mentees assigned. Agile Methodology was followed for building the products.</li><br/>
                      </ul>
                    </p>
                    <h6>Mentoring · Programming · Node.js · GitHub · PHP · HTML5 · MySQL · MongoDB · JavaScript · Team Leadership · Git · Project Management · Core Java · Amazon Web Services (AWS) · React.js</h6>
                  </div>
                </div>
              </TimelineContent>
            </TimelineItem>
            {/* niit end */}
          </Timeline>
        </div>  
      </div>
    </>
  )
}

export default Work