import bg from "./img/background.jpg";
import { motion } from "framer-motion";

export default function Contact() {
    return (
        <div>
            <img className="bg overlap" src={bg} alt="background"></img>
            <motion.div className="page"
                initial={{ width: 0 }}
                animate={{ width: "70%", transition: { duration: 0.4} }}
                exit={{ x: window.innerWidth, transition:{duration:0.2}}}
            >
                <h1>Contact</h1>
                <p className="large-font"><b>For questions, please contact:</b>&ensp; m.vanderleeden@amsterdamumc.nl</p>
            </motion.div>
            {/* NOT A GOOD CODE; TEMPORARY SOLUTION TO FIX THE FOOTER */}
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
        </div>
    )
}