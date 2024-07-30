import Navbar from "../common/navbar";
import Hero from "../modules/hero";

const LandingPage = () => {
  return (
    <div className="flex flex-col justify-center">
      <Navbar />
      <Hero/>
    </div>
  );
};

export default LandingPage;
