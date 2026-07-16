import { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";

export default function FaqVideo({ game }) {
  const [active, setActive] = useState(0);

  return (
    <section className="faq-video-section">
      <div className="container">
        <div className="faq-video-wrap">

          <div className="faq-box">
            <h2>Frequently Asked Questions</h2>

            {game.faqs.map((faq, index) => (
              <div className="faq-item" key={index}>
                <button
                  className="faq-question"
                  onClick={() =>
                    setActive(active === index ? null : index)
                  }
                >
                  <span>{faq.question}</span>

                  {active === index ? <FaMinus /> : <FaPlus />}
                </button>

                {active === index && (
                  <div className="faq-answer">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="video-box">
            <iframe
              width="100%"
              height="400"
              src={game.video}
              title="YouTube video"
              frameBorder="0"
              allowFullScreen
            />
          </div>

        </div>
      </div>
    </section>
  );
}