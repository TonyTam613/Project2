import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="containter-fluid" style={{
      backgroundColor: "#435058"
    }}>
      <nav className="navbar">
        <Link to="/Project2"><h1>Engine Games</h1></Link>
        <div className="links">
          <div className="dropdown">
            <a className="dropbtn">Store</a>
            <div className="dropdown-content">
              <Link to="/Browse">Browse</Link>
              <Link to="/Action">Action</Link>
              <Link to="/Adventure">Adventure</Link>
              <Link to="/Horror">Horror</Link>
            </div>
          </div>
          <Link to="/Project2">Community</Link>
          <Link to="/Project2">Contact Us</Link>
          <Link to="/Project2">My Cart</Link>
          <Link to="/Project2">Log In</Link>
        </div>
    </nav>
  </div>
  );
}
 
export default Navbar;