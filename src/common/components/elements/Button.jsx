import PropTypes from "prop-types";

const Button = (props) => {
  const { type = "button", label, onClick, bgColor, classname, icon } = props;
  return (
    <button
      type={type}
      className={`rounded px-3 py-2 font-semibold text-sm md:text-md lg:text-md tracking-wide flex justify-center items-center ${
        bgColor === "white"
          ? "bg-white border border-purple-900 text-purple-900 hover:ring-1 hover:ring-purple-900"
          : "bg-purple-900 text-white hover:bg-purple-950"
      } ${classname}`}
      onClick={onClick}
    >
      <div className="flex items-center gap-1">
        <p className="text-center">{label}</p>
        {icon}
      </div>
    </button>
  );
};

Button.propTypes = {
  type: PropTypes.string,
  label: PropTypes.string.isRequired,
  bgColor: PropTypes.string,
  onClick: PropTypes.func.isRequired,
  classname: PropTypes.string,
  icon: PropTypes.node,
};

export default Button;
