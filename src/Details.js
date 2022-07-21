import { useParams } from "react-router-dom";
import Carousel from 'react-bootstrap/Carousel';
import PurchaseBtn from './buttons/purchaseBtn.js';

const Details = (params) => {
    const { id } = useParams();
    const games = params.games.filter((game) => game.id === parseInt(id));
    console.log(games, id);
    return (
      <div className="details">
        <div className="container row" style={{
            margin: "auto",
            height: "100vh",
            paddingBottom: "2vw"
        }}>
            <div className="col-8">
                <div className="row" style={{
                    backgroundColor: "grey",
                    margin: "2vw 0vw",
                    padding: "2vw 2vw",
                    height: "60%",
                    textAlign: "left"
                }}>
                    <Carousel aria-label="carousel for game content" style={{
                        maxHeight: "765px"
                    }}>
                        <Carousel.Item aria-label="carousel item 1 video" interval={3000} >
                            <iframe className="w-100 d-block" alt="trailer video" src={games[0].vidURL} title={games[0].title} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen style={{
                                width: "41.7vw",
                                height: "21.2vw"
                            }}>
                            </iframe>  
                            <Carousel.Caption>
                                <h3>{games[0].title} Trailer</h3>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item aria-label="carousel item 2" interval={3000}>
                            <img
                                className="d-block w-100"
                                src={games[0].cPic1}
                                alt="gameplay image 1"
                            />
                            <Carousel.Caption>
                                <h3>Gameplay 1</h3>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item aria-label="carousel item 3" interval={3000}>
                            <img
                                className="d-block w-100"
                                src={games[0].cPic2}
                                alt="gameplay image 2"
                            />
                            <Carousel.Caption>
                                <h3>Gameplay 2</h3>
                            </Carousel.Caption>
                        </Carousel.Item>
                    </Carousel>
                </div>
                <div className="row" style={{
                    backgroundColor: "grey",
                    margin: "2vw 0vw",
                    padding: "2vw 0vw",
                    height: "30%",
                    textAlign: "left"
                }}>
                    <h4 aria-label="game description" className="col-8" style={{ paddingTop: "1vw", paddingBottom: "1vw", paddingLeft: "2vw", fontSize: "1.2vw"}}>{games[0].description}<br/></h4>
                    <PurchaseBtn game = {games[0]}/>
                </div>
            </div>
            <div className="col-4" style={{
                backgroundColor: "grey",
                margin: "2vw 0vw 1vw 0vw",
                padding: "2vw 0vw",
                height: "100%",
                textAlign: "left"
            }}>
                <img alt="game cover" src={games[0].pic} style={{ width: "15vw", marginLeft: "3.5vw" }}/>
                <h5 aria-label="game genre publisher and developer" style={{marginLeft: "2vw"}}> <br/> Genre: {games[0].genre} <br /> Publisher: {games[0].publisher} <br />Developer: {games[0].developer} <br /></h5>
            </div>
        </div>
      </div>
    );
  }
   
  export default Details;