import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Accordion from "react-bootstrap/esm/Accordion";
import ReactHtmlParser from "react-html-parser";
import "../../style/Shared.css";

type TestimonialCardProps = {
  id: string;
  fromName: string;
  jobTitle: string;
  company: string;
  body: string;
};

const TestimonialCard = (props: TestimonialCardProps) => {
  const { id, fromName, jobTitle, company, body } = props;

  return (
    <Card bg="dark" className="colour">
      <Card.Header className="text-center">
        <Accordion.Toggle
          className="fs-4"
          as={Button}
          variant="success"
          eventKey={id}
        >
          From {fromName}, {jobTitle} at {company}
        </Accordion.Toggle>
      </Card.Header>
      <Accordion.Collapse eventKey={id}>
        <Card.Body>{ReactHtmlParser(body)}</Card.Body>
      </Accordion.Collapse>
    </Card>
  );
};

export default TestimonialCard;
