import doctors from "./img/doctors.png";
import { motion } from "framer-motion";

export default function Contact() {
    return (
        <div>
            <img className="bg overlap" src={doctors} alt="dokters"></img>
            <motion.div className="page"
                initial={{ width: 0 }}
                animate={{ width: "70%", transition: { duration: 0.4} }}
                exit={{ x: window.innerWidth, transition:{duration:0.2}}}
            >
                <h1>Contact</h1>
                <p className="large-font"><b>For questions, please contact:</b>&ensp; piek.vossen@vu.nl</p>
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