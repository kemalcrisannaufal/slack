import Button from "../../common/components/elements/Button";
import { FaArrowRight } from "react-icons/fa";
import slackClientsLogoHero from "../../common/constant/slackClientsLogoHero";

const Hero = () => {
  return (
    <div className="w-full mt-8">
      <div className="lg:h-[75vh] lg:px-36">
        <div className="w-full">
          <h1 className="text-center text-4xl lg:text-5xl font-bold tracking-tight text-neutral-800">
            Made for people.{" "}
            <span className="text-fuchsia-900">Built for productivity.</span>{" "}
          </h1>
          <div className="w-full flex flex-col lg:flex-row justify-center gap-4 mt-8 px-5">
            <Button
              label={"GET STARTED"}
              onClick={() => {}}
              classname={"w-full h-14 lg:w-44"}
            />
            <Button
              label={"FIND YOUR PLAN"}
              bgColor={"white"}
              onClick={() => {}}
              icon={<FaArrowRight />}
              classname={"w-full h-14 lg:w-56"}
            />
          </div>
          <div className="w-full px-5 lg:px-20 mt-4">
            <div>
              <h5 className="text-center text-lg text-neutral-800 tracking-wide">
                <span className="font-bold">Slack is free to try</span> for as
                long as you&#39;d like
              </h5>
            </div>
          </div>

          <div className="w-full flex flex-wrap items-center justify-center mt-5">
            {slackClientsLogoHero.map((item) => (
              <div key={item.id} className="mr-10 mt-5">
                <img
                  src={item.logo}
                  alt={item.name}
                  className="w-max h-auto max-h-8"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="w-full h-[50vh] flex justify-center mt-10 px-5 relative bg-cream">
        <video
          className="w-[90%] lg:w-[900px] h-auto absolute top-2 lg:-translate-y-60"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src="/videos/Team discussing work in the Slack app.webm" />
        </video>
      </div>
    </div>
  );
};

export default Hero;
