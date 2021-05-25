import React, { useState, useEffect } from "react";
import ArticleCard from './ArticleCard';
import ArticleModal from './ArticleModal';
import Container from 'react-bootstrap/Container';
import { GetArticles } from '../../backend/ArticleService';
import '../../style/Shared.css';

export default function ArticlesPage() {
    const [articleCards, setArticleCards] = useState(null);
    const [showArticleModal, setShowArticleModal] = useState(false);
    const [articles, setArticles] = useState([]);
    const [id, setId] = useState(0)

    function readArticle(id) {
        setId(id)
        setShowArticleModal(true);
    }

    useEffect(() => {
        async function CreateArticleCards() {
            let tempArticles = await GetArticles();
            setArticles(tempArticles);

            setArticleCards(tempArticles.map((article, index) => {
                return (
                    <div className="col pb-3" key={index}>
                        <ArticleCard
                            id={article.id}
                            headline={article.headline}
                            snippet={article.snippet}
                            readArticle={readArticle}
                        />
                    </div>
                )
            }))
        }

        CreateArticleCards()
    }, [])

    return (
        <Container fluid className='p-4'>
            <div className='center p-1'>
                <h1 className='colour display-1'>Articles</h1>
            </div>
            <hr className='green' />
            <ArticleModal
                show={showArticleModal}
                setShow={setShowArticleModal}
                articles={articles}
                id={id}
            />
            <div className="row row-cols-1 row-cols-md-3">
                {articleCards}
            </div>
        </Container>
    )
}