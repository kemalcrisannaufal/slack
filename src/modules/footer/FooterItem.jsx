import PropTypes from "prop-types";

const FooterItem = (props) => {
  const { label, image = "-", linkTo, classname } = props;
  return (
    <a
      className={`flex gap-1 items-center p-1 text-sm font-medium text-neutral-600 hover:text-sky-800 w-max ${classname}`}
      href={linkTo}
    >
      <div>{label}</div>

      {image !== "-" && <img src={image} alt={label} />}
    </a>
  );
};

FooterItem.propTypes = {
  label: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  linkTo: PropTypes.string.isRequired,
  classname: PropTypes.string,
};

export default FooterItem;
