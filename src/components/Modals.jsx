export default function Modal({ isOpen, onClose, children }) {
    if (!isOpen) return null;

    return (
        <div 
            className="fixed inset-0 z-[100] flex items-center justify-center 
            p-4 bg-black/50 backdrop-blur-sm animate-fade-in" 
            onClick={onClose}
            aria-modal="true"
            role="dialog"
        >
            <div 
                className="relative w-full max-w-md bg-white dark:bg-gray-900 rounded-2xl 
                shadow-2xl border border-gray-200 dark:border-gray-800 overflow-hidden 
                animate-slide-up" 
                onClick={(e) => e.stopPropagation()}
            >
                <div 
                    className="flex items-center justify-between px-6 py-4 border-b 
                    border-gray-100 dark:border-gray-800"
                >
                    <h1 className="text-lg font-semibold text-gray-900 dark:text-white">
                        Settings
                    </h1>
                    <button 
                        className="p-2 rounded-full text-gray-400 hover:text-gray-600 
                        dark:hover:text-gray-200 hover:bg-gray-100
                        dark:hover:bg-gray-800 transition-all" 
                        onClick={onClose}
                    >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>
                <div className="p-6">
                    {children}
                </div>
            </div>
        </div>
    )
}