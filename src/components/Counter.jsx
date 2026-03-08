import React from "react";
import { useState, useEffect } from "react";

export default function Counter() {
    const [count, setCount] = useState(0);
    const [shownMessages, setShownMessage] = useState({});

    useEffect(() => {
        const checkAndLog = (condition, messageKey, messageText) => {
            if (condition && !shownMessages[messageKey]) {
                console.log(messageText)
                setShownMessage(prev => ({ ...prev, [messageKey]: true }));
            }
        }

        onDecrement && count == 1 && console.log('good try!')
        checkAndLog(count > 10, 'msg_1', 'Your good in this bro');
        checkAndLog(count > 50, 'msg_50', 'Come on');
        checkAndLog(count === 99, 'msg_99', 'What about this');
        checkAndLog(count === 100, 'msg_100', 'You got this!');
    }, [count, shownMessages]);

    const onDecrement = () => {
        return count > 0 && setCount((value) => --value);
    }

    const onIncrement = () => {
        count <= 99 && setCount((value) => ++value);
    }

    const onReset = () => {
        setCount(0)
    }

    return (            
        <main className="flex flex-col p-4 xl:px-0  overflow-auto">
            <div className="max-w-6xl w-full mx-auto flex-grow">
            <div 
                className="bg-white dark:bg-gray-800 text-gray-900 dark:text-white flex flex-col
                gap-6 border border-gray-200 dark:border-gray-700 max-w-sm w-full mx-auto p-6 rounded-xl
                shadow-lg transition-colors duration-300">
                    <div 
                        className="text-6xl md:text-8xl font-bold text-center mb-4 text-gray-900
                        dark:text-white transition-colors duration-300"
                        aria-live="polite"
                        aria-label="The current value of the counter"
                    >
                        {count}
                    </div>
                    <div className="grid gap-2 sm:grid-cols-3">
                        <button
                            onClick={onDecrement}
                            data-slot="button"
                            className="inline-flex items-center justify-center gap-2 whitespace-nowrap 
                            rounded-md text-sm font-medium disabled:pointer-events-none disabled:opacity-50 
                            [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 
                            [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-[3px] 
                            aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 
                            aria-invalid:border-destructive 
                            bg-red-600 text-white shadow-xs 
                            hover:bg-red-700 focus-visible:ring-red-500/20 
                            dark:bg-red-600 dark:hover:bg-red-700
                            h-9 px-4 py-2 has-[>svg]:px-3 cursor-pointer transition-all duration-200 
                            hover:scale-105 border border-red-700"
                            aria-label="Reduce value"
                        >
                            Decrement
                        </button>
                        <button
                            onClick={onReset}
                            data-slot="button"
                            className="inline-flex items-center justify-center gap-2 whitespace-nowrap 
                                rounded-md text-sm font-medium disabled:pointer-events-none disabled:opacity-50 
                                [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 
                                [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50
                                focus-visible:ring-[3px] aria-invalid:ring-destructive/20 
                                dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive bg-secondary
                                text-secondary-foreground shadow-xs hover:bg-secondary/80 h-9 px-4 py-2 
                                has-[>svg]:px-3 cursor-pointer transition-all duration-200 hover:scale-102 border"
                            aria-label="Reset the meaning"
                        >
                            Reset
                        </button>
                        <button
                            onClick={onIncrement}
                            data-slot="button"
                            className="inline-flex items-center justify-center gap-2 whitespace-nowrap 
                            rounded-md text-sm font-medium disabled:pointer-events-none disabled:opacity-50 
                            [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 
                            [&_svg]:shrink-0 outline-none focus-visible:border-ring 
                            focus-visible:ring-ring/50 focus-visible:ring-[3px] 
                            aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 
                            aria-invalid:border-destructive bg-primary text-primary-foreground shadow-xs 
                            hover:bg-primary/90 h-9 px-4 py-2 has-[>svg]:px-3 cursor-pointer 
                            transition-all duration-200 hover:scale-102 border"
                            aria-label="Increase value"
                        >
                            Increment
                        </button>
                    </div>
                </div>
            </div>
        </main>  
    )
}