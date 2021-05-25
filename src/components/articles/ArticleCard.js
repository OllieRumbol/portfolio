import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import '../../style/ArticleCard.css';

export default function ArticleCard(props) {

    const click = () => {
        props.readArticle(props.id);
    }

    return (
        <Card className='p-0'>
            <Card.Body className='cardBody'>
                <Card.Title className='display-4 text-center'>{props.headline}</Card.Title>
                <Card.Text className='fs-4'>{props.snippet}</Card.Text>
                <Button variant="success" onClick={click}>Read more</Button>
            </Card.Body>
        </Card>
    )
}