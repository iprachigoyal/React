import { CDN_URL } from "../utils/constants";
const RestCard = (props) => {
  const { resData } = props;
  const {
    cloudinaryImageId,
    name,
    cuisines,
    costForTwo,
    avgRatingString,
    sla,
  } = resData?.info;  
  return (
    <div className="m-4 p-4 w-[250px] bg-gray-100 rounded-lg hover:bg-gray-200">
      <img
        className="rounded-lg"
        src={CDN_URL + cloudinaryImageId}
        alt="res-logo"
      />
      <h3 className="font-bold py-4 text-md">{name}</h3>
      <p>{cuisines.join(", ")}</p>
      <p>{costForTwo}</p>
      <p>{avgRatingString} Stars</p>
      <p>{sla?.deliveryTime} minutes</p>
    </div>
  );
};
export const withPromotedLabel=(RestCard)=>{
  return (props)=>{
      return(
          <div>
              <label>Promoted</label>
              <RestCard {...props}/>;
          </div>
      )
  }
}
export default RestCard;
