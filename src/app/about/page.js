export default function HomePage() {
    return (
        <div className="min-h-screen flex items-center justify-center bg-[#0d0d1a] text-gray-200 px-6">
            <div className="max-w-5xl w-full grid grid-cols-1 md:grid-cols-2 gap-8 items-center">

                {/* this is left  */}
                <div className="relative flex justify-center">
                    <div className="relative w-64 h-64 border-4 border-purple-400 rounded-lg overflow-hidden shadow-lg">
                        <img src="../../../public/static/about/image1.png" alt="Profile" className="w-full h-full object-cover" />
                    </div>
                </div>

                {/* this is right */}
                <div className="space-y-4">
                    <h1 className="text-5xl font-bold text-purple-400">Steven Godinez</h1>
                    <p className="text-xl text-gray-400">Software Engineer | AI & Cybersecurity Enthusiast</p>
                    <p className="text-lg text-gray-300">
                        Hi! I am a current Sophomore at <span className="text-purple-300">Northeastern University </span>
                        studying <span className="text-purple-300"> Computer Science and Mathematics</span>. I have a passion for
                        <span className="text-purple-300"> Artificial Intelligence</span>.
                        I am simultaneously pursuing my Master's degree in Artificial Intelligence with a specialization in
                        <span className="text-purple-300"> Machine Learning</span>.
                    </p>
                    <p className="text-md text-gray-500">
                    ahh some quote could go here
                    </p>
                </div>

            </div>
        </div>
    );
}
