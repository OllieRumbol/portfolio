import { HashRouter as Router, Route, Switch, Link } from 'react-router-dom';
import Home from './home/Home';
import Cv from './cv/Cv';
import Container from 'react-bootstrap/Container';
import '../style/App.css';
import '../style/bootstrap.min.css';
import Pdf from '../assets/Oliver Bourne CV.pdf';

export default function App() {

  return (
    <Router>
      <main>
        <Switch>
          <Route path="/" exact component={() => <Home />} />
          <Route path="/cv" exact component={() => <Cv />} />
        </Switch>
      </main>
    </Router>
  );
}

function pdf() {
  return (
    <div>
      <embed src={Pdf} className="full-height" />
    </div>
  );
}