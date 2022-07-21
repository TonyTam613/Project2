import { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "./context/userContext";

const Navbar = () => {
  const {name, setName} = useContext(UserContext);
  return (
    <div className="containter-fluid" style={{
      backgroundColor: "#435058"
    }}>
      <nav aria-label="navigation bar" className="navbar">
        <Link aria-label="home link" to="/Project2"><h1>Engine Games</h1></Link>
        <div className="links">
          <div aria-label="dropdown" className="dropdown">
            <a className="dropbtn">Store</a>
            <div className="dropdown-content">
              <Link aria-label="option 1" to="/Browse/all">Browse</Link>
              <Link aria-label="option 2" to="/Browse/action">Action</Link>
              <Link aria-label="option 3" to="/Browse/adventure">Adventure</Link>
              <Link aria-label="option 4" to="/Browse/horror">Horror</Link>
            </div>
          </div>
          <Link aria-label="community link" to="/Community">Community</Link>
          <Link aria-label="contact link" to="/Contact">Contact Us</Link>
          <Link aria-label="purchase page link" to="/Purchase">View Cart</Link>
          {name === "" ? <Link aria-label="log in link" to="/LogIn">Log In</Link> : <Link aria-label="username display">{name}</Link>}
        </div>
    </nav>
  </div>
  );
}
 
export default Navbar;