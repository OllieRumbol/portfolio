import Jumbotron from "react-bootstrap/Jumbotron";
import Container from "react-bootstrap/Container";
import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import "../../style/Home.css";
import "../../style/Shared.css";

const HomePage = () => {
  return (
    <div className="p-4">
      <Jumbotron fluid>
        <Container className="header">
          <h1 className="title">Oliver BOURNE</h1>
          <h1 className="subTitle">Software Developer</h1>
          <hr className="green" />
          <p className="p-2 fs-5">
            .NET Developer with a passion for creating well structured and
            reliable solutions using the Microsoft stack of technologies. I
            can't wait to learn new tools, frameworks and libraries. I have a
            keen interest in frontend technologies like React and Vue. Achieved
            a 1st class BSc focused in Computer Science from the University of
            Kent.
          </p>
        </Container>
      </Jumbotron>
      <h4 className="colour display-4 text-success">
        Current Favourite Technology
      </h4>
      <h6 className="colour display-6 fw-bold">.NET</h6>
      <p className="colour fs-4">
        It's been really interesting to see how Microsoft's .NET library has
        evolved over the years. The development platform has changed so much
        from .NET Framework, .NET Core, .NET 5, 6, 7 and beyond. I can create
        well-designed web resources with ease using the powerful C# language
        features and OOP design patterns. Deployments are as easy as clicking
        your fingers with Visual Studio and Azure. Azure only extends the power
        of C# and .NET by allowing rapid prototyping of new solutions.
      </p>
      <h6 className="colour display-6 fw-bold">React</h6>
      <p className="colour fs-4">
        There are a variety of frontend frameworks out there. Angular, Vue,
        Ember, Backbone just to name a few. So why do I like React the most? I
        have used a few of the frameworks mention earlier and using any
        framework is better than just writing HTMl, CSS and JS on its own. These
        tools create a far more well structured and adaptable technical
        solution. React has a whole host of useful tools. JSX, virtual DOM,
        one-way binding, state management and component design. However I like
        React because of its simplicity. Each component is just a simple JS file
        that returns HTML, no need to transpile it. React hooks make state even
        easier to manage and huge array of third party libraries for testing,
        routing and creative design.
      </p>
      <p className="colour fs-4">
        To try something a little different, this react website was built using
        TypeScript instead of JavaScript. There were a few reasons behind this.
        It was fun to learn new technologies and ideas. TS adds a huge amount of
        safety to the project and requires null/ undefine checks. I always try
        to write the most generic code I can so it's easier to migrate the
        project over to a newer framework/ library in the future.
      </p>
      <hr className="green" />
      <h4 className="colour display-4 text-success">Testimonials</h4>
      <Accordion defaultActiveKey="0">
        <Card bg="dark" className="colour">
          <Card.Header className="text-center">
            <Accordion.Toggle
              className="fs-4"
              as={Button}
              variant="success"
              eventKey="0"
            >
              From Jonathon Wigmore, Senior Account Manager at PageSuite
            </Accordion.Toggle>
          </Card.Header>
          <Accordion.Collapse eventKey="0">
            <Card.Body>
              <p className="fs-4">
                Ollie has an infectious passion for development & the work that
                he puts into his roles. He is an inspirational leader, and
                ensures that everyone involved in a project has the strongest of
                leaders behind them, prioritising team morale and learning
                experiences to make projects and tasks run smoothly and
                effectively.
              </p>
              <p className="fs-4">
                In the years I have worked with Ollie, his desire to continue
                his own progression, and help those around him has ensured
                successful completion of many projects & placed him at the top
                of the ranks within the company. His drive to work and succeed
                at a high level is infectious, and undoubtedly has helped me
                with my own professional progression.
              </p>
              <p className="fs-4">
                Ollie will be the person within any team that everyone will feel
                comfortable to come to with problems, both professional and
                personal. His desire to help people goes above and beyond just a
                work environment, and he will do everything it takes to make
                every work experience positive and a learning opportunity.
              </p>
              <p className="fs-4">
                Ollie's skill and determination is proven by his swift rise from
                a Junior Developer to a Team Lead, and his work only echoes the
                drive he has to succeed. Any team would be lucky to welcome
                Ollie into their ranks. He will bring experience, unbelievable
                talent and knowledge - but more importantly he will bring a
                genuinely fantastic person who will undoubtedly tie teams and
                projects together. Ollie will be an amazing asset to any
                company.
              </p>
            </Card.Body>
          </Accordion.Collapse>
        </Card>
        <Card bg="dark" className="colour">
          <Card.Header className="text-center">
            <Accordion.Toggle
              className="fs-4"
              as={Button}
              variant="success"
              eventKey="1"
            >
              From Kevin Barclay, Backend Developer at PageSuite
            </Accordion.Toggle>
          </Card.Header>
          <Accordion.Collapse eventKey="1">
            <Card.Body>
              <p className="fs-4">
                Oliver is one of the most passionate team leads I’ve come across
                in my years within the industry. He’s extremely hard working,
                always striving for the best, wether that’s for himself or for
                his team.{" "}
              </p>
              <p className="fs-4">
                One of his biggest assets to any team is his selfless manner, he
                will always help those who are in need, wether that is a member
                of his team or someone else within the company. I’ve not come
                across someone who has always had a focus on his teams
                well-being and tried to always be that cornerstone for his team
                to come to when needed.{" "}
              </p>
              <p className="fs-4">
                Over my brief time getting to know Oliver and working with him,
                he’s always offered support in anyway he can and if he was
                unable to resolve my issues, he would go out of his way to
                discuss with those who could on my behalf.{" "}
              </p>
              <p className="fs-4">
                Oliver will be a great asset to any team, in whatever role he is
                put into.
              </p>
            </Card.Body>
          </Accordion.Collapse>
        </Card>
        <Card bg="dark" className="colour">
          <Card.Header className="text-center">
            <Accordion.Toggle
              className="fs-4"
              as={Button}
              variant="success"
              eventKey="2"
            >
              From Kieran Wrenn, Software Engineer at PageSuite
            </Accordion.Toggle>
          </Card.Header>
          <Accordion.Collapse eventKey="2">
            <Card.Body>
              <p className="fs-4">
                Oli, is one of the most passionate team leads I have worked
                with. He always finds away to increase morale and include
                everybody in activities, he will always try his up most to
                ensure his team are happy and improve processes for a better
                developer experience. Oli will also go above and beyond for his
                team and as well the business, which shows his level of
                dedication. He is also a positive role model and mentor to more
                junior members of the team ensuring that they are looked after
                and providing an environment and platform for more junior
                members to ask questions, an example of this was when he came up
                with the initiative to have a bi-weekly technical round table
                for the team to ensure more junior members have better access to
                learning from more senior members of the team.
              </p>
              <p className="fs-4">
                Oli is confident and has the ability to communicate with a range
                of stakeholders on technical subjects and also on non-technical
                subjects and has sound knowledge of the software development
                lifecycle and agile methodologies.
              </p>
              <p className="fs-4">
                His passion for tech shows through especially with the
                development of his JWT Validator nuget package, of which is a
                product of his own which he has grown. He also takes it upon
                himself to better his skill set outside working hours to enhance
                his knowledge around the .NET ecosystem as well as front-end
                development with react.
              </p>
              <p className="fs-4">
                I would recommend Oli as a top asset for any team!
              </p>
            </Card.Body>
          </Accordion.Collapse>
        </Card>
        <Card bg="dark" className="colour">
          <Card.Header className="text-center">
            <Accordion.Toggle
              className="fs-4"
              as={Button}
              variant="success"
              eventKey="3"
            >
              From Benjamin Loveridge-Rowe, Backend Developer at PageSuite
            </Accordion.Toggle>
          </Card.Header>
          <Accordion.Collapse eventKey="3">
            <Card.Body>
              <p className="fs-4">
                Oli is a hardworking, dedicated and highly talented developer
                who always brings innovative solutions to the team.
              </p>
              <p className="fs-4">
                Thanks to his passion for writing clean, maintainable code,
                working on his projects is always an absolute pleasure. He is a
                quick learner, and is never afraid to pick up something new,
                which enables him to diversify his skill set quickly and easily.
              </p>
              <p className="fs-4">
                Always looking for the best way to push a project forward, Oli
                embraces modern technologies and frameworks to ensure the end
                product is as polished and efficient as it can be, always using
                the right tool for the job.
              </p>
              <p className="fs-4">
                Oli is very adept at foreseeing potential hurdles in a project,
                which allows him to plan with confidence knowing what issues we
                may face along the way, and how best to overcome them.
              </p>
              <p className="fs-4">
                I’ve had the pleasure of working with him every day for some
                time now, and hope I can continue to do so for a long time to
                come.
              </p>
            </Card.Body>
          </Accordion.Collapse>
        </Card>
        <Card bg="dark" className="colour">
          <Card.Header className="text-center">
            <Accordion.Toggle
              className="fs-4"
              as={Button}
              variant="success"
              eventKey="4"
            >
              From Mark Tanner, Software Engineer at PageSuite
            </Accordion.Toggle>
          </Card.Header>
          <Accordion.Collapse eventKey="4">
            <Card.Body>
              <p className="fs-4">
                The first thing that comes to mind when describing Ollie is his
                passion. He really cares about what he is working on and will
                always fight to make his projects as good as they possibly can
                be. Ollie has a great understanding of C# & .Net, as well as
                amazing frontend skills, especially in vue.js.
              </p>
              <p className="fs-4">
                Ollie is hardworking, loyal, highly intelligence but also very
                humble, he will always be the first to admit when he is wrong.
                His communication skills are top notch and he makes friends with
                everyone he meets.
              </p>
            </Card.Body>
          </Accordion.Collapse>
        </Card>
        <Card bg="dark" className="colour">
          <Card.Header className="text-center">
            <Accordion.Toggle
              className="fs-4"
              as={Button}
              variant="success"
              eventKey="5"
            >
              From Augustine Lau, Flutter Developer at PageSuite
            </Accordion.Toggle>
          </Card.Header>
          <Accordion.Collapse eventKey="5">
            <Card.Body>
              <p className="fs-4">
                It’s been an absolute pleasure working with Oliver. He is a very
                competent and highly skilled backend developer who has excellent
                problem solving and communication skills. He has taken an
                overwhelming amount of additional responsibilities outside of
                what you would expect from a junior developer, he really goes
                above and beyond.
              </p>
              <p className="fs-4">
                I have worked with Oliver on many projects. He has an excellent
                ability to adapt to different situations, coming up with very
                effective and logical solutions to short sighted problems that
                has occurred numerous times in past projects. Oliver would be an
                extremely valuable asset of any team he joins.
              </p>
            </Card.Body>
          </Accordion.Collapse>
        </Card>
      </Accordion>
    </div>
  );
};

export default HomePage;
