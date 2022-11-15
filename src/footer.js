import GitLogo from "./img/GitHub-Mark-32px.png"

export default function Footer() {
    return (
        <div className="footer">
            <a href="https://github.com/cltl/a-proof-project/">
                <img style={{width:"25px"}}src={GitLogo} alt="gitlogo"></img>
                &ensp; &ensp; View this website on GitHub
            </a>
        </div>
    );
}