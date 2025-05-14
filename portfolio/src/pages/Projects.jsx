function Projects() {
    document.title="Caleb - Projects"
    return (<div className="projects-flex">
        <div>
            <h2><a href="nextnest">NextNest</a></h2>
            <p>Built using Node.Js and React, NextNest seeks to improve the process of finding a new place to move to. The main features I currently have developed are:</p>
            <ul>
                <li>Comparing two cities, with their differences highlighted in red and green</li>
                <li>Filtering and searching for cities through various traits</li>
                <li>Answering quesitons about your preferences to get recommendations on what cities fit your needs</li>
                <li>Account creation and configuration</li>
            </ul>
            <p>I faced a lot of challenges as I developed this on my own. A major one was time management. I had to completely organize, design, develop, and test the project by myself, and that easily got overwhelming. I learned a lot about task organization and self management through this project.</p>
            <p>This project was selected to be a finalist at the CSUF ECS Innovation Expo. Although I didn't win, it was an amazing experience and honor to be able to display NextNest there.</p>
            <p>There is still a lot of work to be done on this project, features such as users being able to save cities to their profile and quality of life improvements like an expanded database are going to be added in the near future.</p>
        </div>
        <div>
            <h2><a href="colorpalette">Color Palette</a></h2>
            <p>This simple web app is built only using React. A common problem for artists is when they find a color palette they really like, but it's stylized as a picture. This makes it look appealing and better demonstrates its use, but is much harder to actually implement in any drawing program.
                 To help with this issue, this website allows you to make and move around grids to match the colors on an image of a color palette. It then lets you download all of the colors as a FireAlpaca palette file.</p>
            <p>The main issue I ran into for this project was the logic of being able to configure the grids. While it seems simple, the ability to add a custom amount of rows and columns to the grid makes it very difficult to be able to move that grid without it exiting the image bounds. Eventually I figured out the math and the final product is what you can see.</p>
            <p>I hope to improve on this project in the future. First, making it look better and control more intuitively. Then I'll allow users to download the output file in multiple formats, meaning it won't be exclusive to FireAlpaca users.</p>
        </div>
    </div>
    
)
}

export default Projects