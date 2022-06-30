import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './Navbar';
import Home from './Home';
import Action from './Action';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Browse from './Browse';
import Details from './Details';
import Purchase from './Purchase';
import Confirmation from './Confirmation';
import Footer from './Footer';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar/>
        <div className="content">
          <Switch>
            <Route exact path="/Project2">
              <Home />
            </Route>
            <Route exact path="/Action">
              <Action />
            </Route>
            <Route path="/Browse">
              <Browse />
            </Route>
            <Route path="/Details">
              <Details />
            </Route>
            <Route path="/Purchase">
              <Purchase />
            </Route>
            <Route path="/Confirmation">
              <Confirmation />
            </Route>
          </Switch>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
