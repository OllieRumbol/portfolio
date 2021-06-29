import Card from 'react-bootstrap/Card';
import '../../style/ProjectCard.css';
import '../../style/Shared.css';

type ProjectCardProps = {
    title: string
    image: string
    description: string
    technology: string
    site: string
    buttonText: string
}

const ProjectCard = (props: ProjectCardProps) => {

    return (
        <div className='m-5'>
            <Card bg='dark' className='colour cardOutline'>
                <Card.Header className='display-5 text-center'>{props.title}</Card.Header>
                <Card.Body>
                    <Card.Text>
                        <img src={props.image} alt={props.title} />
                        <h5 className='display-6'>Description</h5>
                        <p className='fs-4'>{props.description}</p>
                        <h5 className='display-6'>Technology</h5>
                        <p className='fs-4'>{props.technology}</p>
                        <a href={props.site} target="_blank" rel="noreferrer" className='btn btn-success'>{props.buttonText}</a>
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
    );
}

export default ProjectCard;