import Card from 'react-bootstrap/Card';
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
        <Card bg='dark' className='colour cardOutline'>
            <Card.Header className='display-5 text-center'>{props.title}</Card.Header>
            <Card.Body>
                <Card.Text>
                    <div className="row row-cols-1 row-col-lg-3">
                        <div className='col-lg-7'>
                            <h5 className='display-6'>Description</h5>
                            <p className='fs-4'>{props.description}</p>
                            <h5 className='display-6'>Technology</h5>
                            <p className='fs-4'>{props.technology}</p>
                            <a href={props.site} target="_blank" rel="noreferrer" className='btn btn-success mb-3'>{props.buttonText}</a>
                        </div>
                        <div className='col-lg-5 d-flex justify-content-center'>
                            <img className='img-fluid' src={props.image} alt={props.title} />
                        </div>
                    </div>
                </Card.Text>
            </Card.Body>
        </Card>
    );
}

export default ProjectCard;