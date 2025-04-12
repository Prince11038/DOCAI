import "./Navbar.css";
import Logo from "../assets/image/DocAI.ico";
import User from "./User.jsx"
import Button from "./Button.jsx";
import {Link} from "react-router-dom";

function Navbar() {
  return (
    <>
      <div className="navbar">
        <div className="details">
          <img src={Logo} alt="Logo"/>
        </div>
        <div className="navlist">
          
        <Link to="/">
          <div className="nav-list-item">
            <Button text="Home" />
          </div>
        </Link>

        <Link to="/Service">
          <div className="nav-list-item">
            <Button text="Service" />
          </div>
        </Link>

        <Link to="/About">
          <div className="nav-list-item">
            <Button text="About Us" />
          </div>
        </Link>

        </div>
        <div className="user">
          <User />
        </div>
      </div>
    </>
  );
}

export default Navbar;
