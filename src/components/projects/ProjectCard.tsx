import Card from "react-bootstrap/Card";
import "../../style/Shared.css";

type ProjectCardProps = {
  title: string;
  children: React.ReactNode;
};

const ProjectCard = (props: ProjectCardProps) => {
  return (
    <Card bg="dark" className="colour cardOutline">
      <Card.Header className="display-4 text-center">{props.title}</Card.Header>
      <Card.Body>
        <Card.Text>
          <div className="row row-cols-1 row-col-lg-2">{props.children}</div>
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default ProjectCard;
