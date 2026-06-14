import { useState, useEffect, useRef, useCallback, memo } from "react";
import { FaGithub, FaExternalLinkAlt, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import "./Projects.css";
import { RevealOnScroll } from "../../common/RevealOnScroll";

const projects = [
    {
        name: "Ask Your Docs",
        tagline: "AI-Powered Document Q&A System",
        description:
            "Built a full stack Retrieval Augmented Generation (RAG) application that enables users to upload documents and ask context aware questions using semantic search and LLMs. Designed a scalable backend pipeline for document ingestion, chunking, embedding, and retrieval, with a modern React based frontend.",
        technologies: ["FastAPI", "LangChain", "LangGraph", "GPT-4", "Pinecone", "React", "TypeScript", "PostgreSQL"],
        pic: "../projects/askyourdocs.webp",
        link: "https://ikms-rag.vercel.app/",
        git: "https://github.com/Chamindu-Dharmawickrama/ikms-multi-agent-rag",
        accent: "#3b82f6",
        accentRgb: "59,130,246",
    },
    {
        name: "SHUTR",
        tagline: "AI-Powered Photography Platform",
        description:
            "Built a full-stack AI-powered platform to connect clients with photographers across Sri Lanka, solving the challenge of finding photographers with suitable availability, pricing, and styles. The system supports intelligent search, real-time communication, portfolio management, booking, and scheduling.",
        technologies: ["Next.js", "Redux", "Django", "MongoDB"],
        pic: "../projects/shutr.webp",
        link: "https://shutr.live/",
        git: "https://github.com/SHUTR-TEAM?view_as=public",
        accent: "#6366f1",
        accentRgb: "99,102,241",
    },
    {
        name: "Student Management System",
        tagline: "Role-Based Academic Platform",
        description:
            "Built a full-stack student management system with role-based access, featuring JWT auth, search, course management, and filtering. Supports both student and admin roles for managing courses and grades.",
        technologies: ["React", "Node.js", "Express", "PostgreSQL", "TailwindCSS"],
        pic: "../projects/sms.webp",
        link: "",
        git: "",
        accent: "#22d3ee",
        accentRgb: "34,211,238",
    },
    {
        name: "ARCV Coffee Shop",
        tagline: "Responsive Lifestyle Website",
        description:
            "Developed a visually appealing and fully responsive coffee shop website featuring product listings, customer reviews, and social media integration. Emphasized clean UI/UX design and mobile-first responsiveness.",
        technologies: ["HTML", "CSS", "JavaScript"],
        pic: "../projects/coffee.webp",
        link: "",
        git: "",
        accent: "#f59e0b",
        accentRgb: "245,158,11",
    },
    {
        name: "Chroma Craze",
        tagline: "Animated Portfolio Experience",
        description:
            "Developed a fully responsive personal portfolio website using ReactJS and TailwindCSS. The site showcases skills and projects with smooth animations for an enhanced user experience across all devices.",
        technologies: ["React", "TailwindCSS"],
        pic: "../projects/chroma.webp",
        link: "https://chromacraze.netlify.app/",
        git: "",
        accent: "#ec4899",
        accentRgb: "236,72,153",
    },
    {
        name: "Portfolio Website",
        tagline: "Art Workshop Business Site",
        description:
            "Developed a fully responsive web application for a Sri Lankan art workshop business using React.js and Tailwind CSS. Implemented interactive gallery features and conversion-optimized design.",
        technologies: ["React", "TailwindCSS"],
        pic: "../projects/portfolio.webp",
        link: "https://chamindudharmawickrema.netlify.app/",
        git: "https://github.com/Chamindu-Dharmawickrema/personal-portfolio.git",
        accent: "#10b981",
        accentRgb: "16,185,129",
    },
    {
        name: "EverGreen RICC",
        tagline: "Environmental Awareness Website",
        description:
            "Designed and developed a static website to raise awareness of environmental conservation. The site includes pages such as Home, Gallery, Quiz, Shop, Feedback, and About Us.",
        technologies: ["HTML", "CSS", "JavaScript"],
        pic: "../projects/evergreen.webp",
        link: "",
        git: "",
        accent: "#84cc16",
        accentRgb: "132,204,22",
    },
    {
        name: "Plane Ticket Booking",
        tagline: "Console-Based Reservation System",
        description:
            "Built a console-based Java application to manage plane seat reservations, using OOP principles and file I/O. Users can book seats, calculate prices, and store ticket details in uniquely named text files.",
        technologies: ["Java", "OOP"],
        pic: "../projects/booking.webp",
        link: "",
        git: "https://github.com/Chamindu-Dharmawickrema/plane-ticket-booking-system-java.git",
        accent: "#f97316",
        accentRgb: "249,115,22",
    },
    {
        name: "Progression Visualizer",
        tagline: "Student Outcome Analytics Tool",
        description:
            "Created a Python-based system to classify and visualize student progression outcomes based on credit inputs. Integrated data validation, histogram visualization, and file-based result storage.",
        technologies: ["Python"],
        pic: "../projects/progression.webp",
        link: "",
        git: "https://github.com/Chamindu-Dharmawickrema/student-progression-outcome-visualizer-python.git",
        accent: "#a78bfa",
        accentRgb: "167,139,250",
    },
];

/* Laptop Mockup Component — memoized to prevent re-render on every project switch */
const LaptopMockup = memo(({ src, alt, accent }) => (
    <div className="laptop-wrapper">
        <div className="laptop-body" style={{ "--accent": accent }}>
            <div className="laptop-screen-bezel">
                <div className="laptop-camera" />
                <div className="laptop-screen">
                    {/* loading="lazy" defers off-screen decode; decoding="async" moves it off main thread */}
                    <img src={src} alt={alt} className="laptop-screenshot" loading="lazy" decoding="async" />
                    <div className="laptop-glare" />
                </div>
            </div>
            <div className="laptop-hinge" />
            <div className="laptop-base">
                <div className="laptop-trackpad" />
            </div>
        </div>
    </div>
));
LaptopMockup.displayName = "LaptopMockup";

/* Main Component */
export const Projects = () => {
    const [current, setCurrent] = useState(0);
    const [animating, setAnimating] = useState(false);
    const [direction, setDirection] = useState(null); // 'next' | 'prev'
    const timeoutRef = useRef(null);

    const total = projects.length;
    const prev = (current - 1 + total) % total;
    const next = (current + 1) % total;
    const prevPrev = (current - 2 + total) % total;
    const nextNext = (current + 2) % total;

    const goTo = useCallback((dir) => {
        if (animating) return;
        setDirection(dir);
        setAnimating(true);
        clearTimeout(timeoutRef.current);
        timeoutRef.current = setTimeout(() => {
            setCurrent((c) => dir === "next" ? (c + 1) % total : (c - 1 + total) % total);
            setAnimating(false);
            setDirection(null);
        }, 420);
    }, [animating, total]);

    useEffect(() => () => clearTimeout(timeoutRef.current), []);

    // Arrow key navigation
    useEffect(() => {
        const handleKey = (e) => {
            if (e.key === "ArrowRight") goTo("next");
            if (e.key === "ArrowLeft") goTo("prev");
        };
        window.addEventListener("keydown", handleKey);
        return () => window.removeEventListener("keydown", handleKey);
    }, [animating, current]);

    const project = projects[current];

    return (
        <RevealOnScroll>
            <section id="project" className="projects-section">
                <div className="projects-header">
                    <h2 className="projects-title">
                        My{" "}
                        <span className="projects-title-accent">
                            Projects
                        </span>
                    </h2>
                    <p className="projects-subtitle">
                        {current + 1} / {total} — Navigate to explore all projects
                    </p>
                </div>

                <div className="card-stack-scene">

                    <div
                        className={`card-ghost card-ghost-far card-ghost-left ${animating && direction === "next" ? "ghost-slide-left" : ""} ${animating && direction === "prev" ? "ghost-slide-right" : ""}`}
                        style={{ "--ghost-accent": projects[prevPrev].accent }}
                    />
                    <div
                        className={`card-ghost card-ghost-far card-ghost-right ${animating && direction === "next" ? "ghost-slide-left" : ""} ${animating && direction === "prev" ? "ghost-slide-right" : ""}`}
                        style={{ "--ghost-accent": projects[nextNext].accent }}
                    />

                    <div
                        className={`card-ghost card-ghost-near card-ghost-left ${animating && direction === "next" ? "ghost-slide-left" : ""} ${animating && direction === "prev" ? "ghost-slide-right" : ""}`}
                        style={{ "--ghost-accent": projects[prev].accent }}
                    />
                    <div
                        className={`card-ghost card-ghost-near card-ghost-right ${animating && direction === "next" ? "ghost-slide-left" : ""} ${animating && direction === "prev" ? "ghost-slide-right" : ""}`}
                        style={{ "--ghost-accent": projects[next].accent }}
                    />

                    <div
                        className={`main-card ${animating ? (direction === "next" ? "card-exit-left" : "card-exit-right") : ""}`}
                        style={{
                            "--card-accent": project.accent,
                            "--card-accent-rgb": project.accentRgb,
                        }}
                    >
                        <div className="card-glow-border" />

                        <div className="card-interior">

                            <div className="card-info-panel">
                                <div className="card-project-number">
                                    {String(current + 1).padStart(2, "0")}
                                </div>

                                <h3 className="card-project-name">{project.name}</h3>
                                <p className="card-project-tagline" style={{ color: project.accent }}>
                                    {project.tagline}
                                </p>

                                <p className="card-project-desc">{project.description}</p>

                                <div className="card-tech-stack">
                                    <span className="card-tech-label">Tech Stack</span>
                                    <div className="card-tech-pills">
                                        {project.technologies.map((tech, i) => (
                                            <span
                                                key={i}
                                                className="tech-pill"
                                                style={{
                                                    borderColor: `rgba(${project.accentRgb},0.4)`,
                                                    color: project.accent,
                                                    background: `rgba(${project.accentRgb},0.08)`,
                                                }}
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                <div className="card-actions">
                                    {project.link && (
                                        <a
                                            href={project.link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="card-btn card-btn-primary"
                                            style={{
                                                background: `rgba(${project.accentRgb},0.15)`,
                                                borderColor: project.accent,
                                                color: project.accent,
                                            }}
                                        >
                                            <FaExternalLinkAlt size={13} />
                                            Live Demo
                                        </a>
                                    )}
                                    {project.git && (
                                        <a
                                            href={project.git}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="card-btn card-btn-secondary"
                                        >
                                            <FaGithub size={14} />
                                            View Code
                                        </a>
                                    )}
                                </div>
                            </div>

                            <div className="card-laptop-panel">
                                <LaptopMockup
                                    src={project.pic}
                                    alt={project.name}
                                    accent={project.accent}
                                />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Navigation Controls */}
                <div className="nav-controls">
                    <button
                        className="nav-btn nav-btn-prev"
                        onClick={() => goTo("prev")}
                        aria-label="Previous project"
                        style={{ "--btn-accent": project.accent }}
                    >
                        <FaChevronLeft size={18} />
                    </button>

                    <div className="nav-dots">
                        {projects.map((p, i) => (
                            <button
                                key={i}
                                className={`nav-dot ${i === current ? "nav-dot-active" : ""}`}
                                style={i === current ? { background: project.accent, boxShadow: `0 0 10px ${project.accent}` } : {}}
                                onClick={() => {
                                    if (i !== current && !animating) {
                                        setDirection(i > current ? "next" : "prev");
                                        setAnimating(true);
                                        clearTimeout(timeoutRef.current);
                                        timeoutRef.current = setTimeout(() => {
                                            setCurrent(i);
                                            setAnimating(false);
                                            setDirection(null);
                                        }, 420);
                                    }
                                }}
                                aria-label={`Go to project ${i + 1}`}
                            />
                        ))}
                    </div>

                    <button
                        className="nav-btn nav-btn-next"
                        onClick={() => goTo("next")}
                        aria-label="Next project"
                        style={{ "--btn-accent": project.accent }}
                    >
                        <FaChevronRight size={18} />
                    </button>
                </div>
            </section>
        </RevealOnScroll>
    );
};
