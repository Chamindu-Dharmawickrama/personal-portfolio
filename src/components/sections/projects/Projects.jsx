import { useState, useEffect } from "react";
import { RevealOnScroll } from "../../common/RevealOnScroll";
import { FaProjectDiagram, FaGithub } from "react-icons/fa";

export const Projects = () => {
    const projects = [
        {
            name: "SHUTR",
            description:
                "Built a full-stack AI-powered platform to connect clients with photographers across Sri Lanka, solving the challenge of finding photographers with suitable availability, pricing, and styles. The system supports intelligent search, real-time communication, portfolio management, booking, and scheduling—serving both professional and emerging photographers.",
            technologies: ["Next.js", "Redux", "Django", "MangoDB"],
            pic: "../projects/shutr.png",
            link: "https://shutr.live/",
            git: "https://github.com/SHUTR-TEAM?view_as=public",
        },
        {
            name: "Plane Ticket Booking System",
            description:
                "Built a console-based Java application to manage plane seat reservations, using OOP principles and file I/O. Users can book seats, calculate prices, and store ticket details in uniquely named text files",
            technologies: ["Java", "OOP"],
            pic: "../projects/booking.png",
            link: "",
            git: "https://github.com/Chamindu-Dharmawickrema/plane-ticket-booking-system-java.git",
        },
        {
            name: "Student Management System",
            description:
                "Built a full stack student management system with role based access, featuring JWT auth, search, course management, and filtering. The system supports both student and admin roles, allowing students to view their courses and grades, while admins can manage all student data.",
            technologies: [
                "React",
                "Node.js",
                "Express",
                "PostgreSQL",
                "TailwindCSS",
            ],
            pic: "../projects/sms.png",
            link: "",
            git: "",
        },
        {
            name: "ARCV Coffee Shop Website",
            description:
                "Developed a visually appealing and fully responsive coffee shop website featuring product listings, customer reviews, and social media integration. Emphasized clean UI/UX design and mobile-first responsiveness.",
            technologies: ["HTML", "CSS", "JavaScript"],
            pic: "../projects/coffee.png",
            link: "",
            git: "",
        },
        {
            name: "Student Progression Outcome Visualizer",
            description:
                "Created a Python-based system to classify and visualize student progression outcomes based on credit inputs. Integrated data validation, histogram visualization, and file-based result storage.",
            technologies: ["Python"],
            pic: "../projects/progression.png",
            link: "",
            git: "https://github.com/Chamindu-Dharmawickrema/student-progression-outcome-visualizer-python.git",
        },
        {
            name: "EverGreen RICC - Website",
            description:
                "Designed and developed a static website titled Plants Save Life on Earth to raise awareness of environmental conservation. The site includes pages such as Home, Gallery, Quiz, Shop, Feedback, and About Us, built using HTML, CSS, and JavaScript.",
            technologies: ["HTML", "CSS", "JavaScript"],
            pic: "../projects/evergreen.png",
            link: "",
            git: "",
        },
        {
            name: "Chroma Craze",
            description:
                "Developed a fully responsive personal portfolio website using ReactJS and TailwindCSS. The site showcases my skills, projects, and includes smooth animations for an enhanced user experience across all devices.",
            technologies: ["React", "TailwindCSS"],
            pic: "../projects/chroma.png",
            link: "https://chromacraze.netlify.app/",
            git: "",
        },
        {
            name: "Portfolio Website",
            description:
                "Developed a fully responsive web application for a Sri Lankan art workshop business using React.js and Tailwind CSS. Implemented interactive gallery features and conversion-optimized design that enhanced client's online presence and workshop bookings.",
            technologies: ["React", "TailwindCSS"],
            pic: "../projects/portfolio.png",
            link: "https://chamindudharmawickrema.netlify.app/",
            git: "https://github.com/Chamindu-Dharmawickrema/personal-portfolio.git",
        },
    ];

    function useWindowWidth() {
        const [width, setWidth] = useState(window.innerWidth);

        useEffect(() => {
            const handleResize = () => setWidth(window.innerWidth);
            window.addEventListener("resize", handleResize);
            return () => window.removeEventListener("resize", handleResize);
        }, []);

        return width;
    }

    const width = useWindowWidth();
    const delay = width <= 640 ? "250px" : "-50px";

    // Pagination state
    const [currentPage, setCurrentPage] = useState(1);
    const projectsPerPage = 3;
    const totalPages = Math.ceil(projects.length / projectsPerPage);

    const paginateProjects = () => {
        if (width <= 640) {
            const startIndex = (currentPage - 1) * projectsPerPage;
            return projects.slice(startIndex, startIndex + projectsPerPage);
        }
        return projects; // full view on larger screens
    };

    const handleNext = () => {
        if (currentPage < totalPages) {
            setCurrentPage((prev) => prev + 1);
        }
    };

    const handlePrev = () => {
        if (currentPage > 1) {
            setCurrentPage((prev) => prev - 1);
        }
    };

    return (
        <RevealOnScroll delay={delay}>
            <section
                id="project"
                className="min-h-screen flex flex-col items-center justify-center"
            >
                <div className="max-w-3xl mx-auto px-4 mt-10">
                    <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-600 to-cyan-300 bg-clip-text text-transparent">
                        My Projects
                    </h2>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-13 max-w-7xl mx-auto mt-6 p-10">
                    {paginateProjects().map((project, index) => (
                        <div
                            key={index}
                            className="border border-white/10 rounded cursor-pointer max-w-[375px] shadow-xl transition-all duration-500 hover:scale-105 hover:bg-white/5 hover:border-blue-700 hover:shadow-[0_0_8px_3px_rgba(59,130,246,0.5)]"
                        >
                            <div className="flex justify-center items-center mt-3">
                                <img
                                    src={project.pic}
                                    className="w-[350px] rounded"
                                    alt={project.name}
                                />
                            </div>
                            <div>
                                <h2 className="text-[20px] font-semibold mt-4 ml-4">
                                    {project.name}
                                </h2>
                            </div>
                            <div>
                                <p className="text-[16px] p-4 text-justify text-gray-300 leading-8">
                                    {project.description}
                                </p>
                            </div>
                            <div className="flex flex-row ml-3 mb-4 flex-wrap">
                                {project.technologies.map((tech, ind) => (
                                    <div
                                        key={ind}
                                        className="mr-3 text-[14px] text-gray-400 font-semibold mb-4 border border-blue-400/20 px-5 py-1 rounded-2xl"
                                    >
                                        {tech}
                                    </div>
                                ))}
                            </div>

                            {/*Link to git if available and add link if available */}
                            <div className="flex justify-between items-center mb-4 px-4">
                                {project.link && (
                                    <a
                                        href={project.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="border rounded-2xl px-4 py-1 font-semibold text-[14px] text-blue-400 hover:text-white "
                                    >
                                        <FaProjectDiagram className="inline-block mr-2" />
                                        View Project
                                    </a>
                                )}
                                {project.git && (
                                    <a
                                        href={project.git}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="border rounded-2xl px-4 py-1.5 font-semibold text-[14px] text-blue-400 hover:text-white "
                                    >
                                        <FaGithub className="inline-block mr-2" />
                                        View Code
                                    </a>
                                )}
                            </div>
                        </div>
                    ))}
                </div>

                {/* Pagination for small screens */}
                {width <= 640 && (
                    <div className="flex gap-4 mt-4">
                        <a href="#project">
                            <button
                                onClick={handlePrev}
                                disabled={currentPage === 1}
                                className="px-4 py-2 bg-blue-500 text-white rounded disabled:opacity-50"
                            >
                                Previous
                            </button>
                        </a>
                        <a href="#project">
                            <button
                                onClick={handleNext}
                                disabled={currentPage === totalPages}
                                className="px-4 py-2 bg-blue-500 text-white rounded disabled:opacity-50"
                            >
                                Next
                            </button>
                        </a>
                    </div>
                )}
            </section>
        </RevealOnScroll>
    );
};
