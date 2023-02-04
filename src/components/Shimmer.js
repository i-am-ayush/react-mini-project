const Shimmer = () => {

    return (
        <div className="restaurantCard">
            {Array(12).fill("").map(()=> (
                <div className="shimmerCard"></div>
            ))     
            }
        </div>
    )
}

export default Shimmer;