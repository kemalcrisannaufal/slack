import Button from "../../common/components/elements/Button";
import SocialMediaIcons from "../../common/constant/socialMedia";
import RegionDropDown from "./RegionDropDown";
import SocialMediaIconButton from "./SocialMediaIconButton";
import Separator from "../../common/components/elements/Separator";

const CallToAction = () => {
  return (
    <div className="w-full pb-5">
      <div className="w-full bg-fuchsia-950 text-white h-[380px] rounded-b-[40%] lg:rounded-b-[45%] flex flex-col items-center justify-center px-0 lg:px-36 lg:py-20">
        <div>
          <h1 className="text-3xl lg:text-5xl font-bold text-center">
            See all you can accomplish with Slack
          </h1>

          <div className="mt-5 lg:mt-10 flex flex-col lg:flex-row justify-center gap-3 px-10">
            <Button
              label={"GET STARTED"}
              bgColor={"white"}
              classname={"w-full h-14 lg:w-48"}
              onClick={() => {}}
            />
            <Button
              label={"TALK TO SALES"}
              classname={"w-full h-14 lg:w-52"}
              onClick={() => {}}
            />
          </div>
        </div>
      </div>
      <div className="w-full flex flex-col lg:flex-row justify-center items-center lg:justify-between mt-10 lg:px-36">
        <RegionDropDown onClick={() => {}} />
        <div className="flex items-center gap-5 mt-5 lg:m-0">
          {SocialMediaIcons.map((item, index) => (
            <SocialMediaIconButton
              key={index}
              icon={item.icon}
              destination={item.url}
            />
          ))}
        </div>
      </div>
      <Separator/>
    </div>
  );
};

export default CallToAction;
