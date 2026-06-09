import "./GameDetail.css";
import { useParams } from "react-router-dom";

import airHockey from "../../data/gamesdetail data/airHockey";

import Hero from "../../components/PageDetail/Hero/Hero";
import Breadcrumb from "../../components/PageDetail/Breadcrumb/Breadcrumb";
import PageContext from "../../components/PageDetail/PageContext/PageContext";
import Gallery from "../../components/PageDetail/Gallery/Gallery";
import FaqVideo from "../../components/PageDetail/FaqVideo/FaqVideo";
import RelatedGames from "../../components/PageDetail/RelatedGames/RelatedGames";

export default function GameDetail() {
  const { slug } = useParams();

  const game =
    airHockey.slug === slug
      ? airHockey
      : null;

  if (!game) {
    return <h1>Game Not Found</h1>;
  }

  return (
    <section className="game-detail-page">
      <Hero game={game} />
      <Breadcrumb game={game} />
      <PageContext game={game} />
      <Gallery game={game} />
      <FaqVideo game={game} />
      <RelatedGames slug={slug} />
    </section>
  );
}