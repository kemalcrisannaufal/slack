import { AnimatePresence, motion } from "framer-motion";
import { FaTimes } from "react-icons/fa";
import navbarItems from "../constant/navbarItems";
import NavbarItem from "./NavbarItem";
import Button from "../components/elements/Button";
import PropTypes from "prop-types";

const NavbarSlider = (props) => {
  const { isSliderOpened, handleSliderClick } = props;
  return (
    <AnimatePresence>
      {isSliderOpened && (
        <motion.div
          key="slider"
          initial={{ opacity: 1, x: "100%" }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 1, x: "100%" }}
          transition={{ type: "tween", duration: 0.5 }}
          className="absolute inset-0 w-full min-h-screen bg-white px-5 pt-5 z-10 flex flex-col justify-between pb-10 lg:hidden"
        >
          <div>
            <div className="flex justify-between">
              <div className="w-max h-auto">
                <img src={"/images/logo.png"} alt="slack" />
              </div>
              <button onClick={handleSliderClick}>
                <FaTimes className="text-lg text-neutral-600" />
              </button>
            </div>

            <div className="w-full h-max mt-5">
              {navbarItems.map((item, index) => (
                <NavbarItem
                  key={index}
                  label={item.label}
                  isExpanded={item.isExpanded}
                />
              ))}

              <NavbarItem
                label={"Watch Demo"}
                isExpanded={false}
                contentClassname={"text-sky-700"}
              />
              <NavbarItem label={"Sign In"} isExpanded={false} />
            </div>
          </div>

          <div className="flex w-full gap-2 justify-between">
            <Button
              label={"TALK TO SALES"}
              bgColor={"white"}
              classname={"flex-grow"}
              onClick={() => {}}
            />
            <Button
              label={"DOWNLOAD SLACK"}
              classname={"flex-grow"}
              onClick={() => {}}
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

NavbarSlider.propTypes = {
  isSliderOpened: PropTypes.bool.isRequired,
  handleSliderClick: PropTypes.func.isRequired,
};

export default NavbarSlider;
