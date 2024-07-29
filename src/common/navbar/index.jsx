import Button from "../components/elements/Button";
import { FaSearch, FaBars } from "react-icons/fa";
import navbarItems from "../constant/navbarItems";
import NavbarItem from "./NavbarItem";
import { useState } from "react";
import NavbarSlider from "./NavbarSlider";

const Navbar = () => {
  const [isSliderOpened, setIsSliderOpened] = useState(false);

  const handleSliderClick = () => {
    setIsSliderOpened(!isSliderOpened);
  };

  return (
    <div className="w-full max-h-screen l flex justify-between items-center bg-white px-5 py-2 lg:rounded-l-full lg:rounded-r-full relative select-none">
      
      <NavbarSlider
        isSliderOpened={isSliderOpened}
        handleSliderClick={handleSliderClick}
      />

      <div className="flex gap-5">
        <div className="w-max h-auto">
          <img src={"/images/logo.png"} alt="slack" />
        </div>
        <div>
          <ul className="hidden lg:flex gap-2 ">
            {navbarItems.map((item, index) => (
              <li key={index}>
                <NavbarItem label={item.label} isExpanded={item.isExpanded} />
              </li>
            ))}
          </ul>
        </div>
      </div>
      
      <div className="flex items-center gap-3">
        <button className="w-max h-max p-1">
          <FaSearch className="text-xl font-thin text-neutral-700" />
        </button>

        <button
          className="w-max h-max p-1 lg:hidden"
          onClick={handleSliderClick}
        >
          <FaBars className="text-xl font-thin text-neutral-700" />
        </button>

        <NavbarItem
          label={"Sign In"}
          isExpanded={false}
          buttonClassname={"hidden lg:block"}
        />
        <Button
          onClick={() => {}}
          label={"TALK TO SALES"}
          bgColor={"white"}
          classname="hidden xl:block"
        />
        <Button
          onClick={() => {}}
          label={"GET STARTED"}
          classname="hidden lg:block"
        />
      </div>
    </div>
  );
};

export default Navbar;
