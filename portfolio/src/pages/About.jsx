import './About.css'
function About() {
    document.title="Caleb - About"
    return (
        
        <div className="column">
            <div className="row">
                <div>
                    <h3>Background</h3>
                    <p>First born in New Zealand, I moved to California when I was 5. Since middle school I've been learning how to program, starting with Java before moving on to more diverse languages. I eventually took up an internship at Novacoast where I worked on mobile applications and some web development.</p>
                </div>
                <div>
                    <h3>Education</h3>
                    <p>I studied in the Computer Science Academy at Santa Barabara High School before transfering to Dos Pueblos Senior High to graduate. I spent three years at Santa Barbara City College earning an Associate's Degree in Computer science before transfering to CalState Fullerton where I am set to graduate by the end of May.</p>
                </div>
            </div>
            <div className="row">
                <div>
                    <h3>Skills</h3>
                    <p>I can handle just about any language thrown at me, but my current specialty is in Web Development. Node.js is my framework of choice along with React for front end work. I also have used some Python/Flask and PHP for web. I also have extensive experience in both Kotlin and Swift for Android and iOS development respectively. I'm very familiar with GitHub and routinely help with issues regarding merge conflicts and lost work.</p>
                </div>
                <div>
                    <h3>Interests</h3>
                    <p>I've recently been keeping up on the latest improvements in AI technology. Outside of programming I have an interest in Dungeons and Dragons and video editing.</p>
                </div>
            </div>
            <a href="/CassinResume.pdf" download="CassinResume.pdf">
               Download my Resume 
            </a>
        </div>
    )
}

export default About