import { useState } from "react";
import { FaChevronRight, FaChevronDown } from "react-icons/fa";
import PropTypes from "prop-types";

const CategoryMenu = (props) => {
  const [isToggleOpen, setIsToggleOpen] = useState(false);

  const handleOnToggleClicked = () => {
    setIsToggleOpen(!isToggleOpen);
  };

  const { index, category, menuItems } = props;

  return (
    <>
      <button
        className={`w-full h-max p-2 mb-2 flex items-center justify-between lg:hidden active:border-dashed active:border-neutral-800`}
        onClick={() => handleOnToggleClicked()}
      >
        <h1 className="text-black text-md font-medium text-start">
          {category}
        </h1>
        {isToggleOpen ? (
          <FaChevronDown className="lg:hidden" />
        ) : (
          <FaChevronRight className="lg:hidden" />
        )}
      </button>
      <div
        className={`p-2 w-full ${index === 5 ? "lg:-mt-64" : ""} ${
          isToggleOpen ? "block" : "hidden"
        } lg:block`}
      >
        <h1 className="text-black text-md font-medium text-start hidden lg:block">
          {category}
        </h1>
        <div className="w-full">
          <ul>
            {menuItems.map((item, itemIndex) => (
              <li
                key={itemIndex}
                className="text-neutral-700 text-start my-2 w-full"
              >
                <a href={item.linkTo} className="hover:text-sky-700 w-full">
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

CategoryMenu.propTypes = {
  index: PropTypes.number.isRequired,
  category: PropTypes.string.isRequired,
  menuItems: PropTypes.array.isRequired,
};

export default CategoryMenu;
