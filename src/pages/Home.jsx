import './Home.css';
import profilePic from "../assets/portfolio_image.jpg";

export default function Home() {
    return (
        <div className="container d-flex justify-content-center align-items-center mt-5">
            {/* About me section*/}
            <div className="p-4 shadow-lg about-box">
                <h1 className="text-center text-primary">About Me</h1>
                <div className="text-center">
                    <img src={profilePic} alt="My Profile" className="profile-pic mb-3" width="150px" />
                </div>
                <p className="text-center">
                    Lets update this main page ! Need to update my about me section! 
                </p>
            </div>
        </div>
    );
}
