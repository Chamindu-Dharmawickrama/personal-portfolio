import { useState } from "react";
import { RevealOnScroll } from "../../common/RevealOnScroll";
import { Skills } from "./Skills";
import { Education } from "./Education";
import { Certification } from "./Certification";
import { WorkExperience } from "./WorkExperience";

export const About = () => {
    const [option, setOption] = useState("work");

    return (
        <RevealOnScroll delay={"-50px"}>
            <section
                id="about"
                className="min-h-screen flex flex-col items-center justify-center py-20"
            >
                <div className="max-w-3xl mx-auto px-4">
                    <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-600 to-cyan-300 bg-clip-text text-transparent text-center">
                        About me
                    </h2>
                </div>

                {/* Bio Card */}
                <div className="relative max-w-3xl ml-5 sm:ml-0 mr-5 sm:mr-0 mx-auto px-2">
                    <div className="relative rounded-2xl p-6 sm:p-10 border border-white/10 hover:-translate-y-1 transition-all duration-300">
                        <span className="absolute top-4 left-6 text-6xl font-serif text-blue-500/20 leading-none select-none">"</span>

                        <p className="text-gray-200 text-[17px] leading-[1.9] mb-5 text-center">
                            I am a{" "}
                            <span className="font-semibold bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
                                software engineering undergraduate
                            </span>{" "}
                            with a strong passion for building meaningful and innovative{" "}
                            <span className="text-white font-medium">
                                digital solutions
                            </span>
                            . I enjoy learning how technology can be used to solve{" "}
                            <span className="text-cyan-400 font-medium">
                                real-world challenges
                            </span>{" "}
                            and create better experiences for users. My journey in software development has strengthened my curiosity, problem-solving mindset, and commitment to continuous growth.
                        </p>

                        <div className="w-16 h-px bg-gradient-to-r from-blue-500 to-cyan-400 mx-auto mb-5 rounded-full" />

                        <p className="text-gray-300 text-[17px] leading-[1.9] text-center">
                            I am particularly interested in{" "}
                            <span className="text-cyan-400 font-medium">modern web technologies</span>{" "}
                            and the process of transforming ideas into practical, impactful applications. I value creativity, adaptability, and collaboration, and I am always eager to explore{" "}
                            <span className="font-semibold bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
                                new ideas
                            </span>{" "}
                            that help me grow both personally and professionally.
                        </p>

                        <span className="absolute bottom-4 right-6 text-6xl font-serif text-blue-500/20 leading-none select-none">"</span>
                    </div>
                </div>

                {/* Tab Navigation */}
                <div className="mt-12 w-full max-w-2xl mx-auto px-7 sm:px-4">
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-1 p-1.5 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 shadow-[0_0_30px_rgba(59,130,246,0.08)]">
                        {[
                            { key: "work", label: "Experience" },
                            { key: "skills", label: "Skills" },
                            { key: "edu", label: "Education" },
                            { key: "certifi", label: "Certification" },
                        ].map(({ key, label }) => (
                            <button
                                key={key}
                                onClick={() => setOption(key)}
                                className={`w-full text-center py-2.5 px-2 text-xs sm:text-sm font-semibold rounded-xl transition-all duration-300 cursor-pointer tracking-wide ${
                                    option === key
                                        ? "bg-blue-500 text-white shadow-[0_0_20px_rgba(59,130,246,0.45)] scale-[1.02]"
                                        : "text-white/50 hover:text-white/90 hover:bg-white/8"
                                }`}
                            >
                                {label}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Tab Content */}
                {option === "work" && <WorkExperience />}
                {option === "skills" && <Skills />}
                {option === "edu" && <Education />}
                {option === "certifi" && <Certification />}

            </section>
        </RevealOnScroll>
    );
};
