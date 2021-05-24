import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import ReactHtmlParser from 'react-html-parser';
import '../style/ArticleModal.css';
import '../style/Shared.css';

export default function ArticleModal(props) {
    const article = props.articles.filter(article => {
        return article.id === props.id;
    })[0];
    const headline = article !== undefined ? article.headline : '';
    const body = article !== undefined ? article.body : '';


    const handleClose = () => props.setShow(false);

    return (
        <Modal show={props.show} size="lg" centered>
            <div className='modalWhole colour'>
                <Modal.Header>
                    <Modal.Title className='display-4'>{headline}</Modal.Title>
                </Modal.Header>
                <Modal.Body className='fs-5'>{ReactHtmlParser(body)}</Modal.Body>
                <Modal.Footer>
                    <Button variant='success' onClick={handleClose}>Close</Button>
                </Modal.Footer>
            </div>
        </Modal>
    )
}