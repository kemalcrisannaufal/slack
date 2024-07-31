import { FaChevronDown, FaGlobe } from "react-icons/fa";
import PropTypes from "prop-types";

const RegionDropDown = (props) => {
  const { onClick } = props;
  return (
    <button
      className="active:border active:border-dashed active:border-neutral-800"
      onClick={onClick}
    >
      <div className="p-2 flex gap-2 items-center text-neutral-800 hover:text-sky-700">
        <FaGlobe />
        <p className="font-medium text-md">Change Region</p>
        <FaChevronDown className="text-xs" />
      </div>
    </button>
  );
};

RegionDropDown.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default RegionDropDown;
