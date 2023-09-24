import { Link } from "react-router-dom";
import './Header.css'

const Header = () => {
  return (
    <header className="header">
        <nav className="navbar navbar-expand-lg justify-content-between">
        {/* <img className="logo" src={require("../../images/logo.png")} alt="logo"/> */}
        <Link className="nav-link text-white" to={"/"}><img className="logo" src={require("../../images/logo.png")} alt="logo"/></Link>
            <div className="navbar-nav">
                {/* <Link className="nav-link text-white" to={"/"}><h5>Home</h5></Link> */}
                <Link className="nav-link text-white" to={"/portfolio"}><h5>Portfolio</h5></Link>
                <Link className="nav-link text-white" to={"/photography"}><h5>Photography</h5></Link>
            </div>
        </nav>
    </header>
  );
};

export default Header;
