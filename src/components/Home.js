import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
import '../style/Home.css'

export default function Home() {

  return (
    <div className='p-4'>
      <Jumbotron fluid>
        <Container className='header'>
          <h1 className='title'>Oliver BOURNE Portfolio</h1>
          <hr className='green' />
          <h5 className='p-2'>
            .Net Developer with a passion for creating well structured and reliable solutions using the Microsoft stack of technologies. 
            I can't wait to learn new tools, frameworks and libraries. I have a keen interest in frontend technologies like React and Vue.
            Achieved a 1st class BSc focused in Computer Science from the University of Kent.
          </h5>
        </Container>
      </Jumbotron>
      <div>

      </div>
    </div>
  );
}