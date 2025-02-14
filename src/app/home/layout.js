export default function Layout({ children }) {
    return (


        <div className="pt-20 text-center space-y-4">
            <h1 className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
                Steven Godinez
            </h1>
            <p className="text-xl text-gray-400">Software Engineer</p>





            <div className="max-w-xl mx-auto">
                <div className="relative rounded-lg bg-slate-900 p-2">
                    <div className="relative flex text-center">
                        <div className="flex pl-3.5 pt-3">
                            <svg viewBox="0 0 24 24" fill="currentColor" className="-ml-0.5 mr-1.5 h-3 w-3 text-red-500/20">
                                <circle r="12" cy="12" cx="12"></circle>
                            </svg>
                            <svg viewBox="0 0 24 24" fill="currentColor" className="-ml-0.75 mr-1.5 h-3 w-3 text-blue-500/20">
                                <circle r="12" cy="12" cx="12"></circle>
                            </svg>
                            <svg viewBox="0 0 24 24" fill="currentColor" className="-ml-0.75 mr-1.5 h-3 w-3 text-pink-500/20">
                                <circle r="12" cy="12" cx="12"></circle>
                            </svg>
                        </div>
                        <span className="absolute inset-x-0 top-2 text-xs text-slate-500">profile.json</span>
                    </div>
                    <div className="mt-5 space-y-1.5 px-5 pb-10 text-left font-mono text-xs">
                        <p className="text-slate-400">{`{`}</p>
                        <p className="text-pink-400">
                            "info": <span className="text-white">{`{`}</span>
                        </p>
                        <p className="ml-8">
                            <span className="text-pink-400">"name":</span>
                            <span className="text-blue-300"> "Steven Godinez"</span><span
                            className="text-slate-400">,</span>
                        </p>
                        <p className="ml-8">
                            <span className="text-pink-400">"email":</span>
                            <span
                                className="text-blue-300"> "steven.godin.42@gmail.com"</span><span
                            className="text-slate-400">,</span>
                        </p>
                        <p className="ml-8">
                            <span className="text-pink-400">"university":</span>
                            <span className="text-blue-300"> "Northeastern University"</span><span
                            className="text-slate-400">,</span>
                        </p>


                        <p className="ml-8">
                            <span className="text-pink-400">"Languages":</span>
                            <span className="text-slate-400"> [</span>
                        </p>
                        <p className="ml-12">
                            <span className="text-blue-300">"Java"</span><span
                            className="text-slate-400">,</span>
                        </p>
                        <p className="ml-12">
                            <span className="text-blue-300">"Python"</span><span
                            className="text-slate-400">,</span>
                        </p>
                        <p className="ml-12">
                            <span className="text-blue-300">"JavaScript"</span><span
                            className="text-slate-400">,</span>
                        </p>
                        <p className="ml-12">
                            <span className="text-blue-300">"HTML"</span>
                        </p>
                        <p className="ml-12">
                            <span className="text-blue-300">"Tailwind"</span>
                        </p>
                        <p className="ml-8 text-slate-400">],</p>


                        <p className="ml-8">
                            <span className="text-pink-400">"Frameworks-and-tech":</span>
                            <span className="text-slate-400"> [</span>
                        </p>
                        <p className="ml-12">
                            <span className="text-blue-300">"Next.js"</span><span
                            className="text-slate-400">,</span>
                        </p>
                        <p className="ml-12">
                            <span className="text-blue-300">"Flask"</span><span
                            className="text-slate-400">,</span>
                        </p>
                        <p className="ml-12">
                            <span className="text-blue-300">"Git"</span><span
                            className="text-slate-400">,</span>
                        </p>
                        <p className="ml-12">
                            <span className="text-blue-300">"PostgreSQL"</span><span
                            className="text-slate-400">,</span>
                        </p>
                        <p className="ml-12">
                            <span className="text-blue-300">"Vercel"</span><span
                            className="text-slate-400">,</span>
                        </p>
                        <p className="ml-8 text-slate-400">],</p>


                        <p className="ml-8">
                            <span className="text-pink-400">"AI":</span>
                            <span className="text-slate-400"> [</span>
                        </p>
                        <p className="ml-12">
                            <span className="text-blue-300">"OpenAI Gymnasium"</span><span
                            className="text-slate-400">,</span>
                        </p>
                        <p className="ml-12">
                            <span className="text-blue-300">"numpy"</span><span
                            className="text-slate-400">,</span>
                        </p>
                        <p className="ml-8 text-slate-400">],</p>


                        <p className="ml-8">
                            <span className="text-pink-400">"Cybersecurity":</span>
                            <span className="text-slate-400"> [</span>
                        </p>
                        <p className="ml-12">
                            <span className="text-blue-300">"Linux"</span><span
                            className="text-slate-400">,</span>
                        </p>
                        <p className="ml-12">
                            <span className="text-blue-300">"ParrotOS"</span><span
                            className="text-slate-400">,</span>
                        </p>
                        <p className="ml-12">
                            <span className="text-blue-300">"Malware"</span><span
                            className="text-slate-400">,</span>
                        </p>
                        <p className="ml-8 text-slate-400">],</p>


                        <p className="ml-8">
                            <span className="text-pink-400">"Roles":</span>
                            <span className="text-slate-400"> [</span>
                        </p>
                        <p className="ml-12">
                            <span
                                className="text-blue-300">"Contract Software Engineer"</span><span
                            className="text-slate-400">,</span>
                        </p>
                        <p className="ml-12">
                            <span
                                className="text-blue-300">"Software Developer"</span><span
                            className="text-slate-400">,</span>
                        </p>
                        <p className="ml-12">
                            <span className="text-blue-300">"Open source contributor"</span><span
                            className="text-slate-400">,</span>
                        </p>

                        <p className="ml-8 text-slate-400">]</p>
                        <p className="ml-4 text-slate-400">{`}`}</p>
                        <p className="text-slate-400">{`}`}</p>
                    </div>
                </div>
            </div>

            {/* kids go here */}

            this is me
        </div>
    )
}