import PropTypes from "prop-types";

const StatisticCard = (props) => {
  const { percentage, description } = props;
  return (
    <div className="max-w-[200px] text-center">
      <h1 className="text-fuchsia-950 text-5xl lg:text-6xl font-bold">
        {percentage}
      </h1>
      <p className="text-xs lg:text-sm text-black font-medium mt-2">
        {description}
      </p>
    </div>
  );
};

StatisticCard.propTypes = {
  percentage: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default StatisticCard;
