import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import RestaurantCard from "./RestaurantCard";
import { Link } from "react-router-dom";
import useOnline from "../utils/useOnline";
function filterData(searchText, restaurants) {
    return restaurants.filter((restaurant) => restaurant?.data?.name?.toLowerCase().includes(searchText.toLowerCase()))
}

const Body = () => {

    const [searchText, setSearchText] = useState("");
    const [filteredRestaurantList, setFilteredRestaurantList] = useState([]);
    const [allRestaurantList, setAllRestaurantList] = useState([]);
    async function getReastaurantsList() {
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=25.608087&lng=85.087365&page_type=DESKTOP_WEB_LISTING")
        const json = await data.json();
        console.log(json);
        setAllRestaurantList(json?.data?.cards[2]?.data?.data?.cards)
        setFilteredRestaurantList(json?.data?.cards[2]?.data?.data?.cards)
    }

    useEffect(() => {
        getReastaurantsList();
    }, [])

    const online = useOnline();
    console.log("onlinee", online)
    if(!online){
        return <h1>No Internet connection</h1>
    }

    if(!allRestaurantList){
        return null
    }

    return (allRestaurantList.length == 0 ? <Shimmer /> : (
        <>
            <div className="searchContainer">
                <input
                    type="text"
                    placeholder="Enter search item here"
                    className="search-input"
                    value={searchText}
                    onChange={(e) => setSearchText(e.target.value)}
                />
                <button onClick={() => {
                    const data = filterData(searchText, allRestaurantList);
                    setFilteredRestaurantList(data);
                }} className="search-btn"> Search </button>
            </div>
            {filteredRestaurantList.length == 0 ? <h1>No restaurant data matched</h1> :
                <div className="restaurantCard">
                    {
                        filteredRestaurantList.map(restaurant => {
                            return (
                                <Link to={`/restaurant/${restaurant.data.id}`}>
                                    <RestaurantCard {...restaurant.data} key={restaurant.data.id} />
                                </Link>
                            )
                        })
                    }
                </div>
            }
        </>
    )
    )
}

export default Body;