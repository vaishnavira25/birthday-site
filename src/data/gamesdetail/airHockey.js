import airBanner from "../../assets/Games/air-hockey/air-hockey-game-banner.jpg";

import airImg1 from "../../assets/Games/air-hockey/air-hockey-game-on-rent-in-delhi.webp";
import airImg2 from "../../assets/Games/air-hockey/air-hockey-on-rent.webp";

import gallery1 from "../../assets/Games/air-hockey/air-hockey.webp";
import gallery2 from "../../assets/Games/air-hockey/air-hockey-rental.webp";
import gallery3 from "../../assets/Games/air-hockey/air-hockey-game.webp";
import gallery4 from "../../assets/Games/air-hockey/air-hockey-for-rent.webp";


const airHockey = {
  id: 1,

  title: "Air Hockey For Hire",

  slug: "air-hockey-on-rent-in-delhi",

  banner: airBanner,

  image: airImg1,

  sections: [
  {
  title: "Air Hockey On Rent In Delhi",

  image: airImg1,

  description: [
    "Basically we provide Air Hockey on rent in Delhi, Gurgaon, and Noida for events at a very reasonable and affordable price.",

    "Air Hockey is one of the most popular arcade games enjoyed by kids aged 5 years and above. The game is played by two players on an air hockey table that uses a low-friction surface. Air is pushed through tiny holes in the table, creating a cushion of air that allows the puck to glide smoothly and quickly.",

    "The fast-paced nature of the game makes it exciting and highly engaging for players. Air Hockey is a great entertainment option for older kids and teenagers at birthday parties, school events, and corporate functions.",

    "Most children love the game because of its simplicity, speed, and competitive gameplay. It creates excitement among participants and keeps guests entertained throughout the event.",

    "We provide excellent quality Air Hockey tables that are suitable for both kids and adults. Our tables feature a smooth playing surface, sturdy construction, and attractive design.",

    "The tables also include lipped edges that help keep the puck in play, reducing interruptions during the game. The professional setup creates a fun and competitive atmosphere for all participants.",

    "Air Hockey is an ideal addition to birthday parties, exhibitions, carnivals, mall activations, and corporate events where interactive entertainment is required."
  ],
},

    {
      title: "",

      image: airImg2,

      description: `
Air Hockey is perfect entertainment for kids, teens and adults at any event.

We provide high-quality air hockey tables with smooth surfaces, durable build, and attractive design suitable for all types of events like birthday parties, school events, corporate functions and exhibitions.

The tables come with lipped edges to keep the puck in play and an engaging setup that keeps guests entertained throughout the event.
      `,
    },
  ],

  gallery: [
  {
    image: gallery1,
    size: "big",
  },
  {
    image: gallery2,
    size: "tall",
  },
  {
    image: gallery3,
    size: "normal",
  },
  {
    image: gallery4,
    size: "wide",
  },
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

    relatedGames: [
    "ball-in-bucket-game-on-rent-in-delhi",
    "basketball-game-on-rent",
    "foosball-game-on-rent",
    "ring-toss-game-on-rent",
  ],
};

export default airHockey;