import menuItems from "../../common/constant/discoverMenuItems";
import Separator from "../../common/components/elements/Separator";
import CategoryMenu from "./CategoryMenu";

const Discover = () => {
  return (
    <>
      <div className="w-full lg:px-36 lg:py-5 flex">
        <div className="hidden lg:block h-full max-w-48 h-full">
          <img
            src="/images/slack.png"
            alt={"slack"}
            className="w-full h-auto"
          />
        </div>

        <div className="w-full px-3 lg:grid lg:grid-cols-5 lg:gap-3">
          {Object.keys(menuItems).map((category, index) => (
            <CategoryMenu
              key={index}
              index={index}
              category={category}
              menuItems={menuItems[category]}
            />
          ))}
        </div>
      </div>
      <Separator />
    </>
  );
};

export default Discover;
