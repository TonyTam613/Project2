import Carousel from 'react-bootstrap/Carousel';
import wideSSMG from './wideSSMG.jpg';
import wideVal from './wideVal.jpg';
import widerApex from './widerApex.jpg';
import superwideVal from './superwideVal.jpg';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="home">
      <div className="container-sm" style={{
        backgroundColor: "#D9D9D9",
        padding: "2vw 2vw",
        marginTop: "3vw",
        marginBottom: "2vw",
        maxHeight: "765px"
      }}>
        <Carousel aria-label='carousel for featured games' style={{
          maxHeight: "765px"
        }}>
          <Carousel.Item aria-label="carousel item 1" interval={3000} >
            <Link to="/Details/0">
              <img
                className="d-block w-100"
                src={wideSSMG}
                alt="Super Mario Galaxy Landscape Image"
              />  
              <Carousel.Caption>
                <h3>Super Mario Galaxy</h3>
              </Carousel.Caption>
            </Link>
          </Carousel.Item>
          <Carousel.Item aria-label="carousel item 2" interval={3000}>
            <Link to="/Details/3">
              <img
                className="d-block w-100"
                src={wideVal}
                alt="Valorant Landscape Image"
              />
              <Carousel.Caption>
                <h3>Valorant</h3>
              </Carousel.Caption>
            </Link>
          </Carousel.Item>
          <Carousel.Item aria-label="carousel item 3" interval={3000}>
            <Link to="/Details/1">
              <img
                className="d-block w-100"
                src={widerApex}
                alt="Apex Legends Landscape Image"
              />
              <Carousel.Caption>
                <h3>Apex Legends</h3>
              </Carousel.Caption>
            </Link>
          </Carousel.Item>
        </Carousel>
      </div>
      <div className="container-sm" style={{
        backgroundColor: "#D9D9D9",
        padding: "3vw 5vw",
        marginTop: "1vw"
      }}>
        <Link to="/Details/3" style={{
          textDecoration: "none",
          color: "black"
        }}>
          <img alt='Valorant Banner' src={superwideVal} style={{
            height: "15vw"
          }}/>
          <h3 aria-label='promotional text' style={{
            position: "relative",
            fontSize: "3vw",
            fontWeight: "bold"
          }}>50% Off On In-Game Purchases</h3>
        </Link>
      </div>
      <div className="container-sm" style={{
        backgroundColor: "#D9D9D9",
        padding: "2vw",
        marginTop: "4vw",
        marginBottom: "5vw",
        width: "50%"
      }}>
        <h1>Popular Games</h1>
        <Carousel aria-label='carousel for popular games' style={{
          maxHeight: "765px"
        }}>
          <Carousel.Item aria-label="carousel item 1" interval={3000} >
            <Link to="/Details/0">
              <img
                className="d-block w-100"
                src={wideSSMG}
                alt="Super Mario Galaxy Landscape"
              />  
              <Carousel.Caption>
                <h3>Super Mario Galaxy</h3>
              </Carousel.Caption>
            </Link>
          </Carousel.Item>
          <Carousel.Item aria-label="carousel item 2" interval={3000}>
            <Link to="/Details/3">
              <img
                className="d-block w-100"
                src={wideVal}
                alt="Valorant Landscape"
              />
              <Carousel.Caption>
                <h3>Valorant</h3>
              </Carousel.Caption>
            </Link>
          </Carousel.Item>
          <Carousel.Item aria-label="carousel item 3" interval={3000}>
            <Link to="/Details/1">
              <img
                className="d-block w-100"
                src={widerApex}
                alt="Apex Legends Landscape"
              />
              <Carousel.Caption>
                <h3>Apex Legends</h3>
              </Carousel.Caption>
            </Link>
          </Carousel.Item>
        </Carousel>
      </div>
    </div>
  );
}
 
export default Home;