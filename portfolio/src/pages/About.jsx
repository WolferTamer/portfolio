import './About.css'
function About() {

    return (
        
        <div className="column">
            <div className="row">
                <div>
                    <h3>Background</h3>
                    <p>I grew up in New Zealand and grew up in Santa Barbara. My dad is from fake Britain. </p>
                </div>
                <div>
                    <h3>Education</h3>
                    <p>I studied in the computer science academy at SBHS, then moved to Los Pueblos for my last year. I have associate's from SBCC, about to get Bachelor's from CSUF</p>
                </div>
            </div>
            <div className="row">
                <div>
                    <h3>Skills</h3>
                    <p>HTML,CSS,JS,C,C++,Kotlin,Java,Swift,GitHub,XCode</p>
                </div>
                <div>
                    <h3>Interests</h3>
                    <p>D&D, Gaming, Programming, etc...</p>
                </div>
            </div>
            <a href="/CassinResume.pdf" download="CassinResume.pdf">
               Download my Resume 
            </a>
        </div>
    )
}

export default About