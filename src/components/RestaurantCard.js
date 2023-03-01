import { IMAGE_CDN_URL } from "../constant";

const RestaurantCard = ({
    name,
    cuisines,
    cloudinaryImageId,
    lastMileTravelString,
}) => {
    return (
        <div className="w-[200px] h-[250px] p-2 m-5 shadow-lg bg-pink-50">
            <img src={`${IMAGE_CDN_URL}${cloudinaryImageId}`} />
            <h2 className = "font-bold text-xl:">{name}</h2>
            <h3>{cuisines.join(", ")}</h3>
            <h4>{lastMileTravelString}</h4>
        </div>
    )
}

export default RestaurantCard