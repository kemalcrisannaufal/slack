import PropTypes from "prop-types";

const Button = (props) => {
  const { type = "button", label, onClick, bgColor, classname, icon } = props;
  return (
    <button
      type={type}
      className={`rounded px-3 py-2 lg:py-3 font-semibold text-sm md:text-md lg:text-md tracking-wide flex justify-center items-center ${
        bgColor === "white"
          ? "bg-white border border-fuchsia-900 text-fuchsia-900 hover:ring-1 hover:ring-fuchsia-900"
          : "bg-fuchsia-900 text-white hover:bg-fuchsia-900"
      } ${classname}`}
      onClick={onClick}
    >
      <div className="flex items-center gap-2">
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
