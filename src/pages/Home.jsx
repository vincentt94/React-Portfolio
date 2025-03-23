import '../app.css';
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
                   My name is Vincent Thao.  I recently graduated from a Coding Bootcamp through the University of Minnesota.  As an aspiring Software Developer,
                   I am constantly learning and growing.  I am thoroughly enjoying this journey.  I have found these past few months very challenging,
                   yet so rewarding at the same time.  Just a few months ago, I knew nothing about software development.  Now, I can build a single-page application (along with many other Full-Stack applciations)
                   in just a week, which amazes me.  
                </p>
                <p className="text-center">
                    In my free time I enjoy doing various activities.  My favorite pasttime would probably be going to the gym and lifting weights.  I have two wonderful children,
                    a daughter and a son.   I am very excited for whatever endeavors the future may hold. 
                </p>
            </div>
        </div>
    );
}
