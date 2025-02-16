import Link from 'next/link';
import Image from 'next/image';
import { Cabin } from 'next/font/google';

const cabin = Cabin({ subsets: ["latin"], weight: ["400", "700"] });

export default function ProjectTemplate({ project }) {
    return (
        <section>
            <h2 className="text-[10vmin] tracking-tight font-black px-[10%]">
                <Link href={`/projects/${project.id}`} className="hover:text-[#7d1b2e] transition">
                    {project.name}
                </Link>
            </h2>
            <p className="text-[3vmin]">{project.description}</p>
        </section>
    );
}
