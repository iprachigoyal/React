import useRestMenu from "../utils/useRestMenu";
import Shimmer from "./Shimmer";
import{useParams} from "react-router";

const RestMenu = () => {
  
  const {resId}=useParams();

  const resInfo =useRestMenu(resId);

  if(resInfo===null) return <Shimmer/>
  const{ name, cuisines, costForTwoMessage}= resInfo?.cards[2]?.card?.card?.info;
  const itemCards =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards ||
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards;

  console.log(itemCards);


  return (
    <div className="menu">
      <h1>{name}</h1>
      <p>{cuisines.join(", ")} - {costForTwoMessage}</p>
      <h3>Menu</h3>
      <ul>
        {itemCards.map(item=> <li key={item.card.info.id}>{item.card.info.name} - Rs {item.card.info.price/100 || item.card.info.defaultPrice/100}</li>)}
      </ul>
    </div>
  );
};
export default RestMenu;