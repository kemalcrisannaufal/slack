import LearnMoreButton from "../components/LearnMoreButton";
import PropTypes from "prop-types";

const ContentLayout = (props) => {
  const { type = 1, video, title, description, destination, linkLabel } = props;
  return (
    <div className="w-full flex justify-center items-center py-5 lg:py-14 bg-cream lg:px-36">
      <div className="w-full flex flex-col lg:flex-row justify-center items-center">
        <Video
          video={video}
          classname={`block ${
            type % 2 === 0 ? "lg:hidden pl-5" : "pr-5"
          } lg:p-0`}
        />
        <Description
          title={title}
          description={description}
          destination={destination}
          linkLabel={linkLabel}
          type={type}
        />
        <Video
          video={video}
          classname={`hidden ${type % 2 === 1 ? "hidden" : "lg:block"}`}
        />
      </div>
    </div>
  );
};

ContentLayout.propTypes = {
  type: PropTypes.number.isRequired,
  video: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  destination: PropTypes.string.isRequired,
  linkLabel: PropTypes.string.isRequired,
};

const Video = (props) => {
  const { video, classname } = props;
  return (
    <div className={`w-full lg:w-1/2 ${classname}`}>
      <div className="w-full lg:h-96 flex items-center">
        <video className="w-full h-auto" autoPlay loop muted>
          <source src={video} />
        </video>
      </div>
    </div>
  );
};

Video.propTypes = {
  video: PropTypes.string.isRequired,
  classname: PropTypes.string,
};

const Description = (props) => {
  const { type, title, description, destination, linkLabel } = props;
  return (
    <div
      className={`lg:w-1/2 p-5 ${type % 2 === 1 ? "lg:pl-28" : "lg:pr-28"} `}
    >
      <div>
        <h1 className="text-3xl lg:text-5xl text-neutral-800 font-bold leading-tight">
          {title}
        </h1>

        <p className="text-base lg:text-lg font-medium text-neutral-800 mt-2">
          {description}
        </p>

        <LearnMoreButton destination={destination} linkLabel={linkLabel} />
      </div>
    </div>
  );
};

Description.propTypes = {
  type: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  destination: PropTypes.string.isRequired,
  linkLabel: PropTypes.string.isRequired,
};

export default ContentLayout;
