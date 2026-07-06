import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";

import "./ThemePage.css";

export default function ThemePage() {
  const themeLinks = [
    {
      name: "Boys Theme Party Delhi",
      path: "/boys-theme-party-delhi",
      desc: "Creative birthday themes for boys.",
    },
    {
      name: "Girls Theme Party Delhi",
      path: "/girls-theme-party-delhi",
      desc: "Beautiful birthday themes for girls.",
    },
    {
      name: "First Birthday Party Organiser",
      path: "/first-birthday-party-organiser",
      desc: "Celebrate your baby's first birthday.",
    },
    {
      name: "Twins Theme Party Ideas",
      path: "/twins-theme-party-ideas",
      desc: "Unique themes for twin birthday celebrations.",
    },
    {
      name: "New Born Baby Theme Party Ideas",
      path: "/new-born-baby-theme-party-ideas",
      desc: "Cute welcome party themes for newborns.",
    },
    {
      name: "Customized Theme Party Planner",
      path: "/customized-theme-party-planner",
      desc: "Personalized birthday party themes.",
    },
  ];

  return (
    <>
      <Helmet>
        <title>Theme Party Ideas | Birthday Planner</title>

        <meta
          name="description"
          content="Explore boys, girls, first birthday, twins and customized birthday theme party ideas."
        />

        <meta
          name="keywords"
          content="birthday themes, boys theme party, girls theme party, twins birthday, customized birthday themes"
        />
      </Helmet>

      <Navbar />

      <section className="theme-page">
        <div className="container">

          <div className="theme-heading">
            <h1>Theme Party Pages</h1>

            <p>
              Discover creative birthday theme ideas for every age and occasion.
            </p>
          </div>

          <div className="theme-grid">

            {themeLinks.map((item, index) => (
              <Link
                key={index}
                to={item.path}
                className="theme-card"
              >
                <h3>{item.name}</h3>

                <p>{item.desc}</p>

                <span>View Details →</span>
              </Link>
            ))}

          </div>

        </div>
      </section>

      <Footer />
    </>
  );
}