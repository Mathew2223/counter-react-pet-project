import { useState, useEffect } from "react"
import logo from "../assets/kofta.jpg"
import Modal from "../components/Modals";

export default function Header() {
    const [isDark, setIsDark] = useState(() => {
        if (typeof window !== 'undefined') {
            const saved = localStorage.getItem('theme');
            return saved ? saved === 'dark' : window.matchMedia('(prefers-color-scheme: dark)').matches;
        }
    })
    const [isSettingsOpen, setIsSettingsOpen] = useState(false);

    const toggleTheme = () => {
        setIsDark((value) => !value)
    }

    useEffect(() => {
        if (isDark) {
            document.documentElement.classList.add('dark');
            localStorage.setItem('theme', 'dark');
        } else {
            document.documentElement.classList.remove('dark');
            localStorage.setItem('theme', 'light');
        }
    }, [isDark]);

    return (
        <>
            <header className="bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800 sticky top-0 z-50">
                <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-16">
                        <div className="flex items-center gap-2">
                            <a href="https://github.com/Mathew2223" className="flex items-center gap-2">
                                <img 
                                    src={logo}
                                    alt="Logo"
                                    className="w-8 h-8 rounded-full object-cover ring-2 ring-indigo-500/20"
                                />
                            </a>
                                <a href="/" className="font-bold text-lg text-gray-900 dark:text-white hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
                                    Counter
                                </a>
                        </div>
                        <ul className="flex items-center gap-2">
                            <li>
                                <button
                                    onClick={() => setIsSettingsOpen(true)}
                                    aria-label="Settings"
                                    className="group flex items-center justify-center w-10 h-10 
                                    rounded-xl bg-gray-800/50 dark:bg-gray-800/50 border 
                                    border-white/10 hover:bg-gray-700/50 dark:hover:bg-gray-700/50
                                    transition-all duration-200 active:scale-95"
                                >
                                    <svg className="w-5 h-5 transition-transform group-hover:rotate-45 duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                    </svg>
                                </button>
                            </li>
                            <li>
                                <button
                                    onClick={toggleTheme}
                                    aria-label="Toggle theme"
                                    className="roup flex items-center justify-center w-10 h-10 rounded-xl
                                    bg-gray-800/50 dark:bg-gray-800/50 border 
                                    border-white/10 hover:bg-gray-700/50 dark:hover:bg-gray-700/50
                                    transition-all duration-200 active:scale-95"
                                >
                                    { isDark ? (
                                        <svg className="w-5 h-5 text-yellow-400 transition-transform group-hover:rotate-45 duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                                        </svg>      
                                    ) : (
                                        <svg className="w-5 h-5 text-white/90 group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                                        </svg>
                                    )}
                                </button>
                            </li>
                        </ul>
                    </div>
                </nav>
            </header>
            <Modal
                isOpen={isSettingsOpen}
                onClose={() => setIsSettingsOpen(false)}
            >
                <div className="space-y-4">
                    <p className="text-gray-600 dark:text-gray-300 text-sm">
                        Let's count bro
                    </p>
                    <div className="pt-2 flex justify-end">
                        <button
                            onClick={() => setIsSettingsOpen(false)}
                            className="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white 
                            text-sm font-medium rounded-lg transition-colors"
                        >
                            Done
                        </button>
                    </div>
                </div>
            </Modal>
        </>
    )
}