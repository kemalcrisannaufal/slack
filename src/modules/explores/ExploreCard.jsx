import PropTypes from "prop-types";
import right_arrow from "../../assets/right_arrow.svg";

const ExploreCard = (props) => {
  const { tag, title, image, linkLabel } = props;
  return (
    <div className="w-[290px] h-[420px] p-3 bg-white flex flex-col select-none hover:scale-105 hover:shadow-lg transition-all duration-300 ease-in-out">
      <div className="w-full h-48 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover"
          draggable={false}
        />
      </div>
      <div className="flex flex-col flex-grow justify-between">
        <div className="mt-4">
          <p className="text-sm text-neutral-600 font-medium">{tag}</p>
          <h1 className="text-[22px] text-neutral-800 font-bold mt-2">
            {title}
          </h1>
        </div>

        <div className="mt-auto">
          <div className="mt-5 flex items-center justify-between">
            <p className="text-sky-700 font-medium text-base">{linkLabel}</p>
            <div>
              <img src={right_arrow} alt="right arrow" className="w-6 h-6" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

ExploreCard.propTypes = {
  tag: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  linkLabel: PropTypes.string.isRequired,
};

export default ExploreCard;
