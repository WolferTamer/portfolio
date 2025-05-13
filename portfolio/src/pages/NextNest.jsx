import home from '/nextnesthome.png'
import compare from '/nextnestcompare.png'
import question from '/nextnestquestion.png'
import './Projects.css'

function NextNest() {
    return (<div className="project-page">
        <h1>NextNest</h1>
        <a href="https://next-nest.net/" target="_blank">next-nest.net</a>
        <p>NextNest is a Node.js/React web app that aims to give people recommendations on where to move to.</p>
        <img src={home} alt="Home page of NextNest"/>
        <p>The Home Page shows a list of every city we have in our database. You can search and filter through the entries to find cities that you like.</p>
        <img src={compare} alt="Page where two cities are compared to each other on Next Nest"/>
        <p>The Compare Page allows users to directly look at the differences between each city, with major differences highlighted in red and green.</p>
        <img src={question} alt="A multiple choice question on Next Nest"/>
        <p>You're also able to answer questions about what traits you like in different cities, ultimately resulting in four recommendations on cities that best fit what you want.</p>
    </div>)
}

export default NextNest