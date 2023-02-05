import { useParams } from 'react-router-dom';
import { IMAGE_CDN_URL } from "../constant";
import useRestaurant from '../utils/useRestaurant';

const RestaurantMenu = () => {
    const params = useParams();
    const { id } = params;

    const restaurant = useRestaurant(id);
    console.log("restaurant", restaurant)
    // async function getRestaurantInfo() {
    //     const data = await fetch(`https://www.swiggy.com/dapi/menu/v4/full?lat=25.608087&lng=85.087365&menuId=${id}`)
    //     const json = await data.json()
    //     console.log(json.data);
    //     setRestaurant(json.data);
    // }
    // useEffect(() => {
    //     getRestaurantInfo()
    // }, [])
    return restaurant ? (
        <div className= "menuItems">
            <div>
                <h1>Restaurant id : {id}</h1>
                <h2>{restaurant.name}</h2>
                <img src={`${IMAGE_CDN_URL}${restaurant.cloudinaryImageId}`} />
                <h3>{restaurant.area}</h3>
                <h3>{restaurant.city}</h3>
                <h3>{restaurant.avgRating} *</h3>
                <h3>{restaurant.costForTwoMsg}</h3>
                <h3>{restaurant.area}</h3>
            </div>
            <div>
                <h1>Menu</h1>
                <ul>
                    {Object.values(restaurant?.menu?.items).map((item)=>{
                        return <li key = {item.id}>{item.name}</li> 
                    })}
                </ul>
            </div>
        </div>
    ) : null
}

export default RestaurantMenu;
