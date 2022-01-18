import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './container/Home';
import Plant from './container/Plant';

function App() {
  return (
    <div className="main-wrapper">
      <Router>
        <Header />
        <div className="pages">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/plant" component={Plant} />
            <Route exact path="/fungi" component={Plant} />
            <Route exact path="/chemical-library" component={Plant} />
            <Route exact path="/disease-library" component={Plant} />
            <Route exact path="/about-us" component={Plant} />
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
