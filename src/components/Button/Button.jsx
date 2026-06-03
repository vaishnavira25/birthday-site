import React, { useEffect, useState } from "react";
import "./button.css";

import { FaWhatsapp, FaArrowUp } from "react-icons/fa";

const Button = () => {
  const [showTop, setShowTop] = useState(false);
  const [showMessage, setShowMessage] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowTop(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const showBubble = () => {
      setShowMessage(true);

      setTimeout(() => {
        setShowMessage(false);
      }, 5000);
    };

    showBubble();

    const interval = setInterval(showBubble, 25000);

    return () => clearInterval(interval);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="floating-buttons">

      {/* WhatsApp */}
      <div className="whatsapp-wrapper">

        {showMessage && (
          <div className="whatsapp-message">
            🎉 Chat with our party experts
          </div>
        )}

        <a
          href="https://wa.me/919811256658"
          target="_blank"
          rel="noopener noreferrer"
          className="whatsapp-btn"
        >
          <FaWhatsapp />
        </a>

      </div>

      {/* Scroll To Top */}
      {showTop && (
        <button
          className="scroll-top-btn"
          onClick={scrollToTop}
        >
          <FaArrowUp />
        </button>
      )}

    </div>
  );
};

export default Button;