import { FunctionComponent } from 'react';
import Card from 'react-bootstrap/Card';
import '../../style/ProjectCard.css';

interface IProjectCardProps {
    title: string
    image: string
    description: string
    technology: string
    site: string
    buttonText: string
}

const ProjectCard: FunctionComponent<IProjectCardProps> = (props) => {

    return (
        <div className='m-5'>
            <Card className='border-success cardAll'>
                <Card.Header className='cardHeader'><h2>{props.title}</h2></Card.Header>
                <Card.Body className='cardBody'>
                    <Card.Text>
                        <div>
                            <img src={props.image} alt={props.title} />
                        </div>
                        <div>
                            <h5>Description</h5>
                            <p>{props.description}</p>
                        </div>
                        <div>
                            <h5>Technology</h5>
                            <p>{props.technology}</p>
                        </div>
                        <div>
                            <a href={props.site} target="_blank" rel="noreferrer" className='btn btn-success'>{props.buttonText}</a>
                        </div>
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
    );
}

export default ProjectCard;