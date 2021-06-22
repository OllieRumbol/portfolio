import React, { useContext } from "react";
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import ReactHtmlParser from 'react-html-parser';
import { MyContext } from '../../backend/MyProvider';
import '../../style/ArticleModal.css';
import '../../style/Shared.css';

export default function ArticleModal(props) {
    const context = useContext(MyContext);

    const article = context.articles.find(article => article.id === props.id);
    const headline = article !== undefined ? article.headline : '';
    const body = article !== undefined ? article.body : '';

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