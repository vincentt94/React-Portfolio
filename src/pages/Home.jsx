// import '../app.css';
import profilePic from "../assets/portfolio_image.jpg";

export default function Home() {
    return (
        <div className="container d-flex justify-content-center align-items-center mt-5">
            {/* About me section*/}
            <div className="about-box">
                <h1 className="text-center text-primary">About Me</h1>
                <div className="text-center">
                    <img src={profilePic} alt="My Profile" className="profile-pic mb-3" width="150px" />
                </div>
                <p className="text-center">
  My name is Vincent Thao, and I recently completed a Coding Bootcamp through the University of Minnesota. As an aspiring Software Developer, I am passionate about continuous learning and growth. 
  This journey into tech has been both challenging and incredibly rewarding. Just a few months ago, I had little knowledge of software development—now, 
  I'm able to build full-stack applications, (although this is a single page React application) within a reasonable amoun of time. The progress I've made continues to inspire and motivate me.
</p>
<p className="text-center">
  Outside of coding, I enjoy staying active—especially lifting weights at the gym. I'm also a proud father of two wonderful children, a daughter and a son. I'm excited about the opportunities ahead and look forward to where this journey in software development will take me.
</p>

            </div>
        </div>
    );
}
