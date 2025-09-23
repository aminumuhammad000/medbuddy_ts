import styles from "./Home.module.css";
import Nav from "./layout/Nav";
import Banner from ".//layout/Banner";
import Features from "./layout/Features";
import HowItWorks from "./layout/HowItWorks";
import Team from "./layout/Team";
import Feedbacks from "./layout/Feedbacks";
import Contact from "./layout/Contact";
import Footer from "./layout/Footer";

const Home = () => {
  return (
    <div className={styles.container}>
      <Nav />
      <Banner />
      <Features />
      <HowItWorks />
      <Team />
      <Feedbacks />
      <Contact />
      <Footer />
    </div>
  );
};

export default Home;
