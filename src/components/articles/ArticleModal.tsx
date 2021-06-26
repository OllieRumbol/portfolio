import React, { FunctionComponent, useContext } from "react";
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import ReactHtmlParser from 'react-html-parser';
import { MyContext } from '../../backend/MyProvider';
import '../../style/ArticleModal.css';
import '../../style/Shared.css';
import { ContextType, Article } from "../../type.d";

interface ArticleModalProps {
    id: number
    show: boolean
    setShow: (show: boolean) => void
}

const ArticleModal: FunctionComponent<ArticleModalProps> = (props) => {
    const context = useContext(MyContext) as ContextType;

    console.log()

    const article: Article | undefined = context.articles.find(article => article.id === props.id);
    const headline: string = article !== undefined ? article.headline : '';
    const body: string = article !== undefined ? article.body : '';

    const handleClose = () => props.setShow(false);

    return (
        <Modal show={props.show} size="xl" centered>
            <div className='modalWhole colour'>
                <Modal.Header>
                    <Modal.Title className='display-4 fw-bold'>{headline}</Modal.Title>
                </Modal.Header>
                <Modal.Body className='fs-5'>{ReactHtmlParser(body)}</Modal.Body>
                <Modal.Footer>
                    <Button variant='success' onClick={handleClose}>Close</Button>
                </Modal.Footer>
            </div>
        </Modal>
    )
}

export default ArticleModal