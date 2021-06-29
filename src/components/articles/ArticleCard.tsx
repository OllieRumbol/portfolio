import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import '../../style/Shared.css';

type ArticleCardProps = {
    id: number
    headline: string
    snippet: string
    readArticle: (id: number) => void
}

const ArticleCard = (props: ArticleCardProps) => {

    const click = () => {
        props.readArticle(props.id);
    }

    return (
        <Card className='p-0 cardOutline' bg='dark'>
            <Card.Body className='colour'>
                <Card.Title className='display-4 text-center'>{props.headline}</Card.Title>
                <Card.Text className='fs-4'>{props.snippet}</Card.Text>
                <Button variant="success" onClick={click}>Read more</Button>
            </Card.Body>
        </Card>
    )
}

export default ArticleCard