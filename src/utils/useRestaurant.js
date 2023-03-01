import { useEffect, useState } from "react"
// Our first custom hook
const useRestaurant = (id) => {
    console.log("aaya ni hero", id);
    const [restaurant, setRestaurant] = useState(null);
    useEffect(() => {
        console.log("hehehehehe")
        getRestaurantInfo();
    }, [])
    async function getRestaurantInfo() {
        console.log("okokokok")
        const data = await fetch(`https://www.swiggy.com/dapi/menu/v4/full?lat=25.608087&lng=85.087365&menuId=${id}`)
        const json = await data.json()
        setRestaurant(json.data);
        console.log("datataaa", json.data)
    }

    return restaurant
}

export default useRestaurant