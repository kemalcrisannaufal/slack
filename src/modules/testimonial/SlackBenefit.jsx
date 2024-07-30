import Button from "../../common/components/elements/Button";
import StatisticCard from "./StatisticCard";
import testimonialStatistic from "../../common/constant/testimonialStatistics";

const SlackBenefit = () => {
  return (
    <div className="w-full py-20 px-5 lg:px-36">
      <div className="flex flex-col justify-center items-center">
        <h1 className="text-3xl lg:text-5xl font-bold text-neutral-800 text-center">
          Teams large and small rely on Slack
        </h1>
        <h2 className="text-md lg:text-lg font-medium text-neutral-800 mt-6 text-center">
          Slack securely scales up to support collaboration at the world’s
          biggest companies.
        </h2>
        <div className="w-full flex flex-col lg:flex-row items-center justify-center mt-4 lg:mt-7 gap-2">
          <Button
            label={"MEET SLACK FOR ENTERPRISE"}
            onClick={() => {}}
            classname={"w-full h-14 lg:w-72"}
          />
          <Button
            label={"TALK TO SALES"}
            onClick={() => {}}
            bgColor={"white"}
            classname={"w-full h-14 lg:w-48"}
          />
        </div>
      </div>

      <div className="w-full flex flex-col lg:flex-row gap-8 items-center justify-between items-start mt-14 px-20">
        {testimonialStatistic.map((item) => (
          <StatisticCard
            key={item.id}
            percentage={item.percentage}
            description={item.description}
          />
        ))}
      </div>
    </div>
  );
};

export default SlackBenefit;
