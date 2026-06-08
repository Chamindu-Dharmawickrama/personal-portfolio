import { useState } from "react";
import { RevealOnScroll } from "../../common/RevealOnScroll";
import emailjs from "emailjs-com";

export const Contact = () => {
    //use state for store the details
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });

    const [isLoading, setIsLoading] = useState(false);
    const [showSuccess, setShowSuccess] = useState(false);

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
            .then((result) => {
                setIsLoading(false);
                setShowSuccess(true);
                setFormData({ name: "", email: "", message: "" });

                setTimeout(() => {
                    setShowSuccess(false);
                }, 3000);
            })
            .catch((error) => {
                setIsLoading(false);
                alert("Oops! Something went wrong. Please try again.");
            });
    };

    return (
        <section
            id="contact"
            className="min-h-screen flex items-center justify-center py-20"
        >
            <RevealOnScroll delay={"-10px"}>
                <div className="px-4 w-full min-w-[350px] md:w-[550px] sm:w-2/3 p-6 -mt-20">
                    <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
                        Get In Touch
                    </h2>

                    <form className="space-y-6" onSubmit={handleSubmit}>
                        <div className="relative">
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={formData.name}
                                required
                                className="w-full px-4 bg-white/5 border border-white/10 rounded py-3 text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5"
                                placeholder="Name..."
                                onChange={(e) =>
                                    setFormData({
                                        ...formData,
                                        name: e.target.value,
                                    })
                                }
                            />
                        </div>

                        <div className="relative">
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                required
                                className="w-full px-4 bg-white/5 border border-white/10 rounded py-3 text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5"
                                placeholder="Your Email..."
                                onChange={(e) =>
                                    setFormData({
                                        ...formData,
                                        email: e.target.value,
                                    })
                                }
                            />
                        </div>

                        <div className="relative">
                            <textarea
                                id="name"
                                name="name"
                                value={formData.message}
                                required
                                rows={5}
                                className="w-full px-4 bg-white/5 border border-white/10 rounded py-3 text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5"
                                placeholder="Your Message..."
                                onChange={(e) =>
                                    setFormData({
                                        ...formData,
                                        message: e.target.value,
                                    })
                                }
                            />
                        </div>

                        <button
                            type="submit"
                            disabled={isLoading}
                            className={`w-full py-3 px-6 rounded font-medium transition-all duration-300 relative overflow-hidden ${
                                isLoading
                                    ? "bg-blue-400 cursor-not-allowed"
                                    : "bg-blue-500 hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)]"
                            } text-white`}
                        >
                            {isLoading ? (
                                <div className="flex items-center justify-center">
                                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                                    Sending...
                                </div>
                            ) : (
                                "Send Message"
                            )}
                        </button>

                        {showSuccess && (
                            <div className="bg-green-500/20 border border-green-500/50 rounded-lg p-4 text-center animate-fade-in">
                                <div className="flex items-center justify-center text-green-400">
                                    <svg
                                        className="w-5 h-5 mr-2"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M5 13l4 4L19 7"
                                        ></path>
                                    </svg>
                                    Message sent successfully!
                                </div>
                            </div>
                        )}
                    </form>
                </div>
            </RevealOnScroll>
        </section>
    );
};
