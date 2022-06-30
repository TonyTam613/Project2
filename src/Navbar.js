import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="containter-fluid" style={{
      backgroundColor: "#435058"
    }}>
      <nav className="navbar">
        <a href="/Project2"><h1>Engine Games</h1></a>
        <div className="links">
          <div className="dropdown">
            <a className="dropbtn">Store</a>
            <div className="dropdown-content">
              <a href="/Project2/Browse">Browse</a>
              <a href="/Project2/Action">Action</a>
              <a href="/Project2/Adventure">Adventure</a>
              <a href="/Project2/Horror">Horror</a>
            </div>
          </div>
          <a href="">Community</a>
          <a href="">Contact Us</a>
          <a href="">My Cart</a>
          <a href="">Log In</a>
        </div>
    </nav>
  </div>
  );
}
 
export default Navbar;