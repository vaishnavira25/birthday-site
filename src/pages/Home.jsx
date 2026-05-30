import Navbar from "../components/Navbar/Navbar";
import Hero from "../components/Hero/Hero";
import Features from "../components/Features/Features";
import About from "../components/About/About";
import Themes from "../components/Themes/Themes";
import Counter from "../components/Counter/Counter";
import WhyChoose from "../components/Whychoose/Whychoose";
import Games from "../components/Games/Games";
import Service from "../components/Service/Service";
import Award from "../components/Award/Award";
import Availability from "../components/Availability/Availability";
import LookingFor from "../components/LookingFor/LookingFor";
import Footer from "../components/Footer/footer";


const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Features />
      <About />
      <Themes />
      <Counter />
      <WhyChoose />
      <Games />
      <Service />
      <Award />
      <Availability />
      <LookingFor />
      <Footer />
      
    </>
  );
};

export default Home;