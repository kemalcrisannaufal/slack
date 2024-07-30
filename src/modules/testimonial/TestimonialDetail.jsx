import LearnMoreButton from "../../common/components/LearnMoreButton";

const TestimonialDetail = () => {
  return (
    <div className="w-full pb-10">
      <div className="w-full flex items-center">
        <div className="w-full lg:w-1/2">
          <div className="w-full h-96 rounded-r-full overflow-hidden">
            <video className="" autoPlay loop muted>
              <source src={"/videos/videoTestimoni.mp4"} />
            </video>
          </div>
        </div>
        <div className="w-full lg:w-1/2 px-20">
          <div>
            <blockquote className="text-neutral-700 text-2xl italic leading-normal">
              “Whether you’re a small or large organization, executing anything
              from a discrete modernization program to a digital transformation
              initiative, Slack is an incredibly powerful tool in the hybrid
              world.”
            </blockquote>
            <div className="mt-5">
              <p className="text-neutral-800 font-bold text-lg">
                Jennifer Quinlan
              </p>
              <p>
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
      <div className="flex justify-center mt-20">
        <p className="text-sm">
          * Weighted average. Based on 2,707 survey responses from weekly Slack
          users in the U.S., UK, Australia and Canada with a ± 2% margin of
          error at 95% CI (December 2021).
        </p>
      </div>
    </div>
  );
};

export default TestimonialDetail;
