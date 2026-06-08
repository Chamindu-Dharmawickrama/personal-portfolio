const skillCategories = [
    {
        category: "Programming Languages",
        icon: "💻",
        color: "from-violet-500 to-purple-400",
        glow: "rgba(139,92,246,0.25)",
        border: "rgba(139,92,246,0.5)",
        bg: "rgba(139,92,246,0.07)",
        skills: [
            { name: "Java", icon: "../logo/java.png" },
            { name: "Python", icon: "../logo/python.png" },
            { name: "JavaScript", icon: "../logo/javascript.png" },
            { name: "TypeScript", icon: "../logo/typescript.png" },
        ],
    },
    {
        category: "Frontend Development",
        icon: "🎨",
        color: "from-cyan-400 to-blue-400",
        glow: "rgba(34,211,238,0.25)",
        border: "rgba(34,211,238,0.5)",
        bg: "rgba(34,211,238,0.07)",
        skills: [
            { name: "HTML", icon: "../logo/html.png" },
            { name: "CSS", icon: "../logo/css.png" },
            { name: "Tailwind CSS", icon: "../logo/tailwind.png" },
            { name: "React", icon: "../logo/react.png" },
            { name: "Next.js", icon: "../logo/next.png" },
            { name: "Flutter", icon: "../logo/flutter.png" },
        ],
    },
    {
        category: "Backend Development",
        icon: "⚙️",
        color: "from-emerald-400 to-teal-400",
        glow: "rgba(52,211,153,0.25)",
        border: "rgba(52,211,153,0.5)",
        bg: "rgba(52,211,153,0.07)",
        skills: [
            { name: "Node.js", icon: "../logo/node.png" },
            { name: "Express.js", icon: "../logo/express.png" },
            { name: "Django", icon: "../logo/django.png" },
            { name: "FastAPI", icon: "../logo/fastapi.png" },
        ],
    },
    {
        category: "Databases",
        icon: "🗄️",
        color: "from-orange-400 to-amber-400",
        glow: "rgba(251,146,60,0.25)",
        border: "rgba(251,146,60,0.5)",
        bg: "rgba(251,146,60,0.07)",
        skills: [
            { name: "PostgreSQL", icon: "../logo/postgresql.png" },
            { name: "MySQL", icon: "../logo/mysql.png" },
            { name: "MongoDB", icon: "../logo/mongodb.png" },
        ],
    },
    {
        category: "AI / ML Tools",
        icon: "🤖",
        color: "from-pink-400 to-rose-400",
        glow: "rgba(244,114,182,0.25)",
        border: "rgba(244,114,182,0.5)",
        bg: "rgba(244,114,182,0.07)",
        skills: [
            { name: "Langchain", icon: "../logo/langchain.png" },
            { name: "Langgraph", icon: "../logo/langgraph.png" },
        ],
    },
    {
        category: "DevTools",
        icon: "🛠️",
        color: "from-slate-400 to-gray-300",
        glow: "rgba(148,163,184,0.25)",
        border: "rgba(148,163,184,0.5)",
        bg: "rgba(148,163,184,0.07)",
        skills: [
            { name: "Git", icon: "../logo/git.png" },
        ],
    },
];

export const Skills = () => {
    return (
        <div className="mt-12 sm:mt-15 mx-auto px-6 w-full max-w-5xl">
            <div
                className="relative rounded-3xl p-6 border border-white/[0.06]"
                style={{ background: "radial-gradient(ellipse at 50% 0%, rgba(59,130,246,0.07) 0%, transparent 70%)" }}
            >
                <div className="pointer-events-none absolute -top-12 -left-12 w-40 h-40 rounded-full bg-blue-600/10 blur-3xl" />
                <div className="pointer-events-none absolute -bottom-12 -right-12 w-40 h-40 rounded-full bg-cyan-500/10 blur-3xl" />

                <div className="flex flex-col gap-10">
                    {skillCategories.map((cat, catIdx) => (
                        <div key={catIdx}>
                            <div className="flex items-center gap-3 mb-5">
                                <span className="text-xl">{cat.icon}</span>
                                <h3 className={`text-sm font-bold uppercase tracking-widest bg-gradient-to-r ${cat.color} bg-clip-text text-transparent`}>
                                    {cat.category}
                                </h3>
                                <div
                                    className="flex-1 h-px rounded-full opacity-30"
                                    style={{ background: `linear-gradient(to right, ${cat.border}, transparent)` }}
                                />
                            </div>

                            {/* Skills Grid */}
                            <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-8 gap-3">
                                {cat.skills.map((skill, index) => (
                                    <div
                                        key={index}
                                        className="group relative flex flex-col items-center justify-center gap-2 p-3 rounded-xl cursor-default overflow-hidden min-h-[90px]
                                                   transition-all duration-500 ease-out
                                                   hover:-translate-y-1.5 hover:scale-[1.04]"
                                        style={{
                                            background: "rgba(255,255,255,0.02)",
                                            border: "1px solid rgba(255,255,255,0.08)",
                                            animationDelay: `${index * 55}ms`,
                                        }}
                                        onMouseEnter={e => {
                                            e.currentTarget.style.border = `1px solid ${cat.border}`;
                                            e.currentTarget.style.background = cat.bg;
                                            e.currentTarget.style.boxShadow = `0 0 0 1px ${cat.glow}, 0 8px 32px ${cat.glow}, 0 0 60px ${cat.glow}`;
                                        }}
                                        onMouseLeave={e => {
                                            e.currentTarget.style.border = "1px solid rgba(255,255,255,0.08)";
                                            e.currentTarget.style.background = "rgba(255,255,255,0.02)";
                                            e.currentTarget.style.boxShadow = "none";
                                        }}
                                    >
                                        <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full
                                                        transition-transform duration-700 ease-in-out pointer-events-none
                                                        bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />

                                        <div
                                            className="absolute top-0 left-1/2 -translate-x-1/2 h-[1.5px] w-0 group-hover:w-2/3
                                                        transition-all duration-500 ease-out rounded-full"
                                            style={{ background: `linear-gradient(to right, transparent, ${cat.border}, transparent)` }}
                                        />

                                        <div className="absolute bottom-0 right-0 w-6 h-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                            <div
                                                className="absolute bottom-1.5 right-1.5 w-1.5 h-1.5 rounded-full"
                                                style={{ background: cat.border, boxShadow: `0 0 6px 2px ${cat.glow}` }}
                                            />
                                        </div>

                                        {/* Icon wrapper with layered glow */}
                                        <div className="relative flex items-center justify-center w-10 h-10
                                                        transition-transform duration-400 group-hover:scale-115">
                                            <div
                                                className="absolute inset-0 rounded-full border border-transparent group-hover:scale-125 transition-all duration-500 ease-out"
                                                style={{ borderColor: "transparent" }}
                                            />
                                            <div
                                                className="absolute inset-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-400 blur-lg"
                                                style={{ background: `radial-gradient(circle, ${cat.glow} 0%, transparent 70%)` }}
                                            />
                                            <img
                                                src={`/${skill.icon}`}
                                                alt={skill.name}
                                                className="w-8 h-8 object-contain relative z-10
                                                           transition-all duration-400
                                                           group-hover:drop-shadow-[0_0_12px_rgba(147,197,253,0.75)]"
                                            />
                                        </div>

                                        <p className="text-[10px] font-semibold tracking-wide text-center uppercase
                                                      text-gray-500 group-hover:text-gray-200
                                                      transition-colors duration-300 leading-tight">
                                            {skill.name}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};
