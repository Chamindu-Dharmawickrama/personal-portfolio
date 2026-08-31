import React, { useState } from 'react';

const workData = [
    {
        company: "Sri Lanka Telecom PLC",
        role: "Full Stack Software Engineering Intern",
        icon: "🏢",
        companyColor: "from-blue-400 to-cyan-300",
        glowColor: "rgba(59,130,246,0.3)",
        borderColor: "rgba(59,130,246,0.4)",
        projects: [
            {
                name: "MySLT Client Web Portal",
                tag: "Frontend",
                tagColor: "from-blue-500 to-cyan-400",
                dotColor: "#3b82f6",
                points: [
                    "Contributed to frontend development using React and TypeScript.",
                    "Implemented new service-related UI features and fixed frontend functional bugs.",
                    "Resolved layout issues to improve responsiveness and UI consistency.",
                    "Used Material UI and Zustand for component design and state management."
                ],
                techStack: ["React", "TypeScript", "Material UI", "Zustand"]
            },
            {
                name: "E-Channeling System ( Hospital Management System prototype )",
                tag: "Full Stack",
                tagColor: "from-violet-500 to-purple-400",
                dotColor: "#8b5cf6",
                points: [
                    "Worked on the web and mobile module of a microservices-based platform.",
                    "Built the client web portal across frontend, backend, and database layers.",
                    "Implemented authentication and booking systems for both frontend and backend.",
                    "Developed backend services for search, booking, and user profile management.",
                    "Built key frontend components including the landing page, navigation, and footer.",
                    "Designed database models using Prisma with PostgreSQL."
                ],
                techStack: ["Next.js", "TypeScript", "Tailwind CSS", "Redux", "Prisma", "PostgreSQL"]
            },
            {
                name: "DPRS – Digital Paper Reduction System",
                tag: "Mobile & Backend",
                tagColor: "from-emerald-400 to-teal-400",
                dotColor: "#34d399",
                points: [
                    "Built multiple mobile screens using Flutter for the DPRS mobile application.",
                    "Led the backend development team and initiated the backend project structure from scratch.",
                    "Designed the backend architecture, including folder structure, middleware, configuration, utility functions, ERP functions, and server setup.",
                    "Created ERD diagrams, backend documentation, and database structure for the system.",
                    "Implemented major backend features such as login APIs with Azure integration and memo creation APIs.",
                    "Conducted code reviews, fixed bugs, and supported overall backend quality improvement.",
                    "Organized knowledge-sharing sessions and guided team members throughout development."
                ],
                techStack: ["Flutter", "Express.js", "Prisma", "PostgreSQL"]
            }
        ]
    }
];

const WorkExperienceCard = ({ job }) => {
    const [active, setActive] = useState(0);
    const [fading, setFading] = useState(false);

    const goTo = (idx) => {
        if (idx === active) return;
        setFading(true);
        setTimeout(() => {
            setActive(idx);
            setFading(false);
        }, 220);
    };

    const prev = () => goTo((active - 1 + job.projects.length) % job.projects.length);
    const next = () => goTo((active + 1) % job.projects.length);

    const proj = job.projects[active];

    return (
        <div
            className="relative rounded-2xl border border-white/10 bg-white/[0.02] overflow-hidden
                       transition-all duration-500 hover:border-white/20 hover:shadow-[0_0_40px_rgba(59,130,246,0.1)] hide-cursor-effect"
        >
            <div className="relative p-4 sm:p-6 border-b border-white/10 bg-gradient-to-br from-white/[0.05] to-transparent">
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-5 relative z-10">
                    <div
                        className="w-10 h-10 sm:w-12 sm:h-12 rounded-2xl flex items-center justify-center text-xl sm:text-2xl shrink-0"
                        style={{
                            background: `radial-gradient(circle, ${job.glowColor} 0%, rgba(15,15,25,0.9) 50%)`,
                            border: `1px solid ${job.borderColor}`,
                            boxShadow: `0 0 20px ${job.glowColor}`
                        }}
                    >
                        {job.icon}
                    </div>

                    <div>
                        <h3 className="text-lg sm:text-lg font-bold text-white tracking-wide mb-1">{job.company}</h3>
                        <p className={`text-[13px] sm:text-[15px] font-semibold bg-gradient-to-r ${job.companyColor} bg-clip-text text-transparent`}>
                            {job.role}
                        </p>
                    </div>
                </div>

                <div
                    className="absolute top-0 right-0 w-64 h-64 rounded-full blur-[80px] opacity-20 pointer-events-none"
                    style={{ background: job.dotColor }}
                />
            </div>

            {/* Projects Section */}
            <div className="p-3 sm:p-6 relative">

                <div className="flex flex-col gap-4 sm:gap-6 relative z-10">

                    <div className="flex items-center justify-between mb-1 px-1">
                        <div className="text-white/60 text-xs sm:text-sm font-medium uppercase tracking-widest truncate mr-2">
                            Key Projects & Contributions
                        </div>

                        {/* Navigation Arrows */}
                        <div className="flex items-center gap-1.5 sm:gap-2 shrink-0">
                            <button
                                onClick={prev}
                                className="w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center bg-white/5 hover:bg-white/10 text-white transition-colors border border-white/10 cursor-pointer text-sm sm:text-base"
                            >
                                ‹
                            </button>
                            <button
                                onClick={next}
                                className="w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center bg-white/5 hover:bg-white/10 text-white transition-colors border border-white/10 cursor-pointer text-sm sm:text-base"
                            >
                                ›
                            </button>
                        </div>
                    </div>

                    {/* Active Project Slide */}
                    <div
                        className="relative group"
                        style={{ opacity: fading ? 0 : 1, transition: "opacity 220ms ease" }}
                    >
                        <div
                            className="relative rounded-xl border border-white/10 bg-[#0a0a0f] 
                                       transition-all duration-300 ease-out overflow-hidden
                                       group-hover:border-white/20 group-hover:-translate-y-1 group-hover:shadow-[0_10px_40px_-10px_rgba(0,0,0,0.7)]"
                            style={{
                                boxShadow: '0 4px 20px -5px rgba(0,0,0,0.5), inset 0 0 0 1px rgba(255,255,255,0.02)'
                            }}
                        >
                            <div className="flex items-center justify-between px-3 sm:px-4 py-2 sm:py-2.5 border-b border-white/10 bg-white/[0.03]">
                                <div className="flex gap-1.5 sm:gap-2">
                                    <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-[#ff5f56]"></div>
                                    <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-[#ffbd2e]"></div>
                                    <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-[#27c93f]"></div>
                                </div>
                                <div className="text-[9px] sm:text-[10px] text-gray-400 font-mono tracking-wider truncate px-2">
                                    bash — ~/{proj.name.toLowerCase().replace(/\s+/g, '-')}
                                </div>
                                <div className="w-[38px] sm:w-[44px] hidden sm:block"></div> {/* Spacer to balance flex */}
                            </div>

                            {/* Screen Content */}
                            <div className="p-4 sm:p-6 bg-[#0d0d12]">
                                <div className="flex items-start sm:items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
                                    <span className="text-blue-500 font-bold text-base sm:text-lg mt-0.5 sm:mt-0">❯</span>
                                    <h4 className="text-base sm:text-lg font-bold text-white group-hover:text-blue-200 transition-colors duration-300 font-mono">
                                        {proj.name}
                                    </h4>
                                </div>

                                <ul className="text-[12px] sm:text-[13px] text-gray-300/80 space-y-2 sm:space-y-2.5 list-none mb-5 sm:mb-6 font-mono">
                                    {proj.points.map((pt, i) => (
                                        <li key={i} className="leading-relaxed relative pl-4 sm:pl-5">
                                            <span
                                                className="absolute left-0 top-[6px] sm:top-[7px] w-1 h-1 sm:w-1.5 sm:h-1.5 rounded-full opacity-70"
                                                style={{ backgroundColor: proj.dotColor }}
                                            ></span>
                                            {pt}
                                        </li>
                                    ))}
                                </ul>

                                <div className="flex flex-wrap gap-1.5 sm:gap-2 pt-3 sm:pt-4 border-t border-white/5">
                                    {proj.techStack.map((tech, i) => (
                                        <span
                                            key={i}
                                            className="text-[10px] sm:text-[11px] font-medium font-mono text-gray-400 bg-black/40 border border-white/5 px-2 sm:px-3 py-0.5 sm:py-1 rounded-md
                                                       hover:bg-white/10 hover:text-white transition-colors duration-300 cursor-default"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Number Indicators */}
                    <div className="flex items-center justify-center gap-1.5 sm:gap-2 mt-2 sm:mt-3">
                        {job.projects.map((p, i) => (
                            <button
                                key={i}
                                onClick={() => goTo(i)}
                                className={`w-6 h-6 sm:w-7 sm:h-7 rounded-full flex items-center justify-center text-[11px] sm:text-[12px] font-bold transition-all duration-300 cursor-pointer ${i === active ? "text-white" : "text-white/40 hover:text-white/80 hover:bg-white/10"}`}
                                style={{
                                    background: i === active ? p.dotColor : "rgba(255,255,255,0.05)",
                                    boxShadow: i === active ? `0 0 10px ${p.dotColor}` : "none",
                                }}
                            >
                                {i + 1}
                            </button>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export const WorkExperience = () => {
    return (
        <div className="mt-12 sm:mt-15 w-full max-w-3xl mx-auto px-7 sm:px-6">
            {workData.map((job, idx) => (
                <WorkExperienceCard key={idx} job={job} />
            ))}
        </div>
    );
};
