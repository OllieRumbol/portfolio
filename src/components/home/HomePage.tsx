import { ReactElement, useEffect, useState } from "react";
import TestimonialCard from "./TestimonialCard";
import Jumbotron from "react-bootstrap/Jumbotron";
import Container from "react-bootstrap/Container";
import Accordion from "react-bootstrap/Accordion";
import { GetTestimonials } from "../../backend/TestimonialService";
import { Testimonial } from "../../type.d";
import "../../style/Home.css";
import "../../style/Shared.css";

const HomePage = () => {
  const [testimonialCards, setTestimonialCards] = useState<ReactElement[]>([]);

  useEffect(() => {
    async function Create() {
      let testimonials: Testimonial[] = await GetTestimonials();
      setTestimonialCards(
        testimonials.map((testimonial: Testimonial, index: number) => {
          return (
            <TestimonialCard
              id={index.toString()}
              fromName={testimonial.fromName}
              jobTitle={testimonial.jobTitle}
              company={testimonial.company}
              body={testimonial.body}
            />
          );
        })
      );
    }

    Create();
  }, []);

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
        There are a variety of front-end frameworks out there. Angular, Vue,
        React, Svelte, and Ember, just to name a few. So why do I like React the
        most? I have used a few of the frameworks mentioned earlier and using
        any framework is better than just writing HTML, CSS and JS on its own.
        These tools create a far more well-structured and adaptable technical
        solution. React has a whole host of useful tools. JSX, virtual DOM,
        one-way binding, state management and component design, etc. However, I
        like React because of its simplicity. Each component is just a simple
        JS/ TS file that returns HTML. React hooks make the state even easier to
        manage and a huge array of third-party libraries for testing, routing
        and creative design. I need all the help with CSS I can get. React
        Bootstrap, React Material UI, and Tailwind allows me to create
        responsive and detailed UIs.
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

      <Accordion defaultActiveKey="0">{testimonialCards}</Accordion>
    </div>
  );
};

export default HomePage;
