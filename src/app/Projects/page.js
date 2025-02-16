'use client'
import dynamic from 'next/dynamic'
import Link from "next/link";
import { Cabin } from "next/font/google";

const cabin = Cabin({ subsets: ["latin"], weight: ["400", "700"] });


const ProjectsCanvas = dynamic(() => import('../Projects/ProjectCanvas'), { ssr: false });

const projects = [
    {
        id:'1',
        name: "AI-CyberDetection Proto",
        description: "An AI ML driven cutting edge software to detect potential cyber attacks and capable of offense and defense. As of last commit "
                     + "current capabilities are a network analyser for the shared folder, as there is a business and website version. Network analyser "
                     + "has a traffic handler and a traffic simulator (training). Black listing unkown/unusual data package sizes and storing in MongoDB."
    },
    {
        id:'2',
        name: "InTouchBHL TicketSystem",
        description: "Currently rebuilding InTouchBHL's website from scratch using Next.JS and tailwind. Furthermore, I am also implementing a Service Management Ticket "
                     + "Prioritization system for End to End IT workflow using Flask and PostgreSQL."
    },
    {
        id:'3',
        name: "GodinezDevTech.com",
        description: "Personal Portfolio built entirely with THREE.js, HTML and CSS. Project features a fully interactable world with a GLTF desk and computer model to "
                     + "resemble a website. Seamless 3-Dimensional features for User experience. First Version of Portfolio"
    },
    {
        id:'4',
        name: "Stock Simulator",
        description: "Stock Simulation environment designed to teach users a way to safely trade in the market. Uses a stock API that fetches and updates stocks to real "
                     + "world prices. A user can buy and sell stocks, create evaluate and view their portfolios, these choices in the stock market free from real capital "
                     + "gain or loss."
    },
    {
        id:'5',
        name: "Malware-Ransom",
        description: "This project is meant to be used as a malware playground and should NOT be done or executed in instances outside of your personal machine. "
                     + "The code is meant to act as the bones of ransomware. Please run safely in a VM and not on your main machine as there is no safety feature "
                     + "that allows you to revert your machine back to a clean slate."
    },
    {
        id:'6',
        name: "AI",
        description: "Given a PyGame environment (Developed by Ashwin Bharadwaj, Anio Zhang, and Rajagopal Venkatesaramani) of n x n grid with some pre filled cells. I built an"
                     + "AI agent that solves a coloring constraint satisfaction problem. Implemented AI Agent with a Simulated Annealing algorithm and on average solves"
                     + " said game in 0.033 seconds"
    }
]

export default function ProjectsPage() {
    return (
        <div className="relative h-[300vh]">
            <ProjectsCanvas/>
            {/*looks like this has to be set manually which sucks */}
            {/*looks like for heigth we can just increase by 100 */}

            {/*reusable components takes in list */}

            {/*for a left sided text */}
            <section
                className={`absolute top-[32vh] left-[-10vw] px-[10%] text-[#ffeded] uppercase ${cabin.className}`}>
                <h2 className="text-[10vmin] tracking-tight font-black px-[10%]">
                    <Link href="/projects/project1" className="hover:text-[#7d1b2e] transition">
                        projectonename
                    </Link>
                </h2>
            </section>

            {/*for a right sided project */}
            <section
                className={`absolute top-[130vh] left-[20vw] px-[10%] text-[#ffeded] uppercase ${cabin.className}`}>
                <h2 className="text-[10vmin] tracking-tight font-black px-[10%]">
                    <Link href="/projects/project1" className="hover:text-[#7d1b2e] transition">
                        projecttwonamw
                    </Link>
                </h2>
            </section>

            <section
                className={`absolute top-[232vh] left-[-18vw] px-[10%] text-[#ffeded] uppercase ${cabin.className}`}>
                <h2 className="text-[10vmin] tracking-tight font-black px-[10%]">
                    <Link href="/projects/project1" className="hover:text-[#7d1b2e] transition">
                        projectThreename
                    </Link>
                </h2>
            </section>


        </div>
    );
}