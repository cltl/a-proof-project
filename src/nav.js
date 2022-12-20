import Logo_UMC from "./img/logo_umc-modified.png";
import Logo_VU from "./img/logo_VU-modified.png";
import Logo_Hogeschool from "./img/logo_hogeschool.png";
import Logo_Leiden from "./img/logo_leiden.png";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function Nav() {
    return (
        <div className="nav">
            <div className="logolinks">
                <motion.div className="logocontainer" whileHover={{ boxShadow: "0px 0px 8px rgb(255,255,255)" }}>
                    <a href="https://www.universiteitleiden.nl/en/about-us">
                    <img className="logo_leiden" src={Logo_Leiden} alt="logo_leiden"></img>
                    </a>
                </motion.div>
                <motion.div className="logocontainer" whileHover={{ boxShadow: "0px 0px 8px rgb(255,255,255)" }}>
                    <a href="https://www.amsterdamumc.org/en/about/organization/about-amsterdam-umc.htm">
                    <img className="logo_umc" src={Logo_UMC} alt="logo_umc"></img>
                    </a>
                </motion.div>
                <motion.div className="logocontainer" whileHover={{ boxShadow: "0px 0px 8px rgb(255,255,255)"}}>
                    <a href="https://vu.nl/en/about-vu">
                    <img className="logo_vu" src={Logo_VU} alt="logo_vu"></img>
                    </a>
                </motion.div>
                <motion.div className="logocontainer" whileHover={{ boxShadow: "0px 0px 8px rgb(255,255,255)" }}>
                    <a href="https://www.amsterdamuas.com/about-auas">
                    <img className="logo_hogeschool" src={Logo_Hogeschool} alt="logo_hogeschool"></img>
                    </a>
                </motion.div>
            </div>
            <hr style={{ color:"rgb(123, 162, 123)", width: "85%", height:0.1 }}/>
            <div className="navlink">
                <Link to="/about"><motion.div whileHover={{scale:1.2}}>About</motion.div></Link>
                <Link to="/team"><motion.div whileHover={{ scale: 1.2 }}>Meet the Team</motion.div></Link>
                <Link to="/publications"><motion.div whileHover={{ scale: 1.2 }}>Publications</motion.div></Link>
                <Link to="/contact"><motion.div whileHover={{ scale: 1.2 }}>Contact</motion.div></Link>
            </div>
        </div>
    );
}