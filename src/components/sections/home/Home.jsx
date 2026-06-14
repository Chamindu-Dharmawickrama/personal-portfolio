import { useEffect, useState } from "react";
import { RevealOnScroll } from "../../common/RevealOnScroll";

export const Home = () => {
    const phrases = ["Chamindu Dharmawickrama", "Full Stack Developer"];
    const [displayText, setDisplayText] = useState("");

    useEffect(() => {
        let currentPhraseindex = 0;
        let currentText = "";
        let isDeleting = false;
        let frame;
        let typingSpeed = 60;

        const type = () => {
            const fullText = phrases[currentPhraseindex];

            //if isDeleteing is true remove the letters by the currentText
            //if isDeleting is false add a another letter to the current text
            if (isDeleting) {
                currentText = fullText.substring(0, currentText.length - 1);
            } else {
                currentText = fullText.substring(0, currentText.length + 1);
            }

            //update the current text
            setDisplayText(currentText);

            //if isDeleing is not true and if the current text contains all the letters in a full text,
            //Hold for a 1.2s
            //assing true to the isDeleting for continue the delete part
            //
            if (!isDeleting && currentText == fullText) {
                setTimeout(() => {
                    isDeleting = true;
                    // Schedule the next step of typing or deleting to run smoothly on the browser's next screen refresh for best animation performance.
                    frame = requestAnimationFrame(type);
                }, 1500);
                return;
            }

            //this code block run when the after deleing all the characters in the 0 index text
            if (isDeleting && currentText === "") {
                isDeleting = false;
                //update the currentPhraseindex to access to the next index
                currentPhraseindex = (currentPhraseindex + 1) % phrases.length;
            }
            //delays the next typing/deleting step
            frame = setTimeout(
                () => requestAnimationFrame(type),
                isDeleting ? 30 : typingSpeed,
            );
        };
        //	Starts the typing animation on the next screen repaint
        frame = requestAnimationFrame(type);

        //Stops the animation if the component unmounts
        return () => {
            cancelAnimationFrame(frame);
        };
    }, []);

    return (
        <RevealOnScroll delay={"-50px"}>
            <section
                id="home"
                className=" min-h-screen w-full flex items-center justify-center px-4 sm:px-6 md:px-8 lg:px-16 pt-20 sm:pt-20"
            >
                <div className="flex flex-col items-center max-w-7xl mx-auto w-full py-4 sm:py-6 md:py-8 mt-0 sm:mt-2 md:mt-4 gap-10">
                    <div className="flex flex-col items-center justify-between gap-6 sm:gap-8 w-full lg:flex-row">
                        <div className="text-center w-full  lg:text-left order-1 lg:order-1">
                            <div className="min-h-[8rem] sm:min-h-[9rem] md:min-h-[10rem]">
                                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[46px] xl:text-[59px] font-bold leading-tight text-center lg:text-left ">
                                    Hi, I'm <br />
                                    <span className="bg-gradient-to-r from-blue-600 to-cyan-300 bg-clip-text text-transparent inline-block break-words">
                                        {displayText}&nbsp;
                                    </span>
                                </h1>
                            </div>

                            <div className="mt-4 sm:mt-5 md:mt-6 lg:mt-0 xl:mt-5 max-w-xl px-4 sm:px-0 mx-auto lg:mx-0 hide-cursor-effect">
                                <div className="w-10 h-[3px] bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full mb-4 mx-auto lg:mx-0" />
                                <p className="text-base sm:text-lg text-gray-300 leading-[1.9] text-justify">
                                    I’m a software developer passionate about building meaningful digital experiences that solve real problems. Through my portfolio, I share my skills, growth, and commitment to turning ideas into clean, effective solutions.
                                </p>
                            </div>

                            <div className="grid grid-cols-2 gap-x-6 gap-y-5 mt-7 w-full max-w-xs mx-auto lg:flex lg:items-center lg:gap-0 lg:max-w-none lg:mx-0 lg:justify-start">
                                {[
                                    { value: "10+", label: "Projects" },
                                    { value: "1+", label: "Years of Experience" },
                                    { value: "6+", label: "Years of Learning" },
                                    { value: "20+", label: "Technologies" },
                                ].map(({ value, label }, i, arr) => (
                                    <>
                                        <div
                                            key={label}
                                            className={`flex flex-col items-center cursor-default group ${i === 0
                                                ? "lg:pl-0 lg:pr-6"
                                                : "lg:px-6"
                                                }`}
                                        >
                                            <span className="text-2xl sm:text-3xl font-extrabold bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent leading-none group-hover:scale-110 transition-transform duration-200">
                                                {value}
                                            </span>
                                            <span className="text-[10px] sm:text-[11px] text-gray-500 uppercase tracking-widest mt-1 font-medium whitespace-nowrap">
                                                {label}
                                            </span>
                                        </div>
                                        {i < arr.length - 1 && (
                                            <div className="hidden lg:block w-px h-8 bg-gradient-to-b from-transparent via-blue-500/40 to-transparent flex-shrink-0" />
                                        )}
                                    </>
                                ))}
                            </div>

                            <div className="flex flex-col sm:flex-row gap-5 ml-15 mr-15 mt-10 sm:mt-12 md:mt-14 mx-auto lg:mx-0 justify-center lg:justify-start">
                                <a
                                    href="#contact"
                                    className="text-[15px] bg-blue-500 text-white py-2 sm:py-2.5 px-5 sm:px-6 rounded-4xl font-semibold transition-all duration-300 hover:translate-y-0.5 hover:shadow-lg text-center"
                                >
                                    Contact Me
                                </a>

                                <a
                                    href="/Chamindu Dharmawickrama.pdf"
                                    download
                                    className="text-[15px] border border-blue-500/50 text-blue-500 py-2 sm:py-2.5 px-5 sm:px-6 rounded-4xl font-semibold transition-all duration-300 hover:translate-y-0.5 hover:bg-blue-500/10 text-center"
                                >
                                    Download CV
                                </a>
                            </div>

                        </div>

                        {/*image*/}
                        <div className="order-2 lg:order-2 mt-8 lg:mt-0">
                            <div className="relative group">
                                <div className="absolute -inset-2 rounded-xl blur-2xl bg-gradient-to-r from-blue-500/30 via-cyan-400/20 to-blue-500/30 opacity-0 group-hover:opacity-100 transition-all duration-500"></div>

                                <div className="absolute -inset-1 rounded-xl blur-xl bg-gradient-to-br from-blue-400/20 to-cyan-400/10 opacity-50 group-hover:opacity-100 transition-opacity duration-500"></div>

                                <div className="relative bg-gradient-to-br p-0.5 rounded-xl overflow-hidden">
                                    <img
                                        src="/chaminduNew.jpg"
                                        alt="Chamindu Dharmawickrama"
                                        className="relative w-48 sm:w-56 md:w-64 lg:w-80 xl:w-106 rounded-lg shadow-2xl shadow-blue-500/30 object-cover transition-all duration-500 group-hover:shadow-cyan-400/50 group-hover:scale-105"
                                    />
                                </div>

                                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                            </div>
                        </div>
                    </div>

                </div>
            </section>
        </RevealOnScroll>
    );
};
