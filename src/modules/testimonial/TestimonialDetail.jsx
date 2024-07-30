import LearnMoreButton from "../../common/components/LearnMoreButton";

const TestimonialDetail = () => {
  return (
    <div className="w-full pb-10">
      <div className="w-full flex flex-col lg:flex-row items-center">
        <div className="w-full lg:w-1/2">
          <div className="w-full lg:h-96 rounded-r-full overflow-hidden">
            <video className="w-full h-full object-cover" autoPlay loop muted>
              <source src={"/videos/videoTestimoni.mp4"} />
            </video>
          </div>
        </div>
        <div className="w-full lg:w-1/2 mt-20 px-5 lg:px-20">
          <div>
            <blockquote className="text-neutral-700 text-xl lg:text-2xl italic leading-normal">
              “Whether you’re a small or large organization, executing anything
              from a discrete modernization program to a digital transformation
              initiative, Slack is an incredibly powerful tool in the hybrid
              world.”
            </blockquote>
            <div className="mt-5">
              <p className="text-neutral-800 font-bold text-md lg:text-lg">
                Jennifer Quinlan
              </p>
              <p className="text-sm lg:text-md" >
                Managing Partner, IBM iX Americas Leader - Customer and
                Experience Transformation, IBM
              </p>

              <LearnMoreButton
                linkLabel={"customer stories"}
                destination={""}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center mt-10 lg:mt-20 px-5">
        <p className="text-xs lg:text-sm text-center">
          * Weighted average. Based on 2,707 survey responses from weekly Slack
          users in the U.S., UK, Australia and Canada with a ± 2% margin of
          error at 95% CI (December 2021).
        </p>
      </div>
    </div>
  );
};

export default TestimonialDetail;
