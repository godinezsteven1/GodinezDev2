import Link from 'next/link'
export default function ProjectsLayout({ children }) {
    return (
        <div className="min-h-screen bg-transparent flex flex-col">
            { children }
        </div>
    )
}