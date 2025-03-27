// import '../app.css';
import profilePic from "../assets/portfolio_image.jpg";

export default function Home() {
    return (
        <div className="container d-flex justify-content-center align-items-center mt-5">
            {/* About me section */}
            <div className="about-box">
                <h1 className="text-center text-primary">About Me</h1>
                <div className="text-center">
                    <img src={profilePic} alt="My Profile" className="profile-pic mb-3" width="150px" />
                </div>

                <p className="text-center">
                    I'm a 30-year-old dad of two, and for over 15 years, fitness and lifting have been a steady part of my life. 
                    The only times I’ve taken a break longer than a few days were right after my kids were born and even then, 
                    just for about a month each. The discipline, structure, and growth I’ve experienced through fitness have shaped 
                    how I approach everything else in life.
                </p>

                <p className="text-center">
                    When I started learning web development, I remember feeling completely overwhelmed. I was in awe of how much my mentors knew,
                     and it felt like the gap between where I was and where they were was out of reach. But then I realized it’s just like the 
                     early days of lifting. Progress takes time, consistency, and a willingness to show up, even when it’s tough. That mindset shift changed everything for me.
                </p>

                <p className="text-center">
                    Now, I see coding as another lifelong craft one where growth comes from showing up, solving problems, and celebrating the 
                    small wins along the way. I’m excited about where this journey is heading, and I’m always looking for ways to learn, 
                    collaborate, and build meaningful things.
                </p>
            </div>
        </div>
    );
}
