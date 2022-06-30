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
            <Route exact path="/Project2/Action">
              <Action />
            </Route>
            <Route exact path="/Project2/Browse">
              <Browse />
            </Route>
            <Route exact path="/Project2/Details">
              <Details />
            </Route>
            <Route exact path="/Project2/Purchase">
              <Purchase />
            </Route>
            <Route exact path="/Project2/Confirmation">
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
