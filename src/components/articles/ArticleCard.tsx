import React, { FunctionComponent } from "react";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import '../../style/ArticleCard.css';

interface ArticleCardProps {
    id: number
    headline: string
    snippet: string
    readArticle: (id: number) => void
}

const ArticleCard: FunctionComponent<ArticleCardProps> = (props) => {

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

export default ArticleCard