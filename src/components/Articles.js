import React, { useState, useEffect } from "react";
import ArticleCard from './ArticleCard';
import ArticleModal from './ArticleModal';
import Container from 'react-bootstrap/Container';
import { GetArticles } from '../backend/ArticleService';
import '../style/Shared.css';

export default function Articles() {
    const [articleCards, setArticleCards] = useState(null);
    const [showArticleModal, setShowArticleModal] = useState(false);
    const [articleToRead, setArticleToRead] = useState(null);

    const readArticle = (id) => {
        let articles = GetArticles();
        let article = articles.filter(article => {
            return article.id === id;
        })[0];

        setArticleToRead(article);

        setShowArticleModal(true);
    }

    useEffect(() => {
        let articles = GetArticles();

        setArticleCards(articles.map((article, index) => {
            return (
                <div className="col pb-3">
                    <ArticleCard
                        key={index}
                        id={article.id}
                        headline={article.headline}
                        snippet={article.snippet}
                        readArticle={readArticle}
                    />
                </div>
            )
        }))
    }, []);

    return (
        <Container fluid className='p-4'>
            <div className='center p-1'>
                <h1 className='colour display-1'>Articles</h1>
            </div>
            <hr className='green' />
            <ArticleModal
                show={showArticleModal}
                setShow={setShowArticleModal}
                article={articleToRead}
            />
            <div className="row row-cols-1 row-cols-md-3">
                {articleCards}
            </div>
        </Container>
    )
}