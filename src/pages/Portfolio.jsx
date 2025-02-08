 import './Portfolio.css';

export default function Portfolio() {
    const portfolioItems = [
        {
            image: "https://i.postimg.cc/Y2v8zxGw/Weather-Dashboard.png",
            website: "https://weather-dashboard-gkyb.onrender.com/",
            github: "https://github.com/vincentt94/Weather-Dashboard",
            title: "Project 1"
        },
        {
            image: "https://i.postimg.cc/Y2v8zxGw/Weather-Dashboard.png",
            website: "https://weather-dashboard-gkyb.onrender.com/",
            github: "https://github.com/vincentt94/Weather-Dashboard",
            title: "Project 2"
        },
        {
            image: "https://i.postimg.cc/Y2v8zxGw/Weather-Dashboard.png",
            website: "https://weather-dashboard-gkyb.onrender.com/",
            github: "https://github.com/vincentt94/Weather-Dashboard",
            title: "Project 3"
        },
        {
            image: "https://i.postimg.cc/Y2v8zxGw/Weather-Dashboard.png",
            website: "https://weather-dashboard-gkyb.onrender.com/",
            github: "https://github.com/vincentt94/Weather-Dashboard",
            title: "Project 4"
        },
        {
            image: "https://i.postimg.cc/Y2v8zxGw/Weather-Dashboard.png",
            website: "https://weather-dashboard-gkyb.onrender.com/",
            github: "https://github.com/vincentt94/Weather-Dashboard",
            title: "Project 5"
        },
        {
            image: "https://i.postimg.cc/Y2v8zxGw/Weather-Dashboard.png",
            website: "https://weather-dashboard-gkyb.onrender.com/",
            github: "https://github.com/vincentt94/Weather-Dashboard",
            title: "Project 6"
        },

    ];
    return (
        <div className="container mt-5">
            <p className= "text-center "> Please click an image to view the application </p>
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
                <p className= "text-center">DISCLAIMER I currently only have 1 deployed application so I modeled the same image 6 times for future updates to this page.</p>
            </div>

        </div>
    );
}