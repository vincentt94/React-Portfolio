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
                    My name is Vincent.  I'm currently in a Software Development Bootcamp through the Universiy of Minnesota.
                    I find coding very interesting to say the least.  I have a two year old daughter and a one year old son. 
                    When I have free time I enjoy going to the gym.  I find it very soothing and relaxing and it's not a tedious task for me.
                    I wouldn't consider it a hobby but rather a part of my lifestyle.  I'm not too particular with my diet and because of that
                    I do indulge in eating whatever I feel like.   I'm enjoying my time learning the process of coding.  This page 
                    will contain many kinks that will be fixed in future updates!
                </p>
            </div>
        </div>
    );
}
