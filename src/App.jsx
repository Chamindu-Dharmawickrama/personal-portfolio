import { useState, useEffect } from "react";
import "./App.css";
import { LoadingScreen } from "./components/common/LoadingScreen";
import { Navbar } from "./components/common/Navbar";
import { MobileMenu } from "./components/common/MobileMenu";
import { Home } from "./components/sections/home/Home";
import { About } from "./components/sections/about/About";
import { Projects } from "./components/sections/projects/Projects";
import { Contact } from "./components/sections/contact/Contact";
import { Footer } from "./components/common/Footer";
import { CursorBackground } from "./components/common/CursorBackground";
import ReactGA from "react-ga4";

ReactGA.initialize("G-TEY7V8KVEQ");

function App() {
    useEffect(() => {
        ReactGA.send("pageview");
    }, []);

    //track the loading state
    const [isLoaded, setIsLoaded] = useState(false);
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
                <About />
                <Projects />
                <Contact />
                <Footer />
            </div>
        </>
    );
}

export default App;
