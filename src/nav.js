import Logo from "./img/logo_umc.png";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function Nav() {
    return (
        <div className="nav">
            <Link to="/about">
                <motion.div className="logocontainer" whileHover={{boxShadow:"0px 0px 8px rgb(255,255,255)"}}>
                    <img className="logo" src={Logo} alt="logo"></img>
                </motion.div>
            </Link>
            <div className="navlink">
                <Link to="/about"><motion.div whileHover={{scale:1.2}}>About</motion.div></Link>
                <Link to="/team"><motion.div whileHover={{ scale: 1.2 }}>Meet the Team</motion.div></Link>
                <Link to="/publications"><motion.div whileHover={{ scale: 1.2 }}>Publications</motion.div></Link>
                <Link to="/contact"><motion.div whileHover={{ scale: 1.2 }}>Contact</motion.div></Link>
            </div>
        </div>
    );
}