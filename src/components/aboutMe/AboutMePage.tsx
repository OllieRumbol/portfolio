import Container from 'react-bootstrap/Container';
import '../../style/Shared.css';
import '../../style/AboutMe.css';

const AboutMePage = () => {

  return (
    <Container fluid className='p-4'>
      <div className='center'>
        <h1 className='colour display-1'>About Me</h1>
      </div>
      <div>
        <h4 className='colour display-4 text-success'>Technical Experience</h4>
      </div>
      <div>
        <h6 className='colour display-6'>June 2020 – Now: Backend Developer at PageSuite</h6>
      </div>
      <div className='colour fs-4'>
        <ul>
          <li>
            <span>
              Client team: Joining the client team was a big mix up in the company. We focused on the custom work within the company so,
              we created custom modals, managed IAPs, login and payment integrations, Oauth gateway pages, JSON and XML automations along
              with one off projects for clients all over the world. As a backend developer, we were also involved with project management,
              client calls, bug master and on call support. At PageSuite we used C# with .NET 5, .NET Core, .NET Framework, JS with Node
              and AWS infrastructure.
            </span>
          </li>
          <li>
            <span>
              Backend team: When I first joined the company teams were split up into technologies. Backend developers were the closes
              thing PageSuite had to a full stack developers. We built automation's, integrations, feed wrappers anything the company needed
              for the apps and frontend to work the client data for digital publishing. PageSuite can sometimes be as agile as a waterfall, which
              is something im trying to always improve in the company.
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
              that were built using .NET MVC and jQuery.
            </span>
          </li>
          <li>
            <span>
              PACE team: This was the first agile team I join at AXA PPP where I was one of two .NET developers so a lot was
              expected of me. Pace was an in house tool for gathering marketing consent across the business. It had an Angular frontend
              and a .NET API with a variety of automations and databases behind it. The IBM tool MDM played a huge part in the project.
              I worked on both the frontend and backend of the application along with fully automated testing using MS Test, Specflow
              and selenium.
            </span>
          </li>
          <li>
            <span>
              AXA PPP: Uses Azure and .NET as its main infrastructure and had 8 agile teams. I really enjoyed working in an open
              plan office and learning from other developers.
            </span>
          </li>
        </ul>
      </div>
      <hr className='green' />
      <div>
        <h4 className='colour display-4 text-success'>Skills</h4>
      </div>
      <div className='colour fs-4'>
        <p>
          I'm always excited to learn new libraries, frameworks, tools and languages to help improve my skills as a developer and create
          the best projects I can. Below is a list of skills I have used so far.
        </p>
        <div className='row row-cols-1 row-cols-md-4'>
          <div className='col'>
            <ul>
              <li>
                <span>Languages</span>
                <ul>
                  <li>
                    <span>C#</span>
                  </li>
                  <li>
                    <span>LINQ</span>
                  </li>
                  <li>
                    <span>Java</span>
                  </li>
                  <li>
                    <span>Python</span>
                  </li>
                  <li>
                    <span>HTML, CSS, JS</span>
                  </li>
                  <li>
                    <span>TypeScript</span>
                  </li>
                  <li>
                    <span>Go</span>
                  </li>
                  <li>
                    <span>Erlang</span>
                  </li>
                  <li>
                    <span>SQL</span>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
          <div className='col'>
            <ul>
              <li>
                <span>Libraries and frameworks</span>
                <ul>
                  <li>
                    <span>Angular, Vue, React</span>
                  </li>
                  <li>
                    <span>.NET 5, .NET Core, .NET Framework (MVC and Web Forms)</span>
                  </li>
                  <li>
                    <span>Bootstrap</span>
                  </li>
                  <li>
                    <span>Entity Framework</span>
                  </li>
                  <li>
                    <span>Newtonsoft</span>
                  </li>
                  <li>
                    <span>
                      Automated testing: MS Test, X-Unit, N-Unit, Selenium, SpecFlow
                    </span>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
          <div className='col'>
            <ul>
              <li>
                <span>Cloud Services/ Deployments</span>
                <ul>
                  <li>
                    <span>Azure</span>
                  </li>
                  <li>
                    <span>Aws</span>
                  </li>
                  <li>
                    <span>Github actions and pages</span>
                  </li>
                  <li>
                    <span>IIS</span>
                  </li>
                </ul>
              </li>
            </ul>
          </div><div className='col'>
            <ul>
              <li>
                <span>Tools</span>
                <ul>
                  <li>
                    <span>Visual studio</span>
                  </li>
                  <li>
                    <span>VS Code</span>
                  </li>
                  <li>
                    <span>LINQ Pad</span>
                  </li>
                  <li>
                    <span>Net Beans</span>
                  </li>
                  <li>
                    <span>IntelliJ</span>
                  </li>
                  <li>
                    <span>Postman</span>
                  </li>
                  <li>
                    <span>Git</span>
                  </li>
                  <li>
                    <span>Git Fork</span>
                  </li>
                  <li>
                    <span>Chocolatey</span>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
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
          <li><span>3 A Levels: Computing (C), Geography (C), IT BTEC (Double Distinction Star)</span></li>
          <li><span>12 GCSEs and 2 BTECs from A* - C</span></li>
        </ul>
      </div>
    </Container>
  );
}

export default AboutMePage;