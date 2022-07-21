import { Link, useParams } from "react-router-dom";
import DropdownButton from "react-bootstrap/DropdownButton";

const Browse = (props) => {
    var games = props.games;
    const { genre } = useParams();

    if (genre !== "all") {
        games = props.games.filter((game) => game.genre === genre);
    }

    console.log(genre, games);

    return (
        <div className="browse" style={{
            minHeight: "75.2vh"
        }}>
            <div className="container row my-5 py-3" style={{
                alignContent: "center",
                margin: "auto",
                paddingLeft: "0px",
                display: "flex"

            }}>
                <h1 aria-label="Browse Games Header" style={{
                    textAlign: "left",
                    padding: "0px",
                    margin: "0px",
                    width: "auto"
                }}>Browse Games</h1>
                <DropdownButton aria-label="dropdown button" id="dropdown-basic-button" title="Sort By Genres" style={{
                    width: "auto",
                    marginLeft: "auto"
                }}>
                    <Link aria-label="option 1" className= "dropdown-item" to="/Browse/all">All</Link>
                    <Link aria-label="option 2" className= "dropdown-item" to="/Browse/action">Action</Link>
                    <Link aria-label="option 3" className= "dropdown-item" to="/Browse/adventure">Adventure</Link>
                    <Link aria-label="option 4" className= "dropdown-item" to="/Browse/horror">Horror</Link>
                </DropdownButton>
            </div>
            {games.map((game) => (
                <div key={ game.id }>
                    <Link aria-label={`link to ${game.title} game details`} to={`/Details/${game.id}`} style={{
                        textDecoration: "none"
                    }}>
                        <div className="container row my-5 py-3" style={{
                            margin: "auto",
                            backgroundColor: "#1A1D1A",
                            color: "white"
        
                        }}>
                            <div className="container col-2">
                                <img aria-label={`${game.title} game image`} className="my-4" width="100px" height="125px" alt="game" src={game.pic}/>
                            </div>
                            <div className="container col-10 pe-3">
                                <h5 aria-label={`${game.title} game title`} className="my-4">{ game.title }<br/></h5>
                                <p aria-label={`${game.title} game description`}>{ game.description }</p>
                            </div>
                        </div>
                    </Link>
                </div>
            ))}
        </div>
      
    );
}
   
  export default Browse;