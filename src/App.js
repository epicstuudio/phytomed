import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './container/Home';
import Plant from './container/Plant';
import PlantDetails from './container/PlantDetails';
import Error from './container/Error';
import Footer from './components/Footer';
import ListView from './container/ListView';
import Library from './container/Library';

function App() {
  return (
    <div className="main-wrapper">
      <Router>
        <Header />
        <div className="pages">
          <Switch>
            {/* Menu Router */}
            <Route exact path="/" component={Home} />

            {/* Plant & Fungi */}
            <Route exact path="/plantae" component={Plant} />
            <Route exact path="/fungi" component={Plant} />

            {/* Chemical & Disease Library */}
            <Route exact path="/chemical-library" component={Library} />
            <Route exact path="/disease-library" component={Library} />

            {/* Single Surf Router */}
            <Route path="/plant/:slug" exact component={PlantDetails} />

            {/* List View of Details */}
            <Route path="/:category/:slug" exact component={ListView} />

            {/* Basic Pages */}
            <Route exact path="/about-us" component={Plant} />
            <Route path="/" component={Error} />
          </Switch>
          <Footer />
        </div>
      </Router>
    </div>
  );
}

export default App;
