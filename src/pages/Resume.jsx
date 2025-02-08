
export default function Resume() {
    return (
        <div className="container mt-5">

            <h1 className="text-center text-primary"> Resume</h1>
            {/*Resume Download Link */}
            <div className="text-center mt-4">
                {   /*  Code is commented out for now / Need updownload Resume into PDF first
                <a href = "(file location)" download className= "btn btn-primary btn-lg"> 
                Download Resume as PDF here. 
                </a>
                */}

                <a href="../../public/Resume.pdf" download className="btn btn-lg text-primary">
                    Download Resume as PDF.
                </a>


            </div>

            {/* Section for Proficiencies */}
            <div className="mt-5">
                <h2 className="text-center"> Proficiencies</h2>
                <ul className="list-group list-group-flush proficiencies">
                    <li className="list-group item text-center"> HTML</li>
                    <li className="list-group item text-center">CSS</li>
                    <li className="list-group item text-center">JavaScript</li>
                    <li className="list-group item text-center">Node.Js</li>
                    <li className="list-group item text-center">Typescript</li>
                    <li className="list-group item text-center"> PostgreSQL</li>
                </ul>

            </div>
        </div>
    );
}