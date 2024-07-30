import Navbar from "../common/navbar";
import Hero from "../modules/hero";
import Content from "../modules/content";
import Testimonial from "../modules/testimonial";

const LandingPage = () => {
  return (
    <div className="flex flex-col justify-center">
      <Navbar />
      <Hero/>
      <Content/>
      <Testimonial/>
    </div>
  );
};

export default LandingPage;
