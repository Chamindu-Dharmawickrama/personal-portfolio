import { useState } from "react";
import emailjs from "emailjs-com";
import { FaGithub, FaLinkedin, FaEnvelope, FaMapMarkerAlt, FaPaperPlane } from "react-icons/fa";
import { RevealOnScroll } from "../../common/RevealOnScroll";

const socials = [
    {
        label: "GitHub",
        href: "https://github.com/Chamindu-Dharmawickrema",
        icon: <FaGithub size={17} />,
        color: "#f3f4f6",
        colorBg: "rgba(243,244,246,0.07)",
    },
    {
        label: "LinkedIn",
        href: "https://www.linkedin.com/in/chamindu-dharmawickrema-066295312/",
        icon: <FaLinkedin size={17} />,
        color: "#0a66c2",
        colorBg: "rgba(10,102,194,0.12)",
    },
];

/* Contact Component */
export const Contact = () => {
    const [formData, setFormData] = useState({ name: "", email: "", message: "" });
    const [isLoading, setIsLoading] = useState(false);
    const [showSuccess, setShowSuccess] = useState(false);

    const handleChange = (field) => (e) =>
        setFormData((prev) => ({ ...prev, [field]: e.target.value }));

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsLoading(true);
        setShowSuccess(false);

        emailjs
            .sendForm(
                import.meta.env.VITE_SERVICE_ID,
                import.meta.env.VITE_TEMPLATE_ID,
                e.target,
                import.meta.env.VITE_PUBLIC_KEY
            )
            .then(() => {
                setIsLoading(false);
                setShowSuccess(true);
                setFormData({ name: "", email: "", message: "" });
                setTimeout(() => setShowSuccess(false), 4000);
            })
            .catch(() => {
                setIsLoading(false);
                alert("Oops! Something went wrong. Please try again.");
            });
    };

    return (
        <RevealOnScroll>
            <section id="contact" className="relative min-h-screen px-5 pt-[100px] pb-[120px] max-sm:px-5 max-sm:pt-[80px] max-sm:pb-[100px] flex flex-col items-center overflow-hidden">
                <div className="absolute top-[15%] left-1/2 -translate-x-1/2 w-[700px] h-[700px] max-sm:w-[400px] max-sm:h-[400px] bg-[radial-gradient(circle,rgba(37,99,235,0.07)_0%,transparent_70%)] max-sm:bg-[radial-gradient(circle,rgba(37,99,235,0.15)_0%,transparent_70%)] pointer-events-none z-0"></div>
                <div className="absolute bottom-[10%] right-[10%] w-[350px] h-[350px] max-sm:w-[250px] max-sm:h-[250px] bg-[radial-gradient(circle,rgba(103,232,249,0.05)_0%,transparent_70%)] max-sm:bg-[radial-gradient(circle,rgba(103,232,249,0.12)_0%,transparent_70%)] pointer-events-none z-0"></div>

                <div className="text-center mb-[64px] max-sm:mb-[40px] relative z-10">
                    <span className="inline-block text-[11px] max-sm:text-[10px] font-bold tracking-[4px] uppercase text-blue-400/80 mb-[14px] max-sm:mb-[10px]">Let's talk</span>
                    <h2 className="text-[clamp(1.6rem,3.5vw,2.5rem)] font-extrabold text-gray-100 m-0 mb-[22px] leading-[1.1]">
                        Get In{" "}
                        <span className="bg-[linear-gradient(to_right,#2563eb,#67e8f9)] bg-clip-text text-transparent">Touch</span>
                    </h2>
                    <p className="text-[14px] max-sm:text-[13px] text-white/50 m-0 max-w-[480px] max-sm:max-w-[320px] mx-auto leading-[1.7] font-light">
                        Have a project in mind or just want to say hi? My inbox is always open —
                        I'll get back to you as soon as possible.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-[1fr_1.5fr] gap-6 w-full max-w-[1000px] max-md:max-w-[580px] relative z-10">

                    <div className="flex flex-col gap-4 max-md:gap-3">

                        <div className="bg-[#14141e]/82 max-sm:bg-gradient-to-br max-sm:from-white/[0.04] max-sm:to-white/[0.01] backdrop-blur-[20px] border border-white/10 max-sm:border-white/[0.08] rounded-[20px] p-[28px] max-sm:p-[18px_20px] relative overflow-hidden transition-all duration-300 hover:border-blue-600/30 hover:shadow-[0_0_0_1px_rgba(37,99,235,0.1),0_20px_60px_rgba(0,0,0,0.5),0_0_40px_rgba(37,99,235,0.06)] hover:-translate-y-[3px] group flex flex-col max-sm:flex-row max-sm:items-center max-sm:gap-4 shadow-lg shadow-black/20">
                            <div className="absolute top-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-blue-600/50 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>

                            <div className="w-[44px] h-[44px] max-sm:w-[42px] max-sm:h-[42px] shrink-0 rounded-xl bg-blue-600/12 border border-blue-600/20 flex items-center justify-center mb-[14px] max-sm:mb-0 text-cyan-300 text-[18px] max-sm:text-[16px] transition-colors duration-300 group-hover:bg-blue-600/20 group-hover:border-cyan-300/40 max-sm:shadow-[0_0_15px_rgba(37,99,235,0.15)]">
                                <FaEnvelope />
                            </div>
                            <div className="min-w-0">
                                <p className="text-[10px] font-bold tracking-[3px] uppercase text-white/30 mb-[6px] max-sm:mb-1">Email</p>
                                <a
                                    href="mailto:chamindudharmawickrema@gmail.com"
                                    className="text-[14px] max-sm:text-[13px] font-semibold text-white/90 transition-colors duration-200 block truncate max-sm:break-all hover:text-cyan-300 drop-shadow-sm"
                                >
                                    chamindudharmawickrema@gmail.com
                                </a>
                            </div>
                        </div>

                        {/* Location card */}
                        <div className="bg-[#14141e]/82 max-sm:bg-gradient-to-br max-sm:from-white/[0.04] max-sm:to-white/[0.01] backdrop-blur-[20px] border border-white/10 max-sm:border-white/[0.08] rounded-[20px] p-[28px] max-sm:p-[18px_20px] relative overflow-hidden transition-all duration-300 hover:border-blue-600/30 hover:shadow-[0_0_0_1px_rgba(37,99,235,0.1),0_20px_60px_rgba(0,0,0,0.5),0_0_40px_rgba(37,99,235,0.06)] hover:-translate-y-[3px] group flex flex-col max-sm:flex-row max-sm:items-center max-sm:gap-4 shadow-lg shadow-black/20">
                            <div className="absolute top-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-blue-600/50 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>

                            <div className="w-[44px] h-[44px] max-sm:w-[42px] max-sm:h-[42px] shrink-0 rounded-xl bg-blue-600/12 border border-blue-600/20 flex items-center justify-center mb-[14px] max-sm:mb-0 text-cyan-300 text-[18px] max-sm:text-[16px] transition-colors duration-300 group-hover:bg-blue-600/20 group-hover:border-cyan-300/40 max-sm:shadow-[0_0_15px_rgba(37,99,235,0.15)]">
                                <FaMapMarkerAlt />
                            </div>
                            <div className="min-w-0">
                                <p className="text-[10px] font-bold tracking-[3px] uppercase text-white/30 mb-[6px] max-sm:mb-1">Location</p>
                                <span className="text-[14px] max-sm:text-[13px] font-semibold text-white/90 transition-colors duration-200 block truncate cursor-default hover:text-cyan-300 drop-shadow-sm">
                                    Sri Lanka 🇱🇰
                                </span>
                            </div>
                        </div>

                        {/* Socials */}
                        <div className="bg-[#14141e]/82 max-sm:bg-gradient-to-br max-sm:from-white/[0.04] max-sm:to-white/[0.01] backdrop-blur-[20px] border border-white/10 max-sm:border-white/[0.08] rounded-[20px] p-[28px] max-sm:p-[20px] flex-1 flex flex-col justify-center shadow-lg shadow-black/20">
                            <p className="text-[10px] font-bold tracking-[3px] uppercase text-white/30 mb-4 max-sm:mb-3">Connect with me</p>
                            <div className="grid grid-cols-2 max-sm:grid-cols-2 gap-2.5 max-sm:gap-2">
                                {socials.map((s) => (
                                    <a
                                        key={s.label}
                                        href={s.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center max-sm:justify-center gap-2.5 max-sm:gap-2 py-3 px-3.5 max-sm:py-2.5 max-sm:px-2 rounded-xl bg-white/5 border border-white/10 text-white/65 text-[13px] max-sm:text-[12px] font-semibold no-underline transition-all duration-250 cursor-pointer hover:-translate-y-[2px] hover:shadow-[0_8px_24px_rgba(0,0,0,0.3)] hover:bg-[var(--social-bg,rgba(37,99,235,0.1))] hover:border-[var(--social-color,rgba(37,99,235,0.4))] hover:text-[var(--social-color,#67e8f9)]"
                                        style={{
                                            "--social-color": s.color,
                                            "--social-bg": s.colorBg,
                                        }}
                                    >
                                        {s.icon}
                                        {s.label}
                                    </a>
                                ))}
                            </div>
                        </div>

                        <div className="flex items-center gap-2.5 py-[14px] px-5 max-sm:py-3 max-sm:px-4 bg-emerald-500/10 max-sm:bg-emerald-500/[0.08] border border-emerald-500/20 max-sm:border-emerald-500/30 rounded-[14px] mt-1 max-sm:mt-0 max-sm:shadow-[0_0_20px_rgba(16,185,129,0.08)]">
                            <span className="relative flex h-2 w-2 shrink-0">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75 max-sm:opacity-90"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500 shadow-[0_0_8px_#10b981] max-sm:shadow-[0_0_12px_#10b981]"></span>
                            </span>
                            <span className="text-[12.5px] max-sm:text-[11.5px] text-emerald-500/90 font-medium tracking-wide">
                                Available for freelance &amp; full-time opportunities
                            </span>
                        </div>
                    </div>

                    {/* Form */}
                    <div className="bg-[#14141e]/82 max-sm:bg-gradient-to-b max-sm:from-white/[0.05] max-sm:to-[#14141e]/90 backdrop-blur-[24px] border border-white/10 max-sm:border-white/[0.08] rounded-[24px] max-sm:rounded-[20px] p-[28px_22px] sm:p-[42px_40px] max-sm:p-[28px_20px] relative overflow-hidden shadow-[0_0_0_1px_rgba(37,99,235,0.06),0_32px_80px_rgba(0,0,0,0.5)] max-sm:shadow-[0_20px_60px_rgba(0,0,0,0.6)]">
                        <div className="absolute top-0 inset-x-0 h-[2px] max-sm:h-[1.5px] bg-[linear-gradient(90deg,transparent,#2563eb,#67e8f9,#2563eb,transparent)] opacity-60 max-sm:opacity-80"></div>

                        <h3 className="text-[18px] max-sm:text-[17px] font-bold text-gray-100 m-0 mb-1.5 drop-shadow-sm">Send a Message</h3>
                        <p className="text-[13px] max-sm:text-[12.5px] text-white/40 m-0 mb-8 max-sm:mb-6 font-light">
                            Fill out the form below and I'll respond within 24 hours.
                        </p>

                        <form onSubmit={handleSubmit} noValidate>

                            <div className="relative mb-5 max-sm:mb-4">
                                <input
                                    id="contact-name"
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    required
                                    className="w-full pt-[18px] max-sm:pt-[16px] px-4 max-sm:px-3 pb-2.5 max-sm:pb-2 bg-white/5 max-sm:bg-black/20 border border-white/10 max-sm:border-white/[0.06] rounded-xl max-sm:rounded-lg text-gray-100 text-[14px] max-sm:text-[13.5px] font-sans transition-all duration-300 outline-none box-border peer placeholder-transparent focus:border-blue-500/50 focus:bg-blue-600/5 focus:shadow-[0_0_0_3px_rgba(37,99,235,0.1)]"
                                    placeholder="Your name"
                                    onChange={handleChange("name")}
                                    autoComplete="name"
                                />
                                <label htmlFor="contact-name" className="absolute left-4 max-sm:left-3 top-1/2 -translate-y-1/2 text-[14px] max-sm:text-[13px] text-white/40 font-sans pointer-events-none transition-all duration-250 origin-left peer-focus:top-2 max-sm:peer-focus:top-1.5 peer-focus:translate-y-0 peer-focus:scale-75 peer-focus:text-cyan-400 peer-focus:font-semibold peer-[&:not(:placeholder-shown)]:top-2 max-sm:peer-[&:not(:placeholder-shown)]:top-1.5 peer-[&:not(:placeholder-shown)]:translate-y-0 peer-[&:not(:placeholder-shown)]:scale-75 peer-[&:not(:placeholder-shown)]:text-cyan-400 peer-[&:not(:placeholder-shown)]:font-semibold">
                                    Your Name
                                </label>
                            </div>

                            <div className="relative mb-5 max-sm:mb-4">
                                <input
                                    id="contact-email"
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    required
                                    className="w-full pt-[18px] max-sm:pt-[16px] px-4 max-sm:px-3 pb-2.5 max-sm:pb-2 bg-white/5 max-sm:bg-black/20 border border-white/10 max-sm:border-white/[0.06] rounded-xl max-sm:rounded-lg text-gray-100 text-[14px] max-sm:text-[13.5px] font-sans transition-all duration-300 outline-none box-border peer placeholder-transparent focus:border-blue-500/50 focus:bg-blue-600/5 focus:shadow-[0_0_0_3px_rgba(37,99,235,0.1)]"
                                    placeholder="your@email.com"
                                    onChange={handleChange("email")}
                                    autoComplete="email"
                                />
                                <label htmlFor="contact-email" className="absolute left-4 max-sm:left-3 top-1/2 -translate-y-1/2 text-[14px] max-sm:text-[13px] text-white/40 font-sans pointer-events-none transition-all duration-250 origin-left peer-focus:top-2 max-sm:peer-focus:top-1.5 peer-focus:translate-y-0 peer-focus:scale-75 peer-focus:text-cyan-400 peer-focus:font-semibold peer-[&:not(:placeholder-shown)]:top-2 max-sm:peer-[&:not(:placeholder-shown)]:top-1.5 peer-[&:not(:placeholder-shown)]:translate-y-0 peer-[&:not(:placeholder-shown)]:scale-75 peer-[&:not(:placeholder-shown)]:text-cyan-400 peer-[&:not(:placeholder-shown)]:font-semibold">
                                    Email Address
                                </label>
                            </div>

                            <div className="relative mb-5 max-sm:mb-5">
                                <textarea
                                    id="contact-message"
                                    name="message"
                                    value={formData.message}
                                    required
                                    className="w-full pt-5 max-sm:pt-4 px-4 max-sm:px-3 pb-2.5 max-sm:pb-2 bg-white/5 max-sm:bg-black/20 border border-white/10 max-sm:border-white/[0.06] rounded-xl max-sm:rounded-lg text-gray-100 text-[14px] max-sm:text-[13.5px] font-sans transition-all duration-300 outline-none box-border peer placeholder-transparent focus:border-blue-500/50 focus:bg-blue-600/5 focus:shadow-[0_0_0_3px_rgba(37,99,235,0.1)] resize-none h-[140px] max-sm:h-[120px]"
                                    placeholder="Your message..."
                                    onChange={handleChange("message")}
                                />
                                <label htmlFor="contact-message" className="absolute left-4 max-sm:left-3 top-[18px] max-sm:top-[16px] text-[14px] max-sm:text-[13px] text-white/40 font-sans pointer-events-none transition-all duration-250 origin-left peer-focus:top-1.5 max-sm:peer-focus:top-1 peer-focus:scale-75 peer-focus:text-cyan-400 peer-focus:font-semibold peer-[&:not(:placeholder-shown)]:top-1.5 max-sm:peer-[&:not(:placeholder-shown)]:top-1 peer-[&:not(:placeholder-shown)]:scale-75 peer-[&:not(:placeholder-shown)]:text-cyan-400 peer-[&:not(:placeholder-shown)]:font-semibold">
                                    Your Message
                                </label>
                            </div>

                            <button
                                type="submit"
                                id="contact-submit"
                                disabled={isLoading}
                                className="w-full py-[15px] max-sm:py-[14px] px-6 rounded-xl max-sm:rounded-lg border-none bg-[linear-gradient(135deg,#1d4ed8,#2563eb_50%,#0284c7)] bg-[size:200%_200%] bg-[position:0%_50%] text-white text-[14.5px] max-sm:text-[14px] font-bold font-sans tracking-[0.5px] cursor-pointer transition-all duration-300 ease-out flex items-center justify-center gap-2.5 relative overflow-hidden mt-1 max-sm:mt-2 group/btn disabled:opacity-65 disabled:cursor-not-allowed hover:not(:disabled):bg-[position:100%_50%] hover:not(:disabled):-translate-y-0.5 hover:not(:disabled):shadow-[0_0_0_1px_rgba(37,99,235,0.4),0_12px_40px_rgba(37,99,235,0.35),0_0_60px_rgba(103,232,249,0.1)] max-sm:shadow-[0_8px_24px_rgba(37,99,235,0.25)]"
                            >
                                <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.08),transparent)] opacity-0 transition-opacity duration-300 group-hover/btn:opacity-100 pointer-events-none"></div>
                                {isLoading ? (
                                    <>
                                        <span className="w-[18px] h-[18px] border-2 border-white/30 border-t-white rounded-full animate-spin shrink-0" />
                                        Sending…
                                    </>
                                ) : (
                                    <>
                                        <FaPaperPlane size={14} className="relative z-10 max-sm:w-[13px] max-sm:h-[13px]" />
                                        <span className="relative z-10">Send Message</span>
                                        <svg
                                            className="transition-transform duration-250 ease-out group-hover/btn:not(:disabled):translate-x-1 relative z-10"
                                            width="16"
                                            height="16"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth="2.5"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        >
                                            <line x1="5" y1="12" x2="19" y2="12" />
                                            <polyline points="12 5 19 12 12 19" />
                                        </svg>
                                    </>
                                )}
                            </button>

                            <style>{`
                            @keyframes contactFadeIn {
                                from { opacity: 0; transform: translateY(8px); }
                                to { opacity: 1; transform: translateY(0); }
                            }
                        `}</style>
                            {showSuccess && (
                                <div className="flex items-center gap-2.5 py-3.5 px-[18px] max-sm:py-3 max-sm:px-4 rounded-xl max-sm:rounded-lg bg-emerald-500/10 border border-emerald-500/30 max-sm:border-emerald-500/40 text-emerald-500 max-sm:text-emerald-400 text-[13.5px] max-sm:text-[13px] font-semibold mt-3.5 max-sm:mt-4 animate-[contactFadeIn_0.4s_ease_forwards] max-sm:shadow-[0_0_15px_rgba(16,185,129,0.1)]">
                                    <span className="w-[22px] h-[22px] bg-emerald-500/20 rounded-full flex items-center justify-center shrink-0">
                                        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                                            <polyline points="20 6 9 17 4 12" />
                                        </svg>
                                    </span>
                                    Message sent! I'll get back to you soon.
                                </div>
                            )}
                        </form>
                    </div>
                </div>
            </section>
        </RevealOnScroll>
    );
};
