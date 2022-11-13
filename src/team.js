import teamphoto from "./img/A-PROOF_team.png"
import doctors from "./img/doctors.png"

export default function Team() {
    return (
        <div>
            <img className="bg overlap" src={doctors} alt="dokters"></img>
            <div className="page">
                <div className="textcontainer">
                    <h1>The A-PROOF Core Team</h1>
                    <ul>
                        <li> Rehabilitation Medicine:</li>
                        <ul>
                            <li> Edwin Geleijn, Caroline Meskers, dr. Carel Meskers, dr. Marike van der Leeden</li>
                        </ul>
                        <li> VU Computational Linguistics and Text Mining Lab:</li>
                        <ul>
                            <li> prof.dr. Piek Vossen, Jenia Kim </li>
                        </ul>
                        <li> ICF: </li>
                        <ul>
                            <li>prof.dr. Guy Widdershoven, Sabina van der Veen MSc</li>
                        </ul>
                    </ul>

                    <h1>The A-PROOF Annotation Team</h1>
                    <ul>
                        <li> 6 students with (para)medical background: Caroline, Nienke, Joey, Quinten, Stella, Jasper
                        </li>
                    </ul>

                    <h1>Master Students Text Mining / Data Science</h1>
                    <ul>
                        <li> Stella, Quirine, Gian-Luca, Bruna, Ellemijn, Sharona, Enrico, Xiouqian, Leyla (under supervision of Marwam el Morabet/Jesse Aarden)
                        </li>
                    </ul>
                </div>
                <img className="smallimage" src={teamphoto} alt="team"></img>
            </div>
        </div>
    )
}