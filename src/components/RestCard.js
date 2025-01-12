import { CDN_URL } from "../utils/constants";
const RestCard = (props) => {
    const { resData } = props;
    const {cloudinaryImageId, name, cuisines, costForTwo, avgRatingString, sla}= resData?.info;
    return (
      <div className="restCard">
        <img
          className="res-logo"
          src={CDN_URL
             +
            cloudinaryImageId
          }
          alt="res-logo"
        />
        <h3>{name}</h3>
        <p>{cuisines.join(", ")}</p>
        <p>{costForTwo}</p>
        <p>{avgRatingString} Stars</p>
        <p>{sla?.deliveryTime} minutes</p>
      </div>
    );
  };
  export default RestCard;