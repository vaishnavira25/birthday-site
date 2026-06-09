import airBanner from "../../assets/Games/air-hockey/air-hockey-game-banner.jpg";

import airImg1 from "../../assets/Games/air-hockey/air-hockey-game-on-rent-in-delhi.webp";
import airImg2 from "../../assets/Games/air-hockey/air-hockey-on-rent.webp";

import gallery1 from "../../assets/Games/air-hockey/air-hockey.webp";
import gallery2 from "../../assets/Games/air-hockey/air-hockey-rental.webp";
import gallery3 from "../../assets/Games/air-hockey/air-hockey-game.webp";
import gallery4 from "../../assets/Games/air-hockey/air-hockey-for-rent.webp";


const airHockey = {
  id: 1,

  title: "Air Hockey On Rent In Delhi",

  slug: "air-hockey-on-rent-in-delhi",

  banner: airBanner,

  image: airImg1,

  sections: [
    {
      title: "Air Hockey On Rent In Delhi",

      image: airImg1,

      description: `
We provide Air Hockey on rent in Delhi, Gurgaon and Noida for events at a very reasonable and affordable price.

Air Hockey is one of the most popular arcade games enjoyed by kids aged 5 years and above. It is played by 2 players on a low-friction table where air is pushed through tiny holes, creating a cushion that makes the puck glide smoothly and quickly.

This makes the game fast, competitive and highly entertaining for guests of all ages.
      `,
    },

    {
      title: "Why Air Hockey is a Hit at Parties",

      image: airImg2,

      description: `
Air Hockey is perfect entertainment for kids, teens and adults at any event.

We provide high-quality air hockey tables with smooth surfaces, durable build, and attractive design suitable for all types of events like birthday parties, school events, corporate functions and exhibitions.

The tables come with lipped edges to keep the puck in play and an engaging setup that keeps guests entertained throughout the event.
      `,
    },
  ],

  gallery: [
  gallery1,
  gallery2,
  gallery3,
  gallery4,
],

  video:"https://www.youtube.com/embed/HGKE9kssPXk?si=CRm8RwtbHsCyHn6m",

  faqs: [
    {
      question: "What is Air Hockey Game?",
      answer:
        "Air Hockey is a fast arcade game where two players hit a puck on a smooth air-cushioned table to score goals.",
    },
    {
      question: "Is Air Hockey suitable for kids?",
      answer:
        "Yes, it is suitable for kids above 5 years as well as adults.",
    },
    {
      question: "Do you provide setup support?",
      answer:
        "Yes, we provide complete setup and on-site assistance.",
    },
    {
      question: "Where can it be installed?",
      answer:
        "It can be installed indoors or in covered outdoor spaces.",
    },
  ],
};

export default airHockey;