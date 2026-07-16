import "./PageDetail.css";
import { useParams } from "react-router-dom";

import games from "../../data/gamesdetail/gamesDetail";
// import activities from "../../data/activitiesdetail/activitiesDetail";
// import themes from "../../data/themesdetail/themesDetail";

import Navbar from "../../components/Navbar/Navbar";

import Hero from "../../components/PageDetail/Hero/Hero";
import Breadcrumb from "../../components/PageDetail/Breadcrumb/Breadcrumb";
import PageContext from "../../components/PageDetail/PageContext/PageContext";
import Gallery from "../../components/PageDetail/Gallery/Gallery";
import FaqVideo from "../../components/PageDetail/FaqVideo/FaqVideo";
import RelatedGames from "../../components/PageDetail/RelatedGames/RelatedGames";

import Footer from "../../components/Footer/Footer";

export default function PageDetail() {
  const { slug } = useParams();

  const item =
    games.find((game) => game.slug === slug) ||
    activities.find((activity) => activity.slug === slug) ||
    themes.find((theme) => theme.slug === slug);

  if (!item) {
    return <h1>Page Not Found</h1>;
  }

  return (
    <section className="page-detail">
      <Navbar />
      <Hero game={item} />
      <Breadcrumb game={item} />
      <PageContext game={item} />
      <Gallery game={item} />
      <FaqVideo game={item} />
      <RelatedGames game={item} />
      <Footer />
    </section>
  );
}