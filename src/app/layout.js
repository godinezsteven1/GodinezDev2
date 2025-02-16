import './globals.css';

export const metadata = {
    title: 'Godinez DevTech',
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
        <body className="min-h-screen bg-gray-900 text-gray-200">
        {/* Fixed Navigation Bar */}
        <nav className="fixed top-0 w-full bg-gray-800 h-16 flex items-center z-50">
            <div className="max-w-6xl mx-auto flex justify-center space-x-6 w-full">
                {['About', 'Projects', 'Terminal', '3D-Playground', 'Contact'].map((item) => (
                    <a
                        key={item}
                        href={`/${item}`}
                        className="px-4 py-2 rounded-lg transition-all duration-300 hover:text-white hover:bg-gray-700"
                    >
                        {item === '' ? 'about' : item.charAt(0).toUpperCase() + item.slice(1)}
                    </a>
                ))}
            </div>
        </nav>

        <main className="container mx-auto px-4 pt-20 pb-24 relative z-0">{children}</main>
        </body>
        </html>
    );
}
