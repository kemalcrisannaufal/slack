import exploresItem from "../../common/constant/exploresItem";
import ExploreCard from "./ExploreCard";
import { useState } from "react";

const Explores = () => {
  const [cardIdx, setIdxCard] = useState(0);

  const handleIndicatorClick = (id) => {
    setIdxCard(id);
  };

  return (
    <div className="w-full px-5 py-10 lg:px-36 lg:pb-20 bg-cream">
      <div className="w-full">
        <h1 className="text-2xl lg:text-4xl text-neutral-800 font-bold text-center">
          Take a deeper dive into a new way to work
        </h1>
      </div>

      <div className="flex flex-col justify-center items-center mt-7 lg:hidden slider">
        <ExploreCard
          key={exploresItem[cardIdx]}
          tag={exploresItem[cardIdx].tag}
          title={exploresItem[cardIdx].title}
          image={exploresItem[cardIdx].image}
          linkLabel={exploresItem[cardIdx].linkLabel}
        />

        <div className="flex mt-10 gap-5">
          {exploresItem.map((_, index) => (
            <button
              key={index}
              className={`h-4 w-4 rounded-full bg-white ${
                index === cardIdx ? "bg-black" : "bg-neutral-300"
              }`}
              onClick={() => handleIndicatorClick(index)}
            ></button>
          ))}
        </div>
      </div>

      <div className="hidden lg:block">
        <div className="flex gap-5 items-start mt-10">
          {exploresItem.map((item) => (
            <ExploreCard
              key={item.id}
              tag={item.tag}
              title={item.title}
              image={item.image}
              linkLabel={item.linkLabel}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Explores;
