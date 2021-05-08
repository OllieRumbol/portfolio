import ProjectCard from './shared/ProjectCard';
import Container from 'react-bootstrap/Container';
import '../style/Shared.css';
import '../style/Projects.css';
import DraughtsGameImage from '../assets/DraughtsGame.PNG';

export default function Projects() {

  return (
    <Container fluid className='p-4'>
      <div className='center p-1'>
        <h1 className='colour display-1'>Projects</h1>
      </div>
      <div className='m-5'>
        <h5 className='projectText'>
          Over the years I have built many projects to help develop my skills as a developer using all sorts of technology, libraries, frameworks and tools.
        </h5>
      </div>
      <div className='m-5'>
        <ProjectCard 
          title='Draughts Game' 
          description='A draughts game built that offers players both two-player and single-player modes with a range of difficulty levels.
          The game has many features to help players during the game, such as displaying all potential moves, whos turn, undo and the number
           of pieces taken for each player.'
          technology='The front end of the game is built using react js and many other react libraries. Whilst the backend uses Azure 
          serverless functions combined with the minimax algorithm to calculate the PCs next move. The site has been deployed using 
          GitHub pages with a YAML pipeline to automate deployments'
          site='https://ollierumbol.github.io/draughtsgame/#/'
          image={DraughtsGameImage} 
          imageAlt='Draughts game'/>
      </div>
    </Container>
  );
}