import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import RestaurantCard from "./RestaurantCard";
import { Link } from "react-router-dom";
import useOnline from "../utils/useOnline";
import ChromeDinoGame from 'react-chrome-dino';
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
        console.log(json?.data?.cards[2]?.data?.data?.cards)
        setAllRestaurantList(json?.data?.cards[2]?.data?.data?.cards)
        setFilteredRestaurantList(json?.data?.cards[2]?.data?.data?.cards)
    }

    useEffect(() => {
        getReastaurantsList();
    }, [])
    // Debouncing
    useEffect(() => {
        const getData = setTimeout(() => {
            console.log("timeinnn");
            const data = filterData(searchText, allRestaurantList)
            setFilteredRestaurantList(data);
        }, 200)
        return () => {
            console.log("timeout");
            return clearTimeout(getData)
        }
    }, [searchText])
    const online = useOnline();
    if (!online) {
        return <div className="bg-pink-50">
            <ChromeDinoGame />
            <h1 className="align-middle">No  Internet connection</h1>
        </div>
    }

    if (!allRestaurantList) {
        return null
    }

    return (allRestaurantList.length == 0 ? <Shimmer /> : (
        <>
            <div className="searchContainer p-5 bg-pink-50 my-5">
                <input
                    type="text"
                    placeholder="Enter search item here"
                    className="search-input focus-within:bg-pink-300"
                    value={searchText}
                    onChange={(e) => setSearchText(e.target.value)}
                />
                <button onClick={() => {
                    const data = filterData(searchText, allRestaurantList);
                    setFilteredRestaurantList(data);
                }} className="p-2 m-2 bg-pink-800 text-white rounded-lg hover:bg-gray-600"> Search </button>
            </div>
            {filteredRestaurantList.length == 0 ? <h1>No restaurant data matched</h1> :
                <div className="restaurantCard flex flex-wrap">
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