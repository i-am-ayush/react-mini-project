// read about shimmer effect, ex-youtube,swiggy
import { useEffect, useState } from "react";
// import { RESTAURANT_LIST } from "../constant";
// we can write only js expresion and statement inside {} not js code
import Shimmer from "./Shimmer";
import RestaurantCard from "./RestaurantCard";
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
        // optional chaining -> it wontbreak the code if property is not present, it gives undefined
        setAllRestaurantList(json?.data?.cards[2]?.data?.data?.cards)
        setFilteredRestaurantList(json?.data?.cards[2]?.data?.data?.cards)
    }
    // it will be called once after initial render
    useEffect(() => {
        getReastaurantsList();
        // API call should be done here
    }, [])

    // useEffect(()=>{
    //     console.log("render")
    // }, [restaurantList])
    // console.log("without use effect render")

    // if (filteredRestaurantList?.length == 0) {
    //     return <h1>No data matched</h1>
    // }
    // conditional rendering
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
                            return <RestaurantCard {...restaurant.data} key={restaurant.data.id} />
                        })
                    }
                </div>
            }
        </>
    )
    )
}

export default Body;