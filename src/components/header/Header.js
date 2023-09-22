import { Link } from "react-router-dom";
import './Header.css'

const Header = () => {
  return (
    <header className="header">
        <nav className="navbar navbar-expand-lg justify-content-between">
        <img className="logo" src={require("../../images/logo.png")} alt="logo"/>
            <div className="navbar-nav">
                <Link className="nav-link text-white" to={"/"}><h6>Home</h6></Link>
                <Link className="nav-link text-white" to={"/portfolio"}><h6>Portfolio</h6></Link>
                <Link className="nav-link text-white" to={"/experiences"}><h6>Experience</h6></Link>
            </div>
        </nav>
    </header>
  );
};

export default Header;
