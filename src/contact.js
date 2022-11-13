import doctors from "./img/doctors.png"

export default function Contact() {
    return (
        <div>
            <img className="bg overlap" src={doctors} alt="dokters"></img>
            <div className="page">
                <h1>Contact</h1>
                <p className="large-font"><b>For questions, please contact:</b>&ensp; piek.vossen@vu.nl</p>
            </div>
        </div>
    )
}