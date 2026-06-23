import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import "./explore.css";

import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";

export default function Explore() {
  const exploreLinks = [
    { name: "About Us", path: "/about" },
    { name: "Games", path: "/games" },
    { name: "Activities", path: "/activities" },
    { name: "Themes", path: "/themes" },
    { name: "Blog", path: "/blog" },
    { name: "FAQs", path: "/faq" },
    { name: "Gallery", path: "/gallery" },
    { name: "Testimonials", path: "/testimonials" },
    { name: "PDF Download", path: "/pdf-download" },
    { name: "Contact Us", path: "/contact" },
  ];

  return (
    <>
      <Helmet>
        <title>Explore Our Services | Birthday Planner</title>

        <meta
          name="description"
          content="Explore our event planning services including games, activities, themes, gallery, blogs, FAQs, and more."
        />

        <meta
          name="keywords"
          content="birthday planner, event games, activities, themes, party planner, event management"
        />

        <link
          rel="canonical"
          href="https://www.yourwebsite.com/explore"
        />
      </Helmet>

     <Navbar />
    <section className="explore-section">
      <div className="container">
        <div className="explore-content">
          <h2>Explore More</h2>
          <p>
            Discover our exciting games, themes, activities, and event
            planning services.
          </p>

          <div className="explore-links">
            {exploreLinks.map((link, index) => (
              <Link
                key={index}
                to={link.path}
                className="explore-link"
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
     <Footer />
    </>
  );
}