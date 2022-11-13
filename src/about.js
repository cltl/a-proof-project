import doctors from "./img/doctors.png"
import schema from "./img/A-PROOF.mp4"

export default function About() {
    return (
        <div>
            <img className="bg overlap" src={doctors} alt="dokters"></img>
            <div className="page">
                <h1>Welcome to A - PROOF</h1>
                <p style={{ fontFamily: "PublicSans-Light, sans-serif", fontSize: "27px" }}><b>A</b>utomated <b>P</b>rediction of post-COVID <b>R</b>ec<b>O</b>very <b>O</b>f <b>F</b>unctioning</p>
                <hr style={{ color: "#228c22" }}></hr>
                <p className="aboutp">A-PROOF is a collaboration of medical and AI researchers to develop technology that can automatically monitor
                    the functioning of people in need of health care.</p>
                <br></br>
                <video className="aboutvideo" width="640" height="480" autoPlay muted loop>
                    <source src={schema} type="video/mp4"></source>
                    Your browser does not support the video tag.
                </video>
                <div className="subpage">
                    <h3>PROJECT CODE</h3>

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
                <p className="large-font"><b>For questions, please contact:</b>&ensp; piek.vossen@vu.nl</p>
                <br></br>
            </div>
        </div>

    )
}