 // import '../app.css';

 import { useState } from "react";

export default function Portfolio() {
    const portfolioItems = [
        {
            image: "https://i.postimg.cc/j2Z4J4kn/image.png",
            website: "https://weather-dashboard-gkyb.onrender.com/",
            github: "https://github.com/vincentt94/Weather-Dashboard",
            title: "5 Day Weather Dashboard",
            description: "This weather dashboard application utilizes the 5-day forecast API to display weather information for a user specified city. Built with provided starter code, the project focuses on understanding how servers and APIs are structured and implemented. Users can enter a city name to instantly view its 5-day weather forecast displayed in a clean, browser friendly format."
        },
        {
            image: "https://i.postimg.cc/sg8PsqF2/Nomad-Notes.png",
            website: "https://nomad-notebook.onrender.com/",
            github: "https://github.com/vincentt94/Nomad-Notebook",
            title: "Nomad Notes ",
            description: "As a final send-off project for my bootcamp, this was another valuable collaborative experience. The goal was to create a travel journal app where users could document their experiences and attach images. Built using the MERN stack, my primary responsibility was implementing user authentication for login and signup functionality. With growing confidence and experience, I was able to complete that quickly and later contributed to additional features, including image upload capabilities using preset stock images."

        },
        {
            image: "https://i.postimg.cc/tCj5vYHM/image.png",
            website: "https://book-search-engine-with-graphql.onrender.com/",
            github: "https://github.com/vincentt94/Book-Search-Engine-With-GraphQL",
            title: "Book Search Engine",
            description: "This project focused on refactoring a fully functional Google Books API search engine from a traditional RESTful API to a GraphQL API powered by Apollo Server. Built using the MERN stack, the goal was to modernize the backend architecture while preserving core functionality. I implemented an Apollo Server to handle GraphQL queries and mutations for data retrieval and updates, replaced the existing RESTful endpoints, and adapted the authentication middleware to function within the GraphQL context. Additionally, I configured an Apollo Provider on the frontend to facilitate communication with the GraphQL server, and deployed the final application to Render using a MongoDB database."

        },
        {
            image: "https://i.postimg.cc/pdnL3Vfm/image.png",
            website: "https://candidatesearchbygithub.netlify.app/",
            github: "https://github.com/vincentt94/Candidate-Search-App",
            title: "Github Candidate Search",
            description: "This application utilizes the GitHub API to power a mock candidate search experience. Built entirely from scratch, it displays a randomly selected developer profile on the homepage. Users can either save or skip a candidate based on their own criteria. Skipping triggers the display of a new, randomly generated candidate. A built-in search bar allows users to actively search for potential candidates as well. Saved profiles are accessible via the 'Saved Candidates' button, where users can view or remove previously saved candidates."

        },
        {
            image: "https://i.postimg.cc/vmLZGqKy/image.png",
            website: "https://vincentt94.github.io/Money-Maker/",
            github: "https://github.com/vincentt94/Money-Maker",
            title: "Money Maker Game",
            description: "This project marked my first experience working in a collaborative group setting. We built a simple, interactive front-end game where users aim to generate as much virtual currency as possible. As users accumulate more money, they can purchase upgrades to boost their earnings. It was a fun and engaging project that introduced key concepts like client-side storage, and served as a great introduction to team based development."

        },
        {
            image: "https://i.postimg.cc/bNbSSTDG/image.png",
            website: "https://slurp-society.onrender.com",
            github: "https://github.com/ant-codes-42/slurp-society",
            title: "Slurp Society: Mock Restaurant Reservation App",
            description: "While this app may currently be inactive due to database hosting issues, it was my second project during bootcamp and my first full-stack collaborative experience. Our team built a mock restaurant reservation application using Node.js, Express.js, and React to create a RESTful API. We used PostgreSQL and Sequelize ORM for the database. My primary role focused on implementing user authentication using JWTs for signup and login functionality. I also integrated the Resend API to send confirmation emails to users upon successful registration and reservation. This project was a great opportunity to deepen my understanding of backend development and teamwork in a full-stack environment."

        },
        {
            image: "https://i.postimg.cc/xCcGTtG1/image.png",
            website: "https://wutdonow.onrender.com/",
            github: "https://github.com/vincentt94/wutdonow",
            title: "wutdonow?",
            description: "This was my first solo project after completing coding bootcamp, heavily inspired by the concept behind Nomad Notes. Built using the MERN stack, the application allows users to take notes and upload multiple images to help visualize and organize their thoughts. I personally use it as a to-do checklist to track ongoing tasks and ideas for future projects. While the core functionality is solid, there are a few UI elements I plan to refine, so you can expect minor improvements and feature upgrades over time."
        },

    ];

    const [selectedItem, setSelectedItem] = useState(null);

    return (
        <div className="container mt-5">
            <div className="row">
                {portfolioItems.map((item, index) => (
                    <div key={index} className="col-md-4 mb-4">
                        <div className="card portfolio-item">
                            <a href={item.website} target="_blank" rel="noreferrer">
                                <img src={item.image} alt={item.title} className="card-img-top img-fluid portfolio-img" />
                            </a>
                            <div className="card-body text-center">
                                <h5 className="card-title">{item.title}</h5>
                                <a href={item.github} target="_blank" rel="noreferrer" className="btn btn-dark mb-2">
                                    View GitHub Repo
                                </a>
                                <br />
                                <button
                                    className="btn btn-outline-primary"
                                    onClick={() => setSelectedItem(item)}
                                >
                                    Description
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
                <p className="text-center">Please click above to view a deployed project.</p>
            </div>

            {/* Modal */}
            {selectedItem && (
                <div className="modal-overlay" onClick={() => setSelectedItem(null)}>
                    <div className="custom-modal" onClick={e => e.stopPropagation()}>
                        <button className="close-btn" onClick={() => setSelectedItem(null)}>×</button>
                        <h4>{selectedItem.title}</h4>
                        <p>{selectedItem.description}</p>
                    </div>
                </div>
            )}
        </div>
    );
}
