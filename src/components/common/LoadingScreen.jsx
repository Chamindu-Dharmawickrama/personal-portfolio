import { useEffect } from "react";
import { useState } from "react";

//Loading Screen
export const LoadingScreen = ({ onComplete }) => {
    //use usestate to keep track the letter
    const [text, setText] = useState("");
    const [isComplete, setIsComplete] = useState(false);
    const displayText = "<Hello World />";

    useEffect(() => {
        let index = 0;
        const interval = setInterval(() => {
            //every time thsi use efect run set the text with increase by one letter
            setText(displayText.substring(0, index));
            index++;

            //check all the letters return
            if (index > displayText.length) {
                clearInterval(interval);
                setIsComplete(true);

                //after 1.5 sec triger the onComplete funtion
                setTimeout(() => {
                    onComplete();
                }, 1200);
            }
            //add late for each letter
        }, 60);
        return () => clearInterval(interval);
    }, [onComplete]);

    return (
        <div className="fixed inset-0 z-50 bg-[#0a0a0a] text-gray-100 flex flex-col items-center justify-center overflow-hidden px-4">
            <div className="absolute inset-0 opacity-30">
                <div className="absolute top-0 left-1/4 w-48 h-48 sm:w-72 sm:h-72 md:w-96 md:h-96 bg-blue-500/20 rounded-full blur-3xl"></div>
                <div className="absolute bottom-0 right-1/4 w-48 h-48 sm:w-72 sm:h-72 md:w-96 md:h-96 bg-cyan-500/20 rounded-full blur-3xl"></div>
            </div>

            <div className="relative z-10 flex flex-col items-center justify-center gap-6 sm:gap-8">
                {/* Code text with typing effect */}
                <div className="text-center">
                    <div className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-mono font-bold tracking-wider">
                        <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                            {text}
                        </span>
                        <span
                            className={`ml-1 sm:ml-2 inline-block transition-opacity duration-300 ${isComplete ? "opacity-0" : "opacity-100"}`}
                        >
                            <span className="animate-blink text-blue-400">
                                |
                            </span>
                        </span>
                    </div>
                    <p className="text-gray-400 text-xs sm:text-sm md:text-base mt-3 sm:mt-6 font-light">
                        Initializing portfolio...
                    </p>
                </div>

                <div className="w-56 sm:w-64 md:w-72 space-y-2 sm:space-y-3">
                    <div className="relative h-1 bg-gray-800/50 rounded-full overflow-hidden backdrop-blur-sm border border-gray-700/30">
                        <div className="absolute inset-y-0 left-0 w-2/5 bg-gradient-to-r from-blue-500 via-cyan-400 to-blue-500 rounded-full shadow-lg shadow-blue-500/50 animate-loading-bar"></div>

                        <div className="absolute inset-y-0 left-0 w-2/5 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full blur-md opacity-50 animate-loading-bar"></div>
                    </div>

                    <p className="text-center text-xs text-gray-500 font-light">
                        Loading experience...
                    </p>
                </div>
            </div>
        </div>
    );
};
