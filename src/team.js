import teamphoto from "./img/A-PROOF_team.png";
import background from "./img/background.jpg";
import {motion} from 'framer-motion';

export default function Team() {
    return (
        <>
            <motion.div className="page"
                initial={{ width: 0 }}
                animate={{ width: "70%", transition: { duration: 0.4 } }}
                exit={{ x: window.innerWidth, transition: { duration: 0.2 } }}
            >
                <div className="textcontainer">
                    <h1>The A-PROOF Core Team</h1>
                    <ul>
                        <li><b>Rehabilitation Medicine (AmsterdamUMC)</b></li>
                        <ul>
                            <li> Edwin Geleijn, Caroline Meskers, prof.dr. Carel Meskers, dr. Marike van der Leeden</li>
                        </ul>
                        <li><b>VU Computational Linguistics and Text Mining Lab</b></li>
                        <ul>
                            <li> prof.dr. Piek Vossen, Jenia Kim </li>
                        </ul>
                        <li><b>ICF (Leiden University, AmsterdamUMC)</b></li>
                        <ul>
                            <li>Sabina van der Veen MSc, prof.dr. Guy Widdershoven</li>
                        </ul>
                        <li><b>Amsterdam University of Applied Sciences / Hogeschool van Amsterdam</b></li>
                        <ul>
                            <li>dr. Jesse Aarden, Marwan el Morabet MSc</li>
                        </ul>
                    </ul>

                    <h1>The A-PROOF Annotation Team</h1>
                    <ul>
                        <li> 6 students with (para)medical background: Caroline, Nienke, Joey, Quinten, Stella, Jasper
                        </li>
                    </ul>

                    <h1>Master Students Text Mining / Data Science</h1>
                    <ul>
                        <li> Stella, Quirine, Gian-Luca, Bruna, Ellemijn, Sharona, Enrico, Xiouqian, Leyla (under supervision of Marwan el Morabet/Jesse Aarden)
                        </li>
                    </ul>
                </div>
                <img className="smallimage" src={teamphoto} alt="team"></img>
            </motion.div>
        </>
    )
}