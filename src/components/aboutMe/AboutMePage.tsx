import Container from "react-bootstrap/Container";
import "../../style/Shared.css";

const AboutMePage = () => {
  return (
    <Container fluid className="p-4">
      <h1 className="text-center colour display-1">About Me</h1>
      <h4 className="colour display-4 text-success">Technical Experience</h4>
      <h6 className="colour display-6">
        June 2020 – Now: Backend Team Lead at PageSuite
      </h6>
      <ul>
        <li>
          <span className="colour fs-4">
            PageSuite is a digital publishing company working with publishers
            all over the world. We have a variety of app and web based products
            used in the industry. During my time there I used many different
            technologies from C#, .NET (.NET 6, Core, FrameWork) to AWS and
            TypeScript.
          </span>
        </li>
        <li>
          <span className="colour fs-4">
            I have been involved in a few different teams at PageSuite but my
            work has always been very backend focused. I have also spent a large
            amount of time taking on responsibilities of the job position above
            mine.
            <ul>
              <li>
                <span className="colour fs-4">
                  <b>Backend Team Lead:</b> It was time for me to take a step
                  back from coding and provide some fresh leadership to the
                  backend team after a long period of unstable leadership. This
                  was the first time in my career I took on a leadership
                  position, I thought it was important for me to learn from
                  mistakes I had scene in the past and trust my gut. I wanted to
                  support and nurture my team and help them grow as a group. I
                  added a variety of new ideas to the team such as
                  retrospectives, technical discussions, backlog refinements,
                  one-to-ones, and creating more documentation about our
                  products. After the success of the backend team, I took over
                  more teams such as the platform team who dealt with the AWS
                  infrastructure and the portal team which was developing a new
                  management portal for the business.
                </span>
              </li>
              <li>
                <span className="colour fs-4">
                  <b>Backend Technical Lead:</b> The biggest responsibility I
                  had as a "Technical Lead" was to push our chosen technology in
                  the right direction and get as much business value as
                  possible. This allowed developers to start using the latest
                  versions of .NET instead of always using the .NET Framework. I
                  created more generic solutions instead of just building what
                  was needed. The best of which was the generic SSO gateway that
                  allowed third parties or custom SSO solutions to be integrated
                  with our all products at PageSuite. This new SSO solution
                  enabled developers to integrate with any SSO in hours instead
                  of days.
                </span>
              </li>
              <li>
                <span className="colour fs-4">
                  <b>Backend Developer:</b> Now that I was no longer a junior
                  developer the biggest change was being more heavily involved
                  in the sales process at PageSuite (as a junior I worked on a
                  few SOWs and sales calls but not the whole process). I started
                  to help lead the sales process from a technical point of view.
                  Breaking down customer requirements, scoping estimations and
                  feasibility, technical breakdown with major clients were just
                  a few of the tasks. But by far, the best part of being a
                  backend developer was having more weight in the
                  decision-making of how we built new features and products.
                  This allowed be to start pushing code quality within the
                  business.
                </span>
              </li>
              <li>
                <span className="colour fs-4">
                  <b>Junior Backend Developer:</b> Being my first developer job
                  after university, I was excited to dive into the deep end and
                  get my hands dirty with all sorts of projects. The first month
                  or two was support tickets which gave me great experience in a
                  variety of projects from management portals, subscription
                  services and the HTML5 PDF Reader. This was quickly followed
                  by actual backend development tasks such as feed wrappers,
                  third-party API login integrations, web endpoints and
                  automations. These experiences gave me a great base
                  understanding of the product and services available at
                  PageSuite.
                </span>
              </li>
            </ul>
          </span>
        </li>
      </ul>
      <h6 className="colour display-6">
        Aug 2018 – Sep 2019: Software Developer at AXA PPP
      </h6>
      <ul>
        <li>
          <span className="colour fs-4">
            PMA team: Was a tool used by the provider team to manage information
            with all different types of providers. This could be a small
            specialist or a major hospital. PMA was a huge 8 year project (4
            years when I joined) and included a variety of tools that were built
            using .NET MVC and jQuery.
          </span>
        </li>
        <li>
          <span className="colour fs-4">
            PACE team: This was the first agile team I join at AXA PPP where I
            was one of two .NET developers so a lot was expected of me. Pace was
            an in house tool for gathering marketing consent across the
            business. It had an Angular frontend and a .NET API with a variety
            of automations and databases behind it. The IBM tool MDM played a
            huge part in the project. I worked on both the frontend and backend
            of the application along with fully automated testing using MS Test,
            Specflow and selenium.
          </span>
        </li>
        <li>
          <span className="colour fs-4">
            AXA PPP: Uses Azure and .NET as its main infrastructure and had 8
            agile teams. I really enjoyed working in an open plan office and
            learning from other developers.
          </span>
        </li>
      </ul>
      <hr className="green" />
      <h4 className="colour display-4 text-success">Skills</h4>
      <p className="colour fs-4">
        I'm always excited to learn new libraries, frameworks, tools and
        languages to help improve my skills as a developer and create the best
        projects I can. Below is a list of skills I have used so far.
      </p>
      <div className="row row-cols-1 row-cols-md-4">
        <div className="col">
          <ul className="fs-4">
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
        <div className="col">
          <ul className="fs-4">
            <li>
              <span>Libraries and frameworks</span>
              <ul>
                <li>
                  <span>Angular, Vue, React</span>
                </li>
                <li>
                  <span>
                    .NET 5, .NET Core, .NET Framework (MVC and Web Forms)
                  </span>
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
                    Automated testing: MS Test, X-Unit, N-Unit, Selenium,
                    SpecFlow
                  </span>
                </li>
              </ul>
            </li>
          </ul>
        </div>
        <div className="col">
          <ul className="fs-4">
            <li>
              <span>Cloud Services/ Deployments</span>
              <ul>
                <li>
                  <span>Azure</span>
                </li>
                <li>
                  <span>AWS</span>
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
        </div>
        <div className="col">
          <ul className="fs-4">
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
      <hr className="green" />
      <h4 className="colour display-4 text-success">Education</h4>
      <h6 className="colour display-6">
        2016 - 2020 1st Class BSc in Computer Science, University of Kent
      </h6>
      <ul className="colour fs-4">
        <li className="fw-bolder">
          <span>
            Final year <span className="badge bg-success">73%</span>
          </span>
        </li>
        <ul>
          <li>
            <span>Introduction to Intelligent Systems</span>
          </li>
          <li>
            <span>Computing Law and Professional Responsibility</span>
          </li>
          <li>
            <span>Computing in the Classroom</span>
          </li>
          <li>
            <span>IT Consultancy Project (final year project)</span>
          </li>
          <li>
            <span>Internet of Things</span>
          </li>
          <li>
            <span>Programming Language Implementation</span>
          </li>
          <li>
            <span>Theory and Practice of Concurrency</span>
          </li>
        </ul>
        <li className="fw-bolder">
          <span>
            Industry year <span className="badge bg-success">81%</span>
          </span>
        </li>
        <ul>
          <li>
            <span>Software developer at AXA PPP</span>
          </li>
        </ul>
        <li className="fw-bolder">
          <span>
            Second year <span className="badge bg-success">74%</span>
          </span>
        </li>
        <ul>
          <li>
            <span>Software Engineering</span>
          </li>
          <li>
            <span>Algorithms, Correctness and Efficiency</span>
          </li>
          <li>
            <span>Theory of Computing</span>
          </li>
          <li>
            <span>Operating Systems and Architecture</span>
          </li>
          <li>
            <span>Database Systems</span>
          </li>
          <li>
            <span>Web Development</span>
          </li>
          <li>
            <span>Functional and Concurrent Programming</span>
          </li>
        </ul>
        <li className="fw-bolder">
          <span>
            First year <span className="badge bg-success">72%</span>
          </span>
        </li>
        <ul>
          <li>
            <span>Introduction to Object-Oriented Programming</span>
          </li>
          <li>
            <span>Foundations of Computing 1</span>
          </li>
          <li>
            <span>Databases and the Web</span>
          </li>
          <li>
            <span>Computer Systems</span>
          </li>
          <li>
            <span>Foundations of Computing 2</span>
          </li>
          <li>
            <span>Human Computer Interaction</span>
          </li>
          <li>
            <span>People and Computing</span>
          </li>
          <li>
            <span>Further Object-Oriented Programming</span>
          </li>
        </ul>
      </ul>
      <h6 className="colour display-6">
        2009 – 2016 Sixth Form and Secondary School, John Wallis Academy,
        Ashford
      </h6>
      <ul className="colour fs-4">
        <li>
          <span>
            3 A Levels: Computing (C), Geography (C), IT BTEC (Double
            Distinction Star)
          </span>
        </li>
        <li>
          <span>12 GCSEs and 2 BTECs from A* - C</span>
        </li>
      </ul>
    </Container>
  );
};

export default AboutMePage;
