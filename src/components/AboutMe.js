import Container from 'react-bootstrap/Container';
import '../style/Shared.css';
import '../style/AboutMe.css';

export default function AboutMe() {

  return (
    <Container fluid className='p-4'>
      <div className='center'>
        <h1 className='colour display-1'>About Me</h1>
      </div>
      <div>
        <h4 className='colour display-4 text-success'>Technical Experience</h4>
      </div>
      <div>
        <h6 className='colour display-6'>June 2020 – Now: Junior Software Developer at PageSuite</h6>
      </div>
      <div className='colour fs-4'>
        <ul>
          <li>
            <span>
              Client team: Joining the client team was a big mix up in the company. We focused on the custom work within the company so,
              we created custom modals, managed IAPs, login and payment integrations, Oauth gateway pages, JSON and XML automations. As
              a backend developer, we were also involved with project management, client calls and bug master. At PageSuite we used C#
              with .Net and AWS infrastructure.
            </span>
          </li>
          <li>
            <span>
              Backend team: When I first joined the company teams were split up into technologies. Backend developers were the closes
              thing PageSuite had to a full stack developer. We built automation's, integrations, feed wrappers anything the company needed
              for the apps and frontend to work the client data for digital publishing.
            </span>
          </li>
        </ul>
      </div>
      <div>
        <h6 className='colour display-6'>Aug 2018 – Sep 2019: Software Developer at AXA PPP</h6>
      </div>
      <div className='colour fs-4'>
        <ul>
          <li>
            <span>
              PMA team: Was a tool used by the provider team to manage information with all types of providers. This could be a small
              specialist or a major hospital. PMA was a huge 8 year project (4 years when I joined) and included a variety of tools
              that were built using .Net MVC and jQuery.
            </span>
          </li>
          <li>
            <span>
              PACE team: This was the first agile team I join at AXA PPP where I was one of two .Net developers so a lot was
              expected of me. Pace was an in house tool for gathering marketing consent across the business. It had an Angular frontend
              and a .Net API with a variety of automations and databases behind it. The IBM tool MDM played a huge part in the project.
              I worked on both the frontend and backend of the application along with fully automated testing using MS Test, Specflow
              and selenium.
            </span>
          </li>
          <li>
            <span>
              AXA PPP: Uses Azure and .Net as its main infrastructure and had 8 agile teams. I really enjoyed working in an open
              plan office and learning from other developers.
            </span>
          </li>
        </ul>
      </div>
      <hr className='green' />
      <div>
        <h4 className='colour display-4 text-success'>Education</h4>
      </div>
      <div>
        <h6 className='colour display-6'>2016 - 2020 1st Class BSc in Computer Science, University of Kent</h6>
      </div>
      <div className='colour fs-4'>
        <ul>
          <li className='fw-bolder'><span>Final year <span className="badge bg-success">73%</span></span></li>
          <ul>
            <li><span>Introduction to Intelligent Systems</span></li>
            <li><span>Computing Law and Professional Responsibility</span></li>
            <li><span>Computing in the Classroom</span></li>
            <li><span>IT Consultancy Project (final year project)</span></li>
            <li><span>Internet of Things</span></li>
            <li><span>Programming Language Implementation</span></li>
            <li><span>Theory and Practice of Concurrency</span></li>
          </ul>
          <li className='fw-bolder'><span>Industry year <span className="badge bg-success">81%</span></span></li>
          <ul>
            <li><span>Software developer at AXA PPP</span></li>
          </ul>
          <li className='fw-bolder'><span>Second year <span className="badge bg-success">74%</span></span></li>
          <ul>
            <li><span>Software Engineering</span></li>
            <li><span>Algorithms, Correctness and Efficiency</span></li>
            <li><span>Theory of Computing</span></li>
            <li><span>Operating Systems and Architecture</span></li>
            <li><span>Database Systems</span></li>
            <li><span>Web Development</span></li>
            <li><span>Functional and Concurrent Programming</span></li>
          </ul>
          <li className='fw-bolder'><span>First year <span className="badge bg-success">72%</span></span></li>
          <ul>
            <li><span>Introduction to Object-Oriented Programming</span></li>
            <li><span>Foundations of Computing 1</span></li>
            <li><span>Databases and the Web</span></li>
            <li><span>Computer Systems</span></li>
            <li><span>Foundations of Computing 2</span></li>
            <li><span>Human Computer Interaction</span></li>
            <li><span>People and Computing</span></li>
            <li><span>Further Object-Oriented Programming</span></li>
          </ul>
        </ul>
      </div>
      <div>
        <h6 className='colour display-6'>2009 – 2016 Sixth Form and Secondary School, John Wallis Academy, Ashford</h6>
      </div>
      <div className='colour fs-4'>
        <ul>
          <li><span>3 A Levels: Computing (C), Geography (C), BTEC ICT Double Distinction*</span></li>
          <li><span>12 GCSEs and 2 BTECs from A* - C</span></li>
        </ul>
      </div>
    </Container>
  );
}