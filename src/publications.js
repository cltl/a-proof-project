import bg from "./img/background.jpg";
import {motion} from "framer-motion";

export default function Publications() {
    return (
        <div>
            <img className="bg overlap" src={bg} alt="background"></img>
            <motion.div className="page"
                initial={{ width: 0 }}
                animate={{ width: "70%", transition: { duration: 0.4 } }}
                exit={{ x: window.innerWidth, transition: { duration: 0.2 } }}
            >
                <h1>Publications</h1>
                <p><i>Click on a publication to view it</i></p>
                <div className="textcontainer">
                    <ul className="spacedul">
                        <motion.li whileHover={{ scale: 1.1 }}> 
                            <a href="https://aclanthology.org/2022.lrec-1.488/">Jenia Kim, Stella Verkijk, Edwin Geleijn, Marike van der Leeden, Carel Meskers, Caroline Meskers, Sabina van der Veen, Piek T.J.M. Vossen, and Guy Widdershoven. <i>Modeling Dutch Medical Texts for Detecting Functional Categories and Levels of COVID-19 Patients</i>. Proceedings of the Language Resources and Evaluation Conference (LREC), 2022, Marseille.
                            </a> 
                        </motion.li>
                        <motion.li whileHover={{ scale: 1.1 }}>
                            <a href="https://pubmed.ncbi.nlm.nih.gov/35040376/"> Meskers CGM, van der Veen S, Kim J, Meskers CJW, Smit QTS, Verkijk S, Geleijn E, Widdershoven GAM, Vossen PTJM, van der Leeden M. <i>Automated recognition of functioning, activity and participation in COVID-19 from electronic patient records by natural language processing: a proof- of- concept. </i> Ann Med. 2022 Dec;54(1):235-243 doi: 10.1080/07853890.2021.2025418. PMID: 35040376; PMCID: PMC8774059.
                            </a>
                        </motion.li>
                        <motion.li whileHover={{ scale: 1.1 }}>
                            <a href="https://aclanthology.org/2022.lrec-1.118/">Stella Verkijk and Piek T.J.M. Vossen. <i>Efficiently and Thoroughly Anonymizing Transformer Language Model for Dutch Electronic Health Records: A Two-Step Method.</i> Proceedings of the 13th Language Resources and Evaluation Conference, Marseille, June, 2022.
                            </a>
                        </motion.li>
                        <motion.li whileHover={{ scale: 1.1 }}> 
                            <a href="https://www.clinjournal.org/clinj/article/view/132">Verkijk S, and Vossen PJTM, “MedRoBERTa.nl: A Language Model for Dutch Electronic Health Records,” <i>Computational Linguistics in the Netherlands Journal, 11</i>, 141–159, 2021.
                            </a> 
                        </motion.li>
                        <motion.li whileHover={{ scale:1.1 }}>
                            <a href="https://pubmed.ncbi.nlm.nih.gov/35856286/"> van der Veen S, van der Leeden M, Geleijn E, Vossen P, Meskers CGM, Widdershoven GAM. Artificial intelligence to improve rehabilitation care for children with developmental conditions: Some ethical considerations. <i>Dev Med Child Neurol</i>. 2023 Jan;65(1):12-13. doi: 10.1111/dmcn.15348. Epub 2022 Jul 20. PMID: 35856286
                            </a>
                        </motion.li>
                    </ul>
                </div>
                <div className="subpage">
                    <h3>Project Code</h3>

                    <ul>
                        <li> <b>Pilot-project:</b> <a href="https://github.com/cltl/a-proof">https://github.com/cltl/a-proof</a> </li>
                        <li> <b>ZonMW project:</b> <a href="https://github.com/cltl/a-proof-zonmw">https://github.com/cltl/a-proof-zonmw</a> </li>
                        <ul>
                            <li> <b>GitHub:</b> <a href="https://github.com/cltl/aproof-icf-classifier">https://github.com/cltl/aproof-icf-classifier</a> </li>
                            <li> <b>Docker:</b> <a href="https://hub.docker.com/r/piekvossen/a-proof-icf-classifier">https://hub.docker.com/r/piekvossen/a-proof-icf-classifier</a> </li>
                        </ul>
                    </ul>
                </div>
                <br></br>
                <p></p>
                <br></br>
            </motion.div>
        </div>
    )
}
