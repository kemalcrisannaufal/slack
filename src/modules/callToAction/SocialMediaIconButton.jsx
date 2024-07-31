import PropTypes from "prop-types";

const SocialMediaIconButton = (props) => {
  const { icon, destination } = props;
  return (
    <a href={destination}>
      <div className="p-1 flex items-center justify-center hover:text-sky-700">
        {icon}
      </div>
    </a>
  );
};

SocialMediaIconButton.propTypes = {
  icon: PropTypes.node.isRequired,
  destination: PropTypes.string.isRequired,
};

export default SocialMediaIconButton;
