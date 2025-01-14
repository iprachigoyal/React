import RestCard from "./RestCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import{Link} from "react-router";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {
    const [listOfRestaurants, setListofRestaurants]=useState([]);
    const [filteredRestaurant, setFiletredRestaurants]=useState([]);
    const [searchText, setSearchText]=useState("");

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
      setFiletredRestaurants(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    }
     const onlineStatus =useOnlineStatus();

     if(onlineStatus===false)return <h1>Looks like you re offline</h1>;
  
  return listOfRestaurants.length===0 ? (<Shimmer/>):
  (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input type="text" className="search-box" value={searchText} onChange={(e)=>{
            setSearchText(e.target.value);
          }}/>
          <button className="search-btn" onClick={()=>{
              const filteredRest=listOfRestaurants.filter((res)=>res?.info?.name.toLowerCase().includes(searchText.toLowerCase()));
              setFiletredRestaurants(filteredRest);
          }}>Search</button>
        </div>
        <button className="filter-btn" onClick={()=>{
            const filteredRest=listOfRestaurants.filter((res)=>res.info.avgRating>=4.5);
            setListofRestaurants(filteredRest);
        }}>Top Rated Restaurants</button>
      </div>
      <div className="res-container">
        {
            filteredRestaurant.map(restaurant =><Link to={"/restaurants/"+restaurant?.info?.id} key={restaurant?.info?.id}><RestCard  resData={restaurant}/></Link> )
        }
      </div>
    </div>
  );
};
export default Body;