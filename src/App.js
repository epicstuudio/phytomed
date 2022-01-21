import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './container/Home';
import Plant from './container/Plant';
import PlantDetails from './container/PlantDetails';
import Error from './container/Error';
import Footer from './components/Footer';
import ListView from './container/ListView';

function App() {
  return (
    <div className="main-wrapper">
      <Router>
        <Header />
        <div className="pages">
          <Switch>
            {/* Menu Router */}
            <Route exact path="/" component={Home} />
            <Route exact path="/plantae" component={Plant} />
            <Route exact path="/fungi" component={Plant} />
            <Route exact path="/chemical-library" component={Plant} />
            <Route exact path="/disease-library" component={Plant} />
            <Route exact path="/about-us" component={Plant} />

            {/* Single Surf Router */}
            <Route path="/plant/:slug" exact component={PlantDetails} />

            {/* List View of Details */}
            <Route path="/:category/:slug" exact component={ListView} />

            {/* Error Page */}
            <Route path="/" component={Error} />
          </Switch>
          <Footer />
        </div>
      </Router>
    </div>
  );
}

export default App;
