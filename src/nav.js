import Logo from "./img/logo_umc.png";
import { Link } from "react-router-dom";

export default function Nav() {
    return (
        <div className="nav">
            <a href="https://cltl.github.io/a-proof-project/">
            <div className="logocontainer">
                <img className="logo" src={Logo} alt="logo"></img>
            </div>
            </a>
            <div className="navlink">
                <Link to="/about">About</Link>
                <Link to="/team">Meet the Team</Link>
                <Link to="/publications">Publications</Link>
                <Link to="/contact">Contact</Link>
            </div>
        </div>
    );
}