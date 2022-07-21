import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './Navbar';
import Home from './Home';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Browse from './Browse';
import Details from './Details';
import Purchase from './Purchase';
import Confirmation from './Confirmation';
import Footer from './Footer';
import { useState } from 'react';
import ssmgPic from './SSMG.jpg';
import alPic from './AL.jpg';
import hkPic from './HK.jpg';
import valPic from './Val.jpg';
import outlastPic from './outlast.jpg';
import wideMario from "./marioGP.jpg";
import wideMario2 from './marioGP2.jpg';
import CartContextProvider from './context/cartContext';
import valGP from './valGP.jpg';
import valGP2 from './valGP2.jpg';
import alGP from './alGP.jpg';
import alGP2 from './alGP2.jpg';
import hkGP from './hkGP.jpg';
import hkGP2 from './hkGP2.jpg';
import outGP from './outGP.jpg';
import outGP2 from './outGP2.jpg';
import Contact from './Contact';
import LogIn from './LogIn';
import UserContextProvider from './context/userContext';
import Community from './Community';
import BlogContextProvider from './context/blogContext';
import AddBlog from './AddBlog';


function App() {
  const [games, setGames] = useState([
    { title: 'Super Mario Galaxy', genre: 'adventure', description: 'Super Mario Galaxy is a 2007 platform game developed and published by Nintendo for the Wii. It is the third 3D game in the Super Mario series.', publisher: 'Nintendo', developer: 'Nintendo EAD Tokyo', price: 19.99, pic: ssmgPic, cPic1: wideMario, cPic2: wideMario2, vidURL: "https://www.youtube.com/embed/rmN8DHZYNCg", added: false, id: 0},
    { title: 'Apex Legends', genre: 'action', description: 'Apex Legends is the award-winning, free-to-play Hero Shooter from Respawn Entertainment. Master an ever-growing roster of legendary characters with powerful abilities, and experience strategic squad play and innovative gameplay in the next evolution of Hero Shooter and Battle Royale.', publisher: 'Electronic Arts', developer: 'Respawn Entertainment', price: 0, pic: alPic, cPic1: alGP, cPic2: alGP2, vidURL: "https://www.youtube.com/embed/cheYIVEtVQ4", added: false, id: 1},
    { title: 'Hollow Knight', genre: 'adventure', description: 'Forge your own path in Hollow Knight! An epic action adventure through a vast ruined kingdom of insects and heroes. Explore twisting caverns, battle tainted creatures and befriend bizarre bugs, all in a classic, hand-drawn 2D style.', publisher: 'Team Cherry', developer: 'Team Cherry', price: 16.99, pic: hkPic, cPic1: hkGP, cPic2: hkGP2, vidURL: "https://www.youtube.com/embed/UAO2urG23S4", added: false, id: 2},
    { title: 'Valorant', genre: 'action', description: 'Valorant is a free-to-play first-person hero shooter developed and published by Riot Games, for Microsoft Windows.', publisher: 'Riot Games', developer: 'Riot Games', price: 0, pic: valPic, cPic1: valGP, cPic2: valGP2, vidURL: "https://www.youtube.com/embed/UMzKD73cs3c", added: false, id: 3},
    { title: 'Outlast', genre: 'horror', description: 'Hell is an experiment you can\'t survive in Outlast, a first-person survival horror game developed by veterans of some of the biggest game franchises in history. As investigative journalist Miles Upshur, explore Mount Massive Asylum and try to survive long enough to discover its terrible secret... if you dare.', publisher: 'Red Barrels', developer: 'Red Barrels', price: 22.79, pic: outlastPic, cPic1: outGP, cPic2: outGP2, vidURL: "https://www.youtube.com/embed/uKA-IA4locM", added: false, id: 4}
  ]);
  return (
    <Router>
      <div className="App">
        <CartContextProvider>
          <UserContextProvider>
            <BlogContextProvider>
              <Navbar/>
                <Switch>
                  <Route exact path="/Project2">
                    <Home />
                  </Route>
                  <Route path="/Browse/:genre">
                    <Browse games={games} />
                  </Route>
                  <Route path="/Details/:id">
                    <Details games = {games} />
                  </Route>
                  <Route path="/Purchase">
                    <Purchase />
                  </Route>
                  <Route path="/Confirmation">
                    <Confirmation />
                  </Route>
                  <Route path="/Contact">
                    <Contact />
                  </Route>
                  <Route path="/LogIn">
                    <LogIn />
                  </Route>
                  <Route path="/Community">
                    <Community />
                  </Route>
                  <Route path="/AddBlog">
                    <AddBlog />
                  </Route>
                </Switch>
              <Footer />
            </BlogContextProvider>
          </UserContextProvider>
        </CartContextProvider>
      </div>
    </Router>
  );
}

export default App;
