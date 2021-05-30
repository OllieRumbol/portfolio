import React, { useState, useEffect, useContext } from "react";
import ArticleCard from './ArticleCard';
import ArticleModal from './ArticleModal';
import Container from 'react-bootstrap/Container';
import { GetArticles } from '../../backend/ArticleService';
import { MyContext } from '../../backend/MyProvider';
import '../../style/Shared.css';

export default function ArticlesPage() {
    const [articleCards, setArticleCards] = useState(null);
    const [showArticleModal, setShowArticleModal] = useState(false);
    const [id, setId] = useState(0);
    const context = useContext(MyContext);

    function readArticle(id) {
        setId(id)
        setShowArticleModal(true);
    }

    useEffect(() => {
        async function GetCachedArticlesOrFetchArticles() {
            if (context.articles.length !== 0) {
                return context.articles;
            }
            else {
                let tempArticles = await GetArticles();
                context.setArticles(tempArticles);
                return tempArticles;
            }
        }

        async function CreateArticleCards() {
            let articles = await GetCachedArticlesOrFetchArticles();

            setArticleCards(articles.map((article, index) => {
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
    }, [context])

    return (
        <Container fluid className='p-4'>
            <div className='center p-1'>
                <h1 className='colour display-1'>Articles</h1>
            </div>
            <hr className='green' />
            <ArticleModal
                show={showArticleModal}
                setShow={setShowArticleModal}
                id={id}
            />
            <div className="row row-cols-1 row-cols-md-3">
                {articleCards}
            </div>
        </Container>
    )
}