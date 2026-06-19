import "./contact.css";

import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";

export default function Contact() {
  return (
    <>
      <Navbar />

      <section className="contact-page">
        <div className="container">
          <div className="contact-heading">
            <h1>Contact Us</h1>
            <p>
              We'd love to hear from you. Feel free to reach out for bookings,
              event planning, game rentals, or any support.
            </p>
          </div>

          <div className="contact-wrapper">
            {/* Contact Info */}
            <div className="contact-info">
              <h2>Get In Touch</h2>

              <p>
                <strong>Phone:</strong> +91 98765 43210
              </p>

              <p>
                <strong>Email:</strong> info@example.com
              </p>

              <p>
                <strong>Address:</strong> Gurugram, Haryana, India
              </p>

              <div className="contact-map">
                <iframe
                  title="Google Map"
                  src="https://www.google.com/maps?q=Gurugram,Haryana&output=embed"
                  width="100%"
                  height="250"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                ></iframe>
              </div>
            </div>

            {/* Contact Form */}
            <form className="contact-form">
              <input
                type="text"
                placeholder="Your Name"
                required
              />

              <input
                type="email"
                placeholder="Your Email"
                required
              />

              <input
                type="tel"
                placeholder="Your Phone Number"
              />

              <textarea
                rows="5"
                placeholder="Your Message"
                required
              ></textarea>

              <button type="submit">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}