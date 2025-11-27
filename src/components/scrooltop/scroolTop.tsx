import { ArrowUp } from "lucide-react";
import { useState, useEffect } from "react";

const ScrollToTop = () => {
    const [visible, setVisible] = useState(false);

    // Show button after scrolling 300px
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 300) setVisible(true);
            else setVisible(false);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    return (
        <button
            onClick={scrollToTop}
            className={`fixed bottom-6 right-6 w-14 h-14 bg-green-700 text-white rounded-full flex items-center justify-center shadow-xl hover:scale-110 transition-transform duration-300 z-50 ${visible ? "opacity-100" : "opacity-0 pointer-events-none"
                }`}
            aria-label="Scroll to top"
        >
            <ArrowUp className="w-6 h-6" />
        </button>
    );
};

export default ScrollToTop;
