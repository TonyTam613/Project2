import { Link } from "react-router-dom";
import DropdownButton from "react-bootstrap/DropdownButton";
import Dropdown from 'react-bootstrap/Dropdown'

const Browse = () => {
    return (
        <div className="browse">
            <div className="container row my-5 py-3" style={{
                alignContent: "center",
                margin: "auto",
                paddingLeft: "0px"
            }}>
                <h1 style={{
                    textAlign: "left",
                    padding: "0px",
                    margin: "0px"
                }}>Browse Games</h1>
            </div>
            <DropdownButton id="dropdown-basic-button" title="Dropdown button">
                <Dropdown.Item href="">Action</Dropdown.Item>
                <Dropdown.Item href="">Adventure</Dropdown.Item>
                <Dropdown.Item href="">Horror</Dropdown.Item>
            </DropdownButton>
            <Link to="/Details" style={{
                textDecoration: "none"
            }}>
                <div className="container row my-5 py-3" style={{
                    margin: "auto",
                    backgroundColor: "#1A1D1A",
                    color: "white"

                }}>
                    <div className="container col-2">
                        <img className="my-4" width="100px" height="100px" alt="game image" />
                    </div>
                    <div className="container col-10 pe-3">
                        <h5 className="my-4">Game 1<br/></h5>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Recusandae velit enim animi debitis placeat repellat modi sit numquam magni unde, repudiandae fugiat inventore consequuntur nam minus odit odio culpa reprehenderit!</p>
                    </div>
                </div>
            </Link>
            <Link to="/Details" style={{
                textDecoration: "none"
            }}>
                <div className="container row my-5 py-3" style={{
                    margin: "auto",
                    backgroundColor: "#1A1D1A",
                    color: "white"

                }}>
                    <div className="container col-2">
                        <img className="my-4" width="100px" height="100px" alt="game image" />
                    </div>
                    <div className="container col-10 pe-3">
                        <h5 className="my-4">Game 2<br/></h5>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Recusandae velit enim animi debitis placeat repellat modi sit numquam magni unde, repudiandae fugiat inventore consequuntur nam minus odit odio culpa reprehenderit!</p>
                    </div>
                </div>
            </Link>
            <Link to="/Details" style={{
                textDecoration: "none"
            }}>
                <div className="container row my-5 py-3" style={{
                    margin: "auto",
                    backgroundColor: "#1A1D1A",
                    color: "white"

                }}>
                    <div className="container col-2">
                        <img className="my-4" width="100px" height="100px" alt="game image" />
                    </div>
                    <div className="container col-10 pe-3">
                        <h5 className="my-4">Game 3<br/></h5>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Recusandae velit enim animi debitis placeat repellat modi sit numquam magni unde, repudiandae fugiat inventore consequuntur nam minus odit odio culpa reprehenderit!</p>
                    </div>
                </div>
            </Link>
            <Link to="/Details" style={{
                textDecoration: "none"
            }}>
                <div className="container row my-5 py-3" style={{
                    margin: "auto",
                    backgroundColor: "#1A1D1A",
                    color: "white"

                }}>
                    <div className="container col-2">
                        <img className="my-4" width="100px" height="100px" alt="game image" />
                    </div>
                    <div className="container col-10 pe-3">
                        <h5 className="my-4">Game 4<br/></h5>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Recusandae velit enim animi debitis placeat repellat modi sit numquam magni unde, repudiandae fugiat inventore consequuntur nam minus odit odio culpa reprehenderit!</p>
                    </div>
                </div>
            </Link>
            <Link to="/Details" style={{
                textDecoration: "none"
            }}>
                <div className="container row my-5 py-3" style={{
                    margin: "auto",
                    backgroundColor: "#1A1D1A",
                    color: "white"

                }}>
                    <div className="container col-2">
                        <img className="my-4" width="100px" height="100px" alt="game image" />
                    </div>
                    <div className="container col-10 pe-3">
                        <h5 className="my-4">Game 5<br/></h5>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Recusandae velit enim animi debitis placeat repellat modi sit numquam magni unde, repudiandae fugiat inventore consequuntur nam minus odit odio culpa reprehenderit!</p>
                    </div>
                </div>
            </Link>
            <Link to="/Details" style={{
                textDecoration: "none"
            }}>
                <div className="container row my-5 py-3" style={{
                    margin: "auto",
                    backgroundColor: "#1A1D1A",
                    color: "white"

                }}>
                    <div className="container col-2">
                        <img className="my-4" width="100px" height="100px" alt="game image" />
                    </div>
                    <div className="container col-10 pe-3">
                        <h5 className="my-4">Game 6<br/></h5>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Recusandae velit enim animi debitis placeat repellat modi sit numquam magni unde, repudiandae fugiat inventore consequuntur nam minus odit odio culpa reprehenderit!</p>
                    </div>
                </div>
            </Link>
        </div>
      
    );
}
   
  export default Browse;