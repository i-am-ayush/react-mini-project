import React from "react";
import ReactDOM from "react-dom/client";
import { RestaurantList } from "./constant";

/**
 * Header
 *  logo
 *  list items
 *  cart
 * body
 *  searchbar
 *  restaurantlist
 *    restaurantcard
 *      image
 *      name
 *      rating
 *      cuisines
 * footer
 *  links
 *  copyight
 */

//Jsx elements can have only one parent
//if we dont want div then we can use reactfragment-- we cannot pass any style or anything
const Title = () => (
  <a href="/">
    <img className="logo" alt="logo" src="https://cdn.vox-cdn.com/thumbor/5d_RtADj8ncnVqh-afV3mU-XQv0=/0x0:1600x1067/1200x900/filters:focal(672x406:928x662)/cdn.vox-cdn.com/uploads/chorus_image/image/57698831/51951042270_78ea1e8590_h.7.jpg"></img>
  </a>
)

const Header = () => {
  return (
    <div className="header">
      <Title />
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  )
}
// config driven ui
// const mehtaFood = {
//   name: "mehta food",
//   image: "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/cadd4qgaodthe0ulvbgv",
//   cuisine: ["indian", "chinese"],
//   rating: "4.3"
// }

const RestaurantCard = ({
  name,
  cuisines,
  cloudinaryImageId,
  lastMileTravelString,
}) => {
  return (
    <div className="card">
      <img src= {`https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/${cloudinaryImageId}`}/>
      <h2>{name}</h2>
      <h3>{cuisines.join(", ")}</h3>
      <h4>{lastMileTravelString} minutes</h4>
    </div>
  )
}

const Body = () => {
  return (
    <div className="restaurantCard">
      {
        RestaurantList.map(restaurant =>{
          return <RestaurantCard {...restaurant.data}/>
        })
      }
    </div>
  )
}

const Footer = () => {
  return <h4>footer</h4>
}

const AppLayout = () => {
  return (
    <>
      <Header />
      <Body />
      <Footer />
    </>
  )
}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);