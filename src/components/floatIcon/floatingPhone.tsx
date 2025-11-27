import { Phone } from "lucide-react";
import { FaWhatsapp, FaViber, FaFacebookMessenger } from "react-icons/fa";

const FloatingPhoneIcon = () => {
    return (
        <div className="fixed bottom-6 left-6 flex flex-col items-center z-50 group">
            {/* Hidden social buttons */}
            <div className="flex flex-col mb-2 space-y-2 opacity-0 scale-0 group-hover:opacity-100 group-hover:scale-100 transform transition-all duration-300 origin-bottom">
                <a
                    href="https://wa.me/9840353337"
                    target="_blank"
                    className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform"
                >
                    <FaWhatsapp className="text-white w-5 h-5" />
                </a>
                <a
                    href="viber://chat?number=%2B9840353337"
                    className="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform"
                >
                    <FaViber className="text-white w-5 h-5" />
                </a>
                <a
                    href="https://m.me/1DEBriM5ed"
                    target="_blank"
                    className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform"
                >
                    <FaFacebookMessenger className="text-white w-5 h-5" />
                </a>
            </div>

            {/* Main phone button */}
            <a
                href="tel:+9779840353337"
                className="w-12 h-12 bg-green-700 text-white rounded-full flex items-center justify-center shadow-[0_15px_30px_rgba(0,0,0,0.6)] hover:scale-110 transition-transform duration-300"
                aria-label="Call us"
            >
                <Phone className="w-6 h-6" />
            </a>
        </div>
    );
};

export default FloatingPhoneIcon;
