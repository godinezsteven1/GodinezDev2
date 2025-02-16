export default function Layout({ children }) {
    return (
        <div
            className="min-h-screen bg-transparent text-gray-200 px-6"> {/* do not change transperance  */}
            <div className="mb-8">
                {children}
            </div>

            <div className="max-w-7xl mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

                    <div className="max-w-xl bg-slate-900 rounded-lg p-4 shadow-lg">
                        <div
                            className="relative flex justify-between items-center px-4 py-2 bg-slate-800 rounded-t-lg">
                            <div className="flex space-x-2">
                                <span className="w-3 h-3 bg-red-500 rounded-full"></span>
                                <span className="w-3 h-3 bg-yellow-500 rounded-full"></span>
                                <span className="w-3 h-3 bg-green-500 rounded-full"></span>
                            </div>
                            <span className="text-xs text-slate-500">profile.json</span>
                        </div>

                        <div className="mt-4 px-5 pb-6 font-mono text-sm text-gray-300">
                            <p className="text-slate-400">{`{`}</p>
                            <p className="text-pink-400">
                                "info": <span className="text-white">{`{`}</span>
                            </p>
                            <p className="ml-8"><span className="text-pink-400">"email":</span>
                                <span className="text-blue-300"> "steven.godin.42@gmail.com"</span>,
                            </p>
                            <p className="ml-8"><span className="text-pink-400">"university":</span>
                                <span className="text-blue-300"> "Northeastern University"</span>,
                            </p>

                            <p className="ml-8"><span className="text-pink-400">"Languages":</span>
                                <span className="text-slate-400"> [</span></p>
                            <p className="ml-12"><span className="text-blue-300">"Java"</span>,</p>
                            <p className="ml-12"><span className="text-blue-300">"Python"</span>,
                            </p>
                            <p className="ml-12"><span className="text-blue-300">"JavaScript"</span>,
                            </p>
                            <p className="ml-12"><span className="text-blue-300">"HTML"</span>,</p>
                            <p className="ml-12"><span className="text-blue-300">"Tailwind"</span>
                            </p>
                            <p className="ml-8 text-slate-400">],</p>

                            <p className="ml-8"><span
                                className="text-pink-400">"Frameworks-and-tech":</span> <span
                                className="text-slate-400"> [</span></p>
                            <p className="ml-12"><span className="text-blue-300">"Next.js"</span>,
                            </p>
                            <p className="ml-12"><span className="text-blue-300">"Flask"</span>,</p>
                            <p className="ml-12"><span className="text-blue-300">"Git"</span>,</p>
                            <p className="ml-12"><span className="text-blue-300">"PostgreSQL"</span>,
                            </p>
                            <p className="ml-12"><span className="text-blue-300">"Vercel"</span></p>
                            <p className="ml-8 text-slate-400">],</p>
                            {/*here */}

                            <p className="ml-8"><span
                                className="text-pink-400">"AI":</span> <span
                                className="text-slate-400"> [</span></p>
                            <p className="ml-12"><span className="text-blue-300">"numpy"</span>,
                            </p>
                            <p className="ml-12"><span
                                className="text-blue-300">"OpenAI gymnasium"</span></p>
                            <p className="ml-8 text-slate-400">],</p>

                            <p className="ml-8"><span
                                className="text-pink-400">"Cybersecurity":</span> <span
                                className="text-slate-400"> [</span></p>
                            <p className="ml-12"><span className="text-blue-300">"Linux"</span>,</p>
                            <p className="ml-12"><span className="text-blue-300">"ParrotOS"</span>,</p>
                            <p className="ml-12"><span className="text-blue-300">"Malware"</span></p>
                            <p className="ml-8 text-slate-400">]</p>
                            <p className="text-slate-400">{`}`}</p>
                        </div>
                    </div>

                    <div className="max-w-xl bg-slate-900 rounded-lg p-4 shadow-lg">
                        <div
                            className="relative flex justify-between items-center px-4 py-2 bg-slate-800 rounded-t-lg">
                            <div className="flex space-x-2">
                                <span className="w-3 h-3 bg-red-500 rounded-full"></span>
                                <span className="w-3 h-3 bg-yellow-500 rounded-full"></span>
                                <span className="w-3 h-3 bg-green-500 rounded-full"></span>
                            </div>
                            <span className="text-xs text-slate-500">profile.json</span>
                        </div>

                        <div className="mt-4 px-5 pb-6 font-mono text-sm text-gray-300">
                            <p className="text-slate-400">{`{`}</p>
                            <p className="text-pink-400">
                                "bio": <span className="text-white">{`{`}</span>
                            </p>
                            <p className="ml-8"><span className="text-pink-400">"hobbies":</span>
                                <span className="text-slate-400"> [</span></p>
                            <p className="ml-12"><span
                                className="text-blue-300">"Motorcycles"</span>,</p>
                            <p className="ml-12"><span
                                className="text-blue-300">"Powerlifting"</span>,</p>
                            <p className="ml-12"><span
                                className="text-blue-300">"Anime"</span>,</p>
                            <p className="ml-12"><span
                                className="text-blue-300">"Fishing"</span>,</p>
                            <p className="ml-12"><span
                                className="text-blue-300">"Arduino"</span>,</p>
                            <p className="ml-12"><span
                                className="text-blue-300">"Electronic Tinkering"</span>,</p>
                            <p className="ml-12"><span
                                className="text-blue-300">"Ethical Hacking"</span>,</p>
                            <p className="ml-12"><span
                                className="text-blue-300">"3D Design"</span>,</p>
                            <p className="ml-12"><span
                                className="text-blue-300">"Algortithmic Reasoning"</span>,</p>
                            <p className="ml-8 text-slate-400">],</p>

                            <p className="ml-8"><span className="text-pink-400">"Current-Projects":</span>
                                <span className="text-slate-400"> [</span></p>
                            <p className="ml-12"><span className="text-blue-300">"AI-SignLanguage to text"</span>,
                            </p>
                            <p className="ml-12"><span className="text-blue-300">"InTouchBHl Web + Ticket Management"</span>,
                            </p>
                            <p className="ml-8 text-slate-400">]</p>

                            <p className="ml-8"><span className="text-pink-400">"Roles":</span>
                                <span className="text-slate-400"> [</span></p>
                            <p className="ml-12"><span className="text-blue-300">"Contract Software Engineer"</span>,
                            </p>
                            <p className="ml-12"><span className="text-blue-300">"Software Developer"</span>,
                            </p>
                            <p className="ml-12"><span className="text-blue-300">"Open Source Contributor"</span>
                            </p>
                            <p className="ml-8 text-slate-400">]</p>

                            <p className="text-slate-400">{`}`}</p>
                        </div>
                    </div>

                </div>
            </div>
        </div>

    )
}