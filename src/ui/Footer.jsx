export default function Footer() {
    return (
        <footer className="bg-gray-50 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800 mt-auto">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
                <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-gray-600 dark:text-gray-400">
                    <p>
                        "Copyright © "
                        "{new Date().getFullYear()}"
                        ". All rights reserved."
                    </p>
                    <p>
                        Made by {' '} 
                        <a 
                            href="https://github.com/Mathew2223" 
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-indigo-600 dark:text-indigo-400 hover:underline font-medium"
                        >
                            Mathew
                        </a>
                    </p>
                </div>
            </div>
        </footer>
    )
}