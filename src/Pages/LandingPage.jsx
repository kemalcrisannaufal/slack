import Navbar from "../common/navbar";
import Hero from "../modules/hero";
import Content from "../modules/content";


const LandingPage = () => {
  return (
    <div className="flex flex-col justify-center">
      <Navbar />
      <Hero/>
      <Content/>
    </div>
  );
};

export default LandingPage;
