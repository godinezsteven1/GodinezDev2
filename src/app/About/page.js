export default function HomePage() {
    return (
        <div className="min-h-screen flex items-center justify-center bg-[#0d0d1a] text-gray-200 px-6">
            <div className="max-w-5xl w-full grid grid-cols-1 md:grid-cols-2 gap-8 items-center">

                {/* this is left  */}
                <div className="relative flex justify-center">
                    <div
                        className="w-64 h-64 sm:w-72 sm:h-72 rounded-lg border-2 border-purple-400 object-cover">
                        <img src="/static/about/image1.png" alt="Profile"
                             className="w-full h-full object-cover"/>
                    </div>
                </div>

                {/* this is right */}
                <div className="space-y-4">
                    <h1 className="text-5xl font-bold text-purple-400">Steven Godinez</h1>
                    <p className="text-xl text-gray-400">Software Engineer | AI Enthusiast</p>
                    <p className="text-lg text-gray-300">
                        Hi! I am a current Sophomore at <span className="text-purple-300">Northeastern University </span>
                        studying <span
                        className="text-purple-300"> Computer Science and Mathematics</span>. I have
                        a passion for
                        <span className="text-purple-300"> Artificial Intelligence</span>.
                        I am simultaneously pursuing my Master's degree in Artificial Intelligence
                        with a specialization in
                        <span className="text-purple-300"> Machine Learning</span>. All of my code
                        is
                        open source!
                    </p>
                </div>


                <div className="flex justify-end space-x-4 mt-4">
                    {/* GitHub Icon */}
                    <a href="https://github.com/godinezsteven1" target="_blank"
                       rel="noopener noreferrer">
                        <img
                            src="https://raw.githubusercontent.com/devicons/devicon/master/icons/github/github-original.svg"
                            height="70"
                            width="70"
                            alt="GitHub logo"
                            className="invert filter brightness-0"
                        />
                    </a>
                    {/* LinkedIn Icon */}
                    <a href="https://linkedin.com/in/godinezsteven" target="_blank"
                       rel="noopener noreferrer">
                        <img
                            src="https://raw.githubusercontent.com/devicons/devicon/master/icons/linkedin/linkedin-original.svg"
                            height="70"
                            width="70"
                            alt="LinkedIn logo"
                            className="hover:opacity-80 transition"
                        />
                    </a>
                    {/* I wish i had more social media*/}
                </div>







            </div>
        </div>
    );
}
