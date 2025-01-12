import RestCard from "./RestCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";

const Body = () => {
    const [listOfRestaurants, setListofRestaurants]=useState([]);

    useEffect(()=>{
      fetchData();
    },[]);

    const fetchData = async ()=>{
      const data = await fetch(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=30.7333148&lng=76.7794179&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
      );
      const json=await data.json();
      console.log(json);
      setListofRestaurants(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    }

  
  return listOfRestaurants.length===0 ? (<Shimmer/>):
  (
    <div className="body">
      <div className="filter">
        <button className="filter-btn" onClick={()=>{
            const filteredRest=listOfRestaurants.filter((res)=>res.info.avgRating>=4.5);
            setListofRestaurants(filteredRest);
        }}>Top Rated Restaurants</button>
      </div>
      <div className="res-container">
        {
            listOfRestaurants.map(restaurant => <RestCard key={restaurant?.info?.id} resData={restaurant}/>)
        }
      </div>
    </div>
  );
};
export default Body;