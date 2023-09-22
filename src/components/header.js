import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header">
        <nav>
            <ul className="link-list">
                <li>
                <Link to={"/"}>HOME</Link>
                </li>
                <li>
                <Link to={"/portfolio"}>PORTFOLIO</Link>
                </li>
                <li>
                <Link to={"/about"}>ABOUT</Link>
                </li>
                <li>
                <Link to={"/experiences"}>EXPERIENCES</Link>
                </li>
            </ul>
        </nav>
        <h1>Emmanuel Barinia</h1>
    </div>
  );
};

export default Header;
