import { HashRouter as Router, Route, Switch, Link } from 'react-router-dom';
import Home from './Home';
import AboutMe from './AboutMe';
import Projects from './Projects';
import Cv from './Cv';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import ButtonToolbar from 'react-bootstrap/ButtonToolbar';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../style/App.css';

export default function App() {

  return (
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
          <ButtonGroup className="m-2">
            <a href="https://github.com/OllieRumbol" target="_blank" rel="noreferrer" className="btn btn-success">GitHub</a>
          </ButtonGroup>
          <ButtonGroup className="m-2">
            <a href="https://www.linkedin.com/in/oliver-bourne-a17aa91a3/" target="_blank" rel="noreferrer" className="btn btn-success">LinkedIn</a>
          </ButtonGroup>
        </ButtonToolbar>
      </Container>
      <main className="fullSize">
        <Switch>
          <Route path="/" exact component={() => <Home />} />
          <Route path="/aboutMe" exact component={() => <AboutMe />} />
          <Route path="/projects" exact component={() => <Projects />} />
          <Route path="/cv" exact component={() => <Cv />}/>
        </Switch>
      </main>
    </Router>
  );
}