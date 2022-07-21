import { useContext, useState } from "react";
import { useHistory } from "react-router-dom";
import { UserContext } from "./context/userContext";

const LogIn = () => {
    const {setName} = useContext(UserContext);
    const [userName, setUser] = useState("");
    const history = useHistory();
    return (
        <div style={{minHeight: "74.1vh"}}>
            <div className="container-sm" style={{
                backgroundColor: "#D9D9D9",
                padding: "2vw 4vw",
                marginTop: "3vw",
                marginBottom: "2vw",
                maxHeight: "765px",
                textAlign: "left"
            }}>
                
                <div aria-label="input group 1" class="input-group mb-3">
                    <span aria-label="username icon" class="input-group-text" id="basic-addon1">Username</span>
                    <input type="text" class="form-control" id="username" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1" onChange={(e) => setUser(e.target.value)}></input>
                </div>
                <div className="input-group mb-3">
                    <span aria-label="password icon" class="input-group-text" id="basic-addon1">Password</span>
                    <input type="text" class="form-control" id="password" placeholder="Password" aria-label="Password" aria-describedby="basic-addon1"></input>
                </div>
                <div className="input-group mb-3">
                    <button aria-label="Log in button" className="btn btn-dark" onClick={() => {setName(userName);  history.push("/Project2");}}>Log In</button>
                </div>
            </div>
        </div>
    );
}
 
export default LogIn;