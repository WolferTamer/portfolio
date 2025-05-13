import profilepic from '/squareprofile.jpeg'
import './Home.css'

function Home() {

    return (
        <div className="flexbox">
            <img src={profilepic} className="profile" alt="Profile Image Of Caleb Cassin"/>
            <div className="">
                <h2 className="text-left">
                    Caleb Cassin
                </h2>
                <h3 className="text-left">
                    About Me
                </h3>
                <p className="text-left w-20">
                    I am a CalState Fullerton graduate with a Bachelor's in Computer Science. I'm focusing on fullstack and backend web development at the moment, with my specialties in Node.js and React. That being said, I'm familiar with most modern languages and have work on anything from mobile to servers.
                </p>
            </div>
        </div>
    )
}

export default Home