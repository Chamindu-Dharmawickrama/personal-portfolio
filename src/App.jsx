import { useState, useEffect, Suspense, lazy } from "react";
import "./App.css";
import { LoadingScreen } from "./components/common/LoadingScreen";
import { Navbar } from "./components/common/Navbar";
import { MobileMenu } from "./components/common/MobileMenu";
import { Home } from "./components/sections/home/Home";
const About = lazy(() => import("./components/sections/about/About").then(module => ({ default: module.About })));
const Projects = lazy(() => import("./components/sections/projects/Projects").then(module => ({ default: module.Projects })));
const Contact = lazy(() => import("./components/sections/contact/Contact").then(module => ({ default: module.Contact })));
const Footer = lazy(() => import("./components/common/Footer").then(module => ({ default: module.Footer })));
import { CursorBackground } from "./components/common/CursorBackground";
import ReactGA from "react-ga4";

ReactGA.initialize("G-TEY7V8KVEQ");

function App() {
    useEffect(() => {
        ReactGA.send("pageview");
    }, []);

    //track the loading state
    const [isLoaded, setIsLoaded] = useState(false);
    //const isLoaded = false
    //track the menu state
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <>
            {/* Loading screen show when the isLoaded false */}
            {!isLoaded && (
                <LoadingScreen onComplete={() => setIsLoaded(true)} />
            )}
            {/* If isloaded = true display this */}
            <div
                className={`min-h-screen transition-opacity duration-700 ${isLoaded ? "opacity-100" : "opacity-0"
                    } bg-[#212428] text-gray-100`}
            >
                <CursorBackground />
                <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
                <MobileMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
                <Home />
                <Suspense fallback={null}>
                    <About />
                    <Projects />
                    <Contact />
                    <Footer />
                </Suspense>
            </div>
        </>
    );
}

export default App;
