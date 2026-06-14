import { useState } from "react";

const certificationData = [
    {
        title: "Java Object-Oriented Programming",
        issuer: "Kathryn Hodge",
        platform: "LinkedIn Learning",
        description: "Comprehensive certification covering core OOP principles in Java including classes, inheritance, polymorphism, and encapsulation.",
        icon: "☕",
        tag: "Programming",
        tagColor: "from-orange-400 to-amber-400",
        glowColor: "rgba(251,146,60,0.3)",
        borderColor: "rgba(251,146,60,0.5)",
        type: "Certificate",
        image: "/certificates/Java OOP.webp",
    },
    {
        title: "Hult Prize On-Campus Qualifier",
        issuer: "Hult Prize Foundation",
        platform: "Hult Prize",
        description: "Participated in the Hult Prize On-Campus Qualifier Round — a global social entrepreneurship competition challenging students to solve the world's toughest issues.",
        icon: "🏆",
        tag: "Competition",
        tagColor: "from-yellow-400 to-orange-400",
        glowColor: "rgba(250,204,21,0.3)",
        borderColor: "rgba(250,204,21,0.5)",
        type: "Achievement",
        image: "/certificates/HULT PRIZE.webp",
    },
    {
        title: "AI Engineering Bootcamp",
        issuer: "STEM Link",
        platform: "Generative AI Course",
        period: "2025 – 2026",
        description: "Covered Generative AI fundamentals, RAG-based systems, multi-agent architectures, LLM fine-tuning concepts, and transformer-based model understanding.",
        icon: "🤖",
        tag: "AI / ML",
        tagColor: "from-pink-400 to-rose-400",
        glowColor: "rgba(244,114,182,0.3)",
        borderColor: "rgba(244,114,182,0.5)",
        type: "Certificate",
        highlight: "Outstanding",
        image: "/certificates/AI Engineering.webp",
    },
];

export const Certification = () => {
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

    const prev = () => goTo((active - 1 + certificationData.length) % certificationData.length);
    const next = () => goTo((active + 1) % certificationData.length);

    const cert = certificationData[active];

    return (
        <div className="mt-16 w-full max-w-xl mx-auto px-7" style={{ animation: "certFadeIn 0.35s ease both" }}>
            {/* Slider card */}
            <div
                className="relative rounded-2xl overflow-hidden transition-all duration-500 hide-cursor-effect"
                style={{
                    border: "1px solid rgba(255,255,255,0.15)",
                    background: "rgba(255,255,255,0.02)",
                }}
            >
                {/* ── Full certificate image ── */}
                <div
                    className="relative overflow-hidden"
                    style={{ opacity: fading ? 0 : 1, transition: "opacity 220ms ease" }}
                >
                    <img
                        src={cert.image}
                        alt={`${cert.title} certificate`}
                        className="w-full h-auto object-contain block"
                        loading="lazy"
                        style={{ maxHeight: "280px", objectFit: "contain", background: "#fff" }}
                    />

                    {/* Gradient overlay at bottom of image */}
                    <div
                        className="absolute bottom-0 left-0 right-0 h-16 pointer-events-none"
                        style={{ background: "linear-gradient(to top, rgba(10,10,15,0.9), transparent)" }}
                    />

                    {/* Nav arrows on image */}
                    <button
                        onClick={prev}
                        className="absolute left-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full flex items-center justify-center
                                   text-white text-sm font-bold cursor-pointer z-10
                                   transition-all duration-200 hover:scale-110 active:scale-95"
                        style={{ background: "rgba(0,0,0,0.5)", border: "1px solid rgba(255,255,255,0.15)", backdropFilter: "blur(6px)" }}
                    >
                        ‹
                    </button>
                    <button
                        onClick={next}
                        className="absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full flex items-center justify-center
                                   text-white text-sm font-bold cursor-pointer z-10
                                   transition-all duration-200 hover:scale-110 active:scale-95"
                        style={{ background: "rgba(0,0,0,0.5)", border: "1px solid rgba(255,255,255,0.15)", backdropFilter: "blur(6px)" }}
                    >
                        ›
                    </button>
                </div>

                {/* Card info */}
                <div
                    className="p-5"
                    style={{ opacity: fading ? 0 : 1, transition: "opacity 220ms ease" }}
                >
                    <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center gap-2">
                            <span className="text-xl">{cert.icon}</span>
                            <span
                                className="text-[10px] font-bold uppercase tracking-widest px-2.5 py-0.5 rounded-full"
                                style={{
                                    background: cert.glowColor,
                                    border: `1px solid ${cert.borderColor}`,
                                    color: "rgba(255,255,255,0.7)",
                                }}
                            >
                                {cert.tag}
                            </span>
                            <span className="text-[10px] text-gray-500 uppercase tracking-wide">{cert.type}</span>
                        </div>

                        {cert.highlight && (
                            <span
                                className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full flex items-center gap-1"
                                style={{
                                    background: cert.glowColor,
                                    border: `1px solid ${cert.borderColor}`,
                                    color: "rgba(255,255,255,0.75)",
                                }}
                            >
                                ⭐ {cert.highlight}
                            </span>
                        )}
                    </div>

                    <h4 className="text-white font-bold text-[16px] leading-snug mb-1">{cert.title}</h4>

                    <div className="flex items-center flex-wrap gap-1.5 mb-3">
                        <span className={`text-[12px] font-semibold bg-gradient-to-r ${cert.tagColor} bg-clip-text text-transparent`}>
                            {cert.issuer}
                        </span>
                        <span className="text-gray-600 text-[11px]">·</span>
                        <span className="text-[11px] text-gray-500">{cert.platform}</span>
                        {cert.period && (
                            <>
                                <span className="text-gray-600 text-[11px]">·</span>
                                <span className="text-[11px] text-gray-500">{cert.period}</span>
                            </>
                        )}
                    </div>
                    <p className="text-[12px] text-gray-400 leading-relaxed mb-4">{cert.description}</p>

                    <div className="flex items-center justify-between pt-3 border-t border-white/[0.06]">
                        <div className="flex items-center gap-2">
                            <div
                                className="w-4 h-4 rounded-full flex items-center justify-center text-[10px]"
                                style={{ background: cert.glowColor }}
                            >
                                ✓
                            </div>
                            <span className="text-[11px] text-gray-500">Verified Achievement</span>
                        </div>

                        <div className="flex items-center gap-1.5">
                            {certificationData.map((c, i) => (
                                <button
                                    key={i}
                                    onClick={() => goTo(i)}
                                    className="rounded-full transition-all duration-300 cursor-pointer"
                                    style={{
                                        width: i === active ? "20px" : "6px",
                                        height: "6px",
                                        background: i === active ? c.borderColor : "rgba(255,255,255,0.2)",
                                        boxShadow: i === active ? `0 0 6px ${c.glowColor}` : "none",
                                    }}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Thumbnail strip */}
            <div className="flex gap-3 mt-4 justify-center">
                {certificationData.map((c, i) => (
                    <button
                        key={i}
                        onClick={() => setActive(i)}
                        className="rounded-xl overflow-hidden transition-all duration-300 cursor-pointer shrink-0"
                        style={{
                            width: "80px",
                            height: "52px",
                            border: i === active
                                ? `2px solid ${c.borderColor}`
                                : "2px solid rgba(255,255,255,0.08)",
                            boxShadow: i === active ? `0 0 12px ${c.glowColor}` : "none",
                            opacity: i === active ? 1 : 0.45,
                        }}
                    >
                        <img
                            src={c.image}
                            alt={c.title}
                            className="w-full h-full object-cover"
                            style={{ objectPosition: "top", background: "#fff" }}
                        />
                    </button>
                ))}
            </div>
        </div>
    );
};
