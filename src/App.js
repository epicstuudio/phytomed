import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './container/Home';
import Plant from './container/Plant';
import PlantDetails from './container/PlantDetails';
import Error from './container/Error';

function App() {
  return (
    <div className="main-wrapper">
      <Router>
        <Header />
        <div className="pages">
          <Switch>
            {/* Menu Router */}
            <Route exact path="/" component={Home} />
            <Route exact path="/plant" component={Plant} />
            <Route exact path="/fungi" component={Plant} />
            <Route exact path="/chemical-library" component={Plant} />
            <Route exact path="/disease-library" component={Plant} />
            <Route exact path="/about-us" component={Plant} />

            {/* Single Surf Router */}
            <Route path="/plant/:slug" exact component={PlantDetails} />

            {/* Error Page */}
            <Route path="/" component={Error} />
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
