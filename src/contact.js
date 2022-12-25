import { motion } from "framer-motion";

export default function Contact() {
    return (
        <>
            <motion.div className="page"
                initial={{ width: 0 }}
                animate={{ width: "70%", transition: { duration: 0.4} }}
                exit={{ x: window.innerWidth, transition:{duration:0.2}}}
                style={{marginBottom: "40vh"}}
            >
                <h1>Contact</h1>
                <p className="large-font"><b>For questions, please contact:</b>&ensp; m.vanderleeden@amsterdamumc.nl</p>
            </motion.div>
        </>
    )
}