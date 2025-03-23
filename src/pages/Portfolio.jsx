 // import '../app.css';

export default function Portfolio() {
    const portfolioItems = [
        {
            image: "https://i.postimg.cc/j2Z4J4kn/image.png",
            website: "https://weather-dashboard-gkyb.onrender.com/",
            github: "https://github.com/vincentt94/Weather-Dashboard",
            title: "5 Day Weather Dashboard"
        },
        {
            image: "https://i.postimg.cc/sg8PsqF2/Nomad-Notes.png",
            website: "https://nomad-notebook.onrender.com/",
            github: "https://github.com/vincentt94/Nomad-Notebook",
            title: "Nomad Notes "
        },
        {
            image: "https://i.postimg.cc/tCj5vYHM/image.png",
            website: "https://book-search-engine-with-graphql.onrender.com/",
            github: "https://github.com/vincentt94/Book-Search-Engine-With-GraphQL",
            title: "Book Search Engine"
        },
        {
            image: "https://i.postimg.cc/pdnL3Vfm/image.png",
            website: "https://candidatesearchbygithub.netlify.app/",
            github: "https://github.com/vincentt94/Candidate-Search-App",
            title: "Github Candidate Search"
        },
        {
            image: "https://i.postimg.cc/vmLZGqKy/image.png",
            website: "https://vincentt94.github.io/Money-Maker/",
            github: "https://github.com/vincentt94/Money-Maker",
            title: "Money Maker Game"
        },
        {
            image: "https://i.postimg.cc/bNbSSTDG/image.png",
            website: "https://slurp-society.onrender.com",
            github: "https://github.com/ant-codes-42/slurp-society",
            title: "Slurp Society: Mock Restaurant Reservation App"
        },

    ];
    return (
        <div className="container mt-5">
            <div className="row">
                {portfolioItems.map((item, index) => (
                    <div key={index} className="col-md-4 mb-4">
                        <div className="card portfolio-item">
                            <a href={item.website} target="_blank" >
                                <img src={item.image} alt={item.title} className="card-img-top img-fluid portfolio-img" />
                            </a>
                            <div className="card-body text-center">
                                <h5 className="card-title">{item.title}</h5>
                                <a href={item.github} target="_blank"  className="btn btn-dark">
                                    View GitHub Repo
                                </a>
                            </div>
                        </div>
                    </div>
                ))}
                <p className= "text-center"> Please click above to view a deployed project.</p>
            </div>

        </div>
    );
}