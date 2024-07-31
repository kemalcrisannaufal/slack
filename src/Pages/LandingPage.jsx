import Navbar from "../common/navbar";
import Hero from "../modules/hero";
import Content from "../modules/content";
import Testimonial from "../modules/testimonial";
import Explores from "../modules/explores";
import CallToAction from "../modules/callToAction";
import Discover from "../modules/discover";
import Footer from "../modules/footer";

const LandingPage = () => {
  return (
    <div className="flex flex-col justify-center">
      <Navbar />
      <Hero />
      <Content />
      <Testimonial />
      <Explores />
      <CallToAction />
      <Discover />
      <Footer />
    </div>
  );
};

export default LandingPage;
