import PropTypes from "prop-types";
import { FaChevronDown, FaChevronRight } from "react-icons/fa";

const NavbarItem = (props) => {
  const {
    onClick,
    label,
    isExpanded = true,
    contentClassname,
    buttonClassname,
  } = props;
  return (
    <button
      className={`btn-nav-item mb-1 p-2 lg:active:border-dashed lg:active:border-2 active:border-black block w-full lg:w-max ${buttonClassname} ${
        !isExpanded &&
        "hover:text-blue-600 lg:hover:underline lg:hover:text-neutral-700"
      }`}
      onClick={onClick}
    >
      <div
        className={`flex items-center justify-between text-md lg:text-sm font-bold tracking-wide lg:tracking-wider text-neutral-700 ${contentClassname}`}
      >
        <p className={`${!isExpanded ? "nav-item-text" : ""}`}>{label}</p>

        <FaChevronRight
          className={`block lg:hidden h-4 ${!isExpanded && "hidden"}`}
        />

        <FaChevronDown
          className={`hidden lg:block h-3 ${!isExpanded && "lg:hidden"}`}
        />
      </div>
    </button>
  );
};

NavbarItem.propTypes = {
  onClick: PropTypes.func,
  label: PropTypes.string.isRequired,
  isExpanded: PropTypes.bool,
  contentClassname: PropTypes.string,
  buttonClassname: PropTypes.string
};

export default NavbarItem;
