export default function FaqVideo({ game }) {
  return (
    <section className="faq-video-section">

      <div className="container">

        <div className="faq-video-wrap">

          <div className="faq-box">

            <h2>
              Frequently Asked Questions
            </h2>

            {game.faqs.map((faq, index) => (

              <div
                className="faq-item"
                key={index}
              >

                <h4>{faq.question}</h4>

                <p>{faq.answer}</p>

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