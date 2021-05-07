import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './home/Home';
import Cv from './cv/Cv';
import '../style/App.css';

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