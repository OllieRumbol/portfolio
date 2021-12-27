import ProjectCard from './ProjectCard';
import Container from 'react-bootstrap/Container';
import '../../style/Shared.css';
import DraughtsGameImage from '../../assets/DraughtsGame.PNG';
import Modal from '../../assets/Modal.png';
import TreeCalculator from '../../assets/TreeCalculator.PNG';
import IapTool from '../../assets/IapTool.png';

const ProjectPage = () => {

  return (
    <Container fluid className='p-4'>
      <h1 className='text-center p-1 colour display-1'>Projects</h1>
      <p className='colour fs-4'>
        Over the years I have built many projects to help develop my skills as a developer using all sorts of technology, libraries, frameworks and tools.
      </p>
      <ProjectCard
        title='Ahy-ah-papi (IAP tool)'
        description='This project was a proof of concept to show how use a tool that manages In-App-Purchases could be. Most apps these 
        days have some form of IAP, whether thats a subscription or a one off purchase. There are also subtle differences between IOS and
        android with IOS needing a secret to validate a receipt. This tool manages all of this by allowing users to add an IAP, get all IAPs 
        from a bundle ID, edit an IAP, delete an IAP, blacklist an IAP, and so much more in the future. This saves users a lot of time and 
        complexity from manually hitting an API or manually adding to the DB.'
        technology='This project was built using React with TypeScript. React allows me to build POC with ease due to its simple and easy 
        syntax. To style the site React bootstrap and bootstrap 5 are used. Bootstrap 5 has lots of new features that reduced the about of CSS 
        needed for example font size.'
        site='https://github.com/OllieRumbol/ahy-ah-papi'
        image={IapTool}
        buttonText='Link to repo' />
        <br></br>
      <ProjectCard
        title='Draughts Game'
        description='A draughts game built that offers players both two-player and single-player modes with a range of difficulty levels.
          The game has many features to help players during the game, such as displaying all potential moves, whos turn it is, undo and the 
          number of pieces taken for each player.'
        technology='The front end of the game is built using react js and many other react libraries. Whilst the backend uses Azure 
          serverless functions combined with the minimax algorithm to calculate the PCs next move. The site has been deployed using 
          GitHub pages with a YAML pipeline to automate deployments.'
        site='https://ollierumbol.github.io/draughtsgame/#/'
        image={DraughtsGameImage}
        buttonText='Link to site' />
        <br></br>
      <ProjectCard
        title='Dynamic Vue Modal'
        description='The idea of this project was to mix and match old and new technologies. Companies sometimes have so much technical 
          debt that they believe they have no other choice but to carry on using old technologies in new projects and make the 
          problem worse. This solution dynamically loads Vue and other dependencies without interfering with old technology. 
          The modal allows users to log in.'
        technology='The project uses as much vanilla js as possible and relies on Vue for DOM manipulation. This means when the next 
        best frontend framework comes out when can use it as quickly as possible. It can be configured using a JSON file on AWS S3.'
        site='https://github.com/OllieRumbol/Dynamic-Vue'
        image={Modal}
        buttonText='Link to repo' />
        <br></br>
      <ProjectCard
        title='Tree Calculator'
        description='This program solves calculations by creating a tree from an equation and then solving a tree. It follows the 
          BIDMAS logic (Brackets, Indices, Division, Multiplication, Addition, Subtraction) and can deal with all sort of 
          calculations +, -, *, /, !, √, powers and brackets. Validation does occur before creating a tree for example dividing 
          by 0 or missing out numbers.'
        technology='A .NET Core console application has been used with .NET standard class libraries and MS unit tests.'
        site='https://github.com/OllieRumbol/TreeCalculator'
        image={TreeCalculator}
        buttonText='Link to repo' />
      <br></br>
      <p className='colour fs-4'>
        After my first year of university, I built all sorts of applications in Java to help develop my foundation knowledge as a
        developer. Such as clocks, calculators, text editors, track archery scoring, track table tennis matches, encoding and
        decoding messages, binary converters, code breakers and traffic light systems.
      </p>
    </Container>
  );
}

export default ProjectPage;