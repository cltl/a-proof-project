import background from "./img/background.jpg";
import schema from "./img/A-PROOF.mp4";
import { motion } from "framer-motion";
import Footer from './footer';


export default function About() {
    return (
            <>
            <motion.div className="page"
                initial={{ width: 0 }}
                animate={{ width: "70%", transition: { duration: 0.4 } }}
                exit={{ x: window.innerWidth, transition: { duration: 0.2 } }}
            >
                <h1 animate={{ fontSize: "50px" }}>Welcome to A - PROOF</h1>
                <p style={{ fontFamily: "PublicSans-Light, sans-serif", fontSize: "28px" }}>
                    <b>A</b>utomated <b>P</b>rediction of post-COVID <b>R</b>ec<b>O</b>very <b>O</b>f <b>F</b>unctioning
                </p>
                <p className="aboutp">A-PROOF is a collaboration of medical and AI researchers to develop technology that can automatically monitor
                    the functioning of people in need of health care.</p>
                <br></br>
                <video className="aboutvideo" width="640" height="480" autoPlay muted loop>
                    <source src={schema} type="video/mp4"></source>
                    Your browser does not support the video tag.
                </video>
                <br></br>
                <p className="large-font"><b>For questions, please contact:</b>&ensp; m.vanderleeden@amsterdamumc.nl</p>
                <br></br>
            </motion.div>  
            </>          
    )
}