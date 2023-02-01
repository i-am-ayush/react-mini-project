import { useState } from "react";
import { RESTAURANT_LIST } from "../constant";
import RestaurantCard from "./RestaurantCard";
function filterData (searchText, restaurants) {
    return restaurants.filter((restaurant)=>restaurant.data.name.includes(searchText))
}
const Body = () => {
    const searchTextLocal = "somen19"
    const [searchText, setSearchText] = useState("somen19");
    let searchClicked = "false";
    const [searchClick, setSearchClick] = useState("false");
    const [restaurantList, setRestaurantList] = useState(RESTAURANT_LIST);
    return (
        <>
            <div className="searchContainer">
                {/* 
                    not working in react because of one way binding
                    <input
                    type="text"
                    placeholder="Enter search item here"
                    className="search-input"
                    value={searchTextLocal}
                    onChange={(e)=> searchTextLocal = e.target.value}
                /> */}
                <input
                    type="text"
                    placeholder="Enter search item here"
                    className="search-input"
                    value={searchText}
                    onChange={(e) => setSearchText(e.target.value)}
                />
                {/* <h1>{searchClicked}</h1>
                <h2>{searchClick}</h2> */}
                {/* <button onClick={()=>{
                    searchClicked="false";
                    setSearchClick("true");
                }} className="search-btn"> Search - {searchText}</button> */}
                <button onClick={() => {
                    const data = filterData(searchText, restaurantList);
                    setRestaurantList(data);
                }} className="search-btn"> Search </button>
            </div>
            {/* <div className="restaurantCard">
                {
                    RESTAURANT_LIST.map(restaurant => {
                        return <RestaurantCard {...restaurant.data} key={restaurant.data.id} />
                    })
                }
            </div> */}
            <div className="restaurantCard">
                {
                    restaurantList.map(restaurant => {
                        return <RestaurantCard {...restaurant.data} key={restaurant.data.id} />
                    })
                }
            </div>
        </>
    )
}

export default Body;
