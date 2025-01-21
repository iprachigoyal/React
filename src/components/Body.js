import RestCard, { withPromotedLabel } from "./RestCard";
import { useState, useEffect, useContext } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";

const Body = () => {
  const [listOfRestaurants, setListofRestaurants] = useState([]);
  const [filteredRestaurant, setFiletredRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");
  console.log(listOfRestaurants);
  const RestCardPromoted = withPromotedLabel(RestCard);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=30.7333148&lng=76.7794179&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    console.log(json);
    setListofRestaurants(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFiletredRestaurants(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };
  const onlineStatus = useOnlineStatus();

  if (onlineStatus === false) return <h1>Looks like you re offline</h1>;

  const {loggedInUser, setUserInfo}=useContext(UserContext)

  return listOfRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter flex">
        <div className="search m-4 p-4">
          <input
            type="text"
            data-testid="searchInput"
            className="border border-solid border-black"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            className="px-4 py-2 bg bg-pink-100 m-4 rounded-lg"
            onClick={() => {
              const filteredRest = listOfRestaurants.filter((res) =>
                res?.info?.name.toLowerCase().includes(searchText.toLowerCase())
              );
              setFiletredRestaurants(filteredRest);
            }}
          >
            Search
          </button>
        </div>
        <div className="search m-4 p-4 flex items-center">
          <button
            className="px-4 py-2 bg-gray-50 rounded-lg "
            onClick={() => {
              const filteredRest = listOfRestaurants.filter(
                (res) => res.info.avgRating >= 4.5
              );
              setListofRestaurants(filteredRest);
            }}
          >
            Top Rated Restaurants
          </button>
        </div>
        <div className="search m-4 p-4 flex items-center">
          <label >Username: </label>
          <input  className="border border-black p-2" value={loggedInUser} onChange={(e)=>setUserInfo(e.target.value)}/>
        </div>
      </div>
      <div className="flex flex-wrap">
        {filteredRestaurant.map((restaurant) => (
          <Link
            to={"/restaurants/" + restaurant?.info?.id}
            key={restaurant?.info?.id}
          >
            {restaurant.info.promoted ? (
              <RestCardPromoted resData={restaurant} />
            ) : (
              <RestCard resData={restaurant} />
            )}
            
          </Link>
        ))}
      </div>
    </div>
  );
};
export default Body;
