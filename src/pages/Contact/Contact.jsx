import "./Contact.css";

import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";

import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaPaperPlane,
} from "react-icons/fa";

export default function Contact() {
  return (
    <>
      <Navbar />

      <section className="contact-section">
        <div className="container">
          <div className="contact-grid">

            {/* LEFT SIDE */}
            <div className="contact-left">

              {/* Address */}
              <div className="contact-card full-width">
                <div className="card-icon">
                  <FaMapMarkerAlt />
                </div>

                <div className="card-content">
                  <h3>Address</h3>
                  <p>
                    52, MCD School Road, Opp. Karmic Connection Group,
                    Chandan Hulla, Chhatarpur, Delhi - 110074
                  </p>
                </div>
              </div>

              {/* Phone & Email Row */}
              <div className="contact-row">

                {/* Phone Card */}
                <div className="contact-card">
                  <div className="card-icon">
                    <FaPhoneAlt />
                  </div>

                  <div className="card-content">
                    <h3>Phone</h3>

                    <a href="tel:+919811256658">
                      +91 98112 56658
                    </a>
                    <br></br>
                    <a href="tel:+918235597671">
                      +91 82355 97671
                    </a>
                  </div>
                </div>

                {/* Email Card */}
                <div className="contact-card">
                  <div className="card-icon">
                    <FaEnvelope />
                  </div>

                  <div className="card-content">
                    <h3>Email</h3>

                    <a href="mailto:info@birthdayplanner.co">
                      info@birthdayplanner.co
                    </a>
                  </div>
                </div>

              </div>

              {/* Google Map */}
              <div className="map-box">
                 <iframe
                  title="Birthday Planner Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3507.32914413011!2d77.18192297528275!3d28.469632675754088!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d1feb430a990f%3A0x48066a6b6d608ce2!2sBirthday%20Planner!5e0!3m2!1sen!2sin!4v1783320757385!5m2!1sen!2sin"
                  width="100%"
                  height="450"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="strict-origin-when-cross-origin"
                ></iframe>
              </div>

            </div>

            {/* RIGHT SIDE FORM */}
            <div className="contact-form-box">

              <h2>Send Us a Message</h2>

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
                  rows="7"
                  placeholder="Your Message"
                  required
                ></textarea>

                <button type="submit">
                  <FaPaperPlane />
                  <span>Send Message</span>
                </button>

              </form>

            </div>

          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}