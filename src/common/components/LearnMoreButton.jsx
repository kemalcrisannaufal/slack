import { Link } from "react-router-dom";
import right_arrow from "../../assets/right_arrow.svg";
import PropTypes from "prop-types";

const LearnMoreButton = (props) => {
  const { destination, linkLabel = "" } = props;
  return (
    <Link to={destination} className="learn-more-link relative inline-block">
      <div className="mt-5 flex items-center gap-3">
        <p className="text-sky-700 font-medium text-base">
          Learn More about {linkLabel}
        </p>
        <div>
          <img src={right_arrow} alt="right arrow" className="w-6 h-6" />
        </div>
      </div>
    </Link>
  );
};

LearnMoreButton.propTypes = {
  destination: PropTypes.string.isRequired,
  linkLabel: PropTypes.string,
};

export default LearnMoreButton;
