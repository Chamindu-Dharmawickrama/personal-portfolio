const educationData = [
    {
        institution: "Informatics Institute of Technology, affiliated with University of Westminster",
        degree: "BEng (Hons) Software Engineering",
        period: "2023 – Present",
        status: "current",
        icon: "🎓",
        tag: "Degree",
        tagColor: "from-blue-500 to-cyan-400",
        glowColor: "rgba(59,130,246,0.35)",
        borderColor: "rgba(59,130,246,0.55)",
        dotColor: "#3b82f6",
    },
    {
        institution: "Informatics Institute of Technology",
        degree: "Foundation Certificate in Higher Education",
        detail: "Merit Pass",
        period: "2022 – 2023",
        status: "completed",
        icon: "🏫",
        tag: "Foundation",
        tagColor: "from-violet-500 to-purple-400",
        glowColor: "rgba(139,92,246,0.35)",
        borderColor: "rgba(139,92,246,0.55)",
        dotColor: "#8b5cf6",
    },
    {
        institution: "Aquinas College",
        degree: "Aquinas English Diploma",
        detail: "Certificate Level 3",
        period: "Mar – Jul 2023",
        status: "completed",
        icon: "📜",
        tag: "Certificate",
        tagColor: "from-emerald-400 to-teal-400",
        glowColor: "rgba(52,211,153,0.35)",
        borderColor: "rgba(52,211,153,0.55)",
        dotColor: "#34d399",
    },
    {
        institution: "G/ P. De S. Kularathna College",
        degree: "GCE Advanced Level — Mathematics Stream",
        detail: "GCE Ordinary Level — 8A & 1B",
        period: "2008 – 2021",
        status: "completed",
        icon: "🏫",
        tag: "School",
        tagColor: "from-orange-400 to-amber-400",
        glowColor: "rgba(251,146,60,0.35)",
        borderColor: "rgba(251,146,60,0.55)",
        dotColor: "#fb923c",
    },
];

const EduCard = ({ item }) => (
    <div
        className="relative rounded-2xl p-4 w-full cursor-default overflow-hidden
                   transition-all duration-500 ease-out
                   hover:-translate-y-1 hover:scale-[1.02]"
        style={{
            background: "rgba(255,255,255,0.02)",
            border: "1px solid rgba(255,255,255,0.07)",
        }}
        onMouseEnter={e => {
            e.currentTarget.style.border = `1px solid ${item.borderColor}`;
            e.currentTarget.style.background = "rgba(255,255,255,0.04)";
            e.currentTarget.style.boxShadow = `0 8px 28px ${item.glowColor}, 0 0 0 1px ${item.glowColor}`;
        }}
        onMouseLeave={e => {
            e.currentTarget.style.border = "1px solid rgba(255,255,255,0.07)";
            e.currentTarget.style.background = "rgba(255,255,255,0.02)";
            e.currentTarget.style.boxShadow = "none";
        }}
    >
        <div className="absolute inset-0 -translate-x-full hover:translate-x-full
                        transition-transform duration-700 pointer-events-none
                        bg-gradient-to-r from-transparent via-white/[0.04] to-transparent" />

        <div className="flex items-center justify-between mb-2 flex-wrap gap-1">
            <span className={`text-[10px] font-bold uppercase tracking-widest px-2.5 py-0.5 rounded-full bg-gradient-to-r ${item.tagColor} text-white`}>
                {item.tag}
            </span>
            <div className="flex items-center gap-1.5">
                {item.status === "current" && (
                    <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75"
                            style={{ backgroundColor: item.dotColor }} />
                        <span className="relative inline-flex rounded-full h-2 w-2"
                            style={{ backgroundColor: item.dotColor }} />
                    </span>
                )}
                <span className="text-[11px] text-gray-400 font-medium">{item.period}</span>
            </div>
        </div>

        <h4 className="text-white font-bold text-[14px] leading-snug mb-1">{item.institution}</h4>
        <p className={`text-[12px] font-semibold bg-gradient-to-r ${item.tagColor} bg-clip-text text-transparent leading-snug`}>
            {item.degree}
        </p>
        {item.detail && (
            <p className="text-[11px] text-gray-500 mt-1">{item.detail}</p>
        )}
    </div>
);

export const Education = () => {
    return (
        <div className="mt-16 w-full max-w-4xl mx-auto px-8">

            {/* MOBILE: left-spine single-column timeline */}
            <div className="relative md:hidden">
                <div
                    className="absolute left-4 top-0 bottom-0 w-0.5"
                    style={{
                        background:
                            "linear-gradient(to bottom, rgba(59,130,246,0.7), rgba(139,92,246,0.5), rgba(52,211,153,0.4), rgba(251,146,60,0.3))",
                    }}
                />

                <div className="flex flex-col gap-8">
                    {educationData.map((item, idx) => (
                        <div key={idx} className="relative flex items-start gap-4 pl-12">
                            <div
                                className="absolute left-0 top-3 w-8 h-8 rounded-full flex items-center justify-center text-sm shrink-0
                                           transition-all duration-300 hover:scale-110"
                                style={{
                                    background: `radial-gradient(circle, ${item.glowColor} 0%, rgba(15,15,25,0.9) 100%)`,
                                    border: `2px solid ${item.borderColor}`,
                                    boxShadow: `0 0 12px ${item.glowColor}`,
                                }}
                            >
                                {item.icon}
                            </div>

                            {/* Card */}
                            <EduCard item={item} />
                        </div>
                    ))}
                </div>
            </div>

            {/* DESKTOP: center-trunk alternating tree */}
            <div className="relative hidden md:block">
                <div
                    className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-0.5 z-0"
                    style={{
                        background:
                            "linear-gradient(to bottom, rgba(59,130,246,0.7) 0%, rgba(139,92,246,0.5) 40%, rgba(52,211,153,0.4) 70%, rgba(251,146,60,0.3) 100%)",
                    }}
                />

                <div className="flex flex-col gap-12">
                    {educationData.map((item, idx) => {
                        const isLeft = idx % 2 === 0;
                        return (
                            <div key={idx} className="relative flex items-center hide-cursor-effect">

                                <div className="w-1/2 pr-10 flex justify-end">
                                    {isLeft && <EduCard item={item} />}
                                </div>

                                <div className="absolute left-1/2 -translate-x-1/2 z-10 flex items-center justify-center">
                                    <div
                                        className="absolute h-px w-8"
                                        style={{
                                            background: item.borderColor,
                                            [isLeft ? "right" : "left"]: "100%",
                                            opacity: 0.6,
                                        }}
                                    />
                                    <div
                                        className="w-10 h-10 rounded-full flex items-center justify-center text-base z-10
                                                   transition-all duration-300 hover:scale-110"
                                        style={{
                                            background: `radial-gradient(circle, ${item.glowColor} 0%, rgba(15,15,25,0.9) 100%)`,
                                            border: `2px solid ${item.borderColor}`,
                                            boxShadow: `0 0 14px ${item.glowColor}`,
                                        }}
                                    >
                                        {item.icon}
                                    </div>
                                </div>

                                <div className="w-1/2 pl-10 flex justify-start">
                                    {!isLeft && <EduCard item={item} />}
                                </div>

                            </div>
                        );
                    })}
                </div>
            </div>

        </div>
    );
};
