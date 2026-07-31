import "./PageDetail.css";
import { useParams } from "react-router-dom";

import SEO from "../../components/Seo/Seo"
import games from "../../data/gamesdetail/gamesDetail";
import activities from "../../data/activityDetail/activityDetail";
// import themes from "../../data/themesdetail/themesDetail";
// import services from "../../data/servicesdetail/servicesDetail";

import Navbar from "../../components/Navbar/Navbar";
import Banner from "../../components/Banner/Banner";
// import Breadcrumb from "../../components/Breadcrumb/Breadcrumb";
import PageContext from "../../components/PageSections/PageContext/PageContext";
import Gallery from "../../components/PageSections/Gallery/Gallery";
import FaqVideo from "../../components/PageSections/FaqVideo/FaqVideo";
import Explore from "../../components/PageSections/Explore/Explore";

import Footer from "../../components/Footer/Footer";

export default function PageDetail() {
  const { slug } = useParams();

  const item =
    games.find((item) => item.slug === slug) ||
    activities.find((item) => item.slug === slug) ||
    themes.find((item) => item.slug === slug) ||
    services.find((item) => item.slug === slug);

  if (!item) {
    return <h1>Page Not Found</h1>;
  }

  let relatedData = [];

  if (games.some((item) => item.slug === slug)) {
    relatedData = games;
  } else if (activities.some((item) => item.slug === slug)) {
    relatedData = activities;
  } else if (themes.some((item) => item.slug === slug)) {
    relatedData = themes;
  } else if (services.some((item) => item.slug === slug)) {
    relatedData = services;
  }

  return (
    <section className="page-detail">
      <SEO seo={item.seo} slug={item.slug} />

      <Navbar />

      <Banner item={item} />

      {/* <Breadcrumb
        items={[
          {
            label: item.parent,
            slug: item.parentSlug,
          },
          {
            label: item.title,
          },
        ]}
      /> */}

      <PageContext item={item} />

      <Gallery item={item} />

      <FaqVideo item={item} />

      <Explore
        item={item}
        data={relatedData}
      />
  
      <Footer />
    </section>
  );
}