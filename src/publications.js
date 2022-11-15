import doctors from "./img/doctors.png"

export default function Publications() {
    return (
        <div>
            <img className="bg overlap" src={doctors} alt="dokters"></img>
            <div className="page">
                <h1>Publications</h1>
                <p><i>Click on a publication to view it.</i></p>
                <div className="textcontainer">
                    <ul className="spacedul">
                        <li> <a href="https://pubmed.ncbi.nlm.nih.gov/35040376/"> Meskers CGM, van der Veen S, Kim J, Meskers CJW, Smit QTS, Verkijk S, Geleijn E, Widdershoven GAM, Vossen PTJM, van der Leeden M. <i>Automated recognition of functioning, activity and participation in COVID-19 from electronic patient records by natural language processing: a proof- of- concept. </i> Ann Med. 2022 Dec;54(1):235-243 doi: 10.1080/07853890.2021.2025418. PMID: 35040376; PMCID: PMC8774059. </a></li>
                        <li> <a href="https://aclanthology.org/2022.lrec-1.488/">Jenia Kim, Stella Verkijk, Edwin Geleijn, Marike van der Leeden, Carel Meskers, Caroline Meskers, Sabina van der Veen, Piek T.J.M. Vossen, and Guy Widdershoven. <i>Modeling Dutch Medical Texts for Detecting Functional Categories and Levels of COVID-19 Patients</i>. Proceedings of the Language Resources and Evaluation Conference (LREC), 2022, Marseille.</a> </li>
                        <li> <a href="https://www.clinjournal.org/clinj/article/view/132">Verkijk S, and Vossen PJTM, “MedRoBERTa.nl: A Language Model for Dutch Electronic Health Records,” <i>Computational Linguistics in the Netherlands Journal, 11</i>, 141–159, 2021. Retrieved from https://www.clinjournal.org/clinj/article/view/132</a> </li>
                        <li><a href="https://aclanthology.org/2022.lrec-1.118/">Stella Verkijk and Piek T.J.M. Vossen. <i>Efficiently and Thoroughly Anonymizing Transformer Language Model for Dutch Electronic Health Records: A Two-Step Method.</i> Proceedings of the 13th Language Resources and Evaluation Conference, Marseille, June, 2022.</a></li>
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
            </div>
        </div>
    )
}