import useRestMenu from "../utils/useRestMenu";
import RestCategory from "./RestCategory";
import Shimmer from "./Shimmer";
import { useParams } from "react-router";
import RestCategory from "./RestCategory";
import { useState } from "react";

const RestMenu = () => {
  const { resId } = useParams();

  const resInfo = useRestMenu(resId);
  const [showIndex, setShowIndex]=useState();

  if (resInfo === null) return <Shimmer />;
  const { name, cuisines, costForTwoMessage } =
    resInfo?.cards[2]?.card?.card?.info;
  const itemCards =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card
      ?.itemCards ||
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card
      ?.itemCards;

  console.log(resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards);

  const categories =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c?.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );
  console.log(categories);

  return (
    <div className="text-center ">
      <h1 className="font-bold my-6 text-2xl">{name}</h1>
      <p className="font-bold text-md">
        {cuisines.join(", ")} - {costForTwoMessage}
      </p>
      {categories.map((category, index) => (
        <RestCategory
          key={category?.card?.card.title}
          data={category?.card?.card}
          showItems={index=== showIndex ? true:false}
          setShowIndex={()=>setShowIndex((prevIndex) => (prevIndex === index ? null : index))}
        />
      ))}
    </div>
  );
};
export default RestMenu;
