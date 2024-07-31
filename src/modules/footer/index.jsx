import footerItems from "../../common/constant/footerItems";
import FooterItem from "./FooterItem";
import Slack from "../../assets/slack.svg";

const Footer = () => {
  return (
    <div className="w-full px-5 lg:px-36 flex flex-wrap lg:flex-nowrap justify-between items-start">
      <div className="lg:hidden mb-2">
        <img src={Slack} alt={"slack"} className="w-max h-auto" />
      </div>
      <div className="my-2">
        <ul className="flex flex-wrap gap-4">
          {footerItems.map((item) => (
            <FooterItem
              key={item.id}
              label={item.label}
              linkTo={item.linkTo}
              image={item.icon}
              classname={item.classname}
            />
          ))}
        </ul>
      </div>
      <div>
        <div className="lg:text-end text-neutral-700 text-sm font-normal p-1">
          <p>
            ©2024 Slack Technologies, LLC, a Salesforce company. All rights
            reserved.
          </p>
          <p>Various trademarks held by their respective owners.</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
