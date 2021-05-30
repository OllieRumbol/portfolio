import { HashRouter as Router, Route, Switch, Link } from 'react-router-dom';
import HomePage from './home/HomePage';
import AboutMePage from './aboutMe/AboutMePage';
import ProjectsPage from './projects/ProjectsPage';
import ArticlesPage from './articles/ArticlesPage';
import CvPage from './cv/CvPage';
import MyProvider from '../backend/MyProvider';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import ButtonToolbar from 'react-bootstrap/ButtonToolbar';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../style/App.css';

export default function App() {

  return (
    <MyProvider>
      <Router>
        <Container fluid className="grey border-bottom border-success">
          <ButtonToolbar className="right">
            <Link to="/">
              <ButtonGroup className="m-2">
                <Button variant="success">Home</Button>
              </ButtonGroup>
            </Link>
            <Link to="/aboutMe">
              <ButtonGroup className="m-2">
                <Button variant="success">About Me</Button>
              </ButtonGroup>
            </Link>
            <Link to="/projects">
              <ButtonGroup className="m-2">
                <Button variant="success">Projects</Button>
              </ButtonGroup>
            </Link>
            <Link to="/articles">
              <ButtonGroup className="m-2">
                <Button variant="success">Articles</Button>
              </ButtonGroup>
            </Link>
            <ButtonGroup className="m-2">
              <a href="https://github.com/OllieRumbol" target="_blank" rel="noreferrer" className="btn btn-success">GitHub</a>
            </ButtonGroup>
            <ButtonGroup className="m-2">
              <a href="https://www.linkedin.com/in/oliver-bourne-a17aa91a3/" target="_blank" rel="noreferrer" className="btn btn-success">LinkedIn</a>
            </ButtonGroup>
          </ButtonToolbar>
        </Container>
        <Switch>
          <Route path="/" exact component={() => <HomePage />} />
          <Route path="/aboutMe" exact component={() => <AboutMePage />} />
          <Route path="/projects" exact component={() => <ProjectsPage />} />
          <Route path="/articles" exact component={() => <ArticlesPage />} />
          <Route path="/cv" exact component={() => <CvPage />} />
        </Switch>
      </Router>
    </MyProvider>
  );
}