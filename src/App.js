// Topics to discuss
// discuss all type of imports
// 
import React from "react";
import ReactDOM from "react-dom/client";
// import ways
// import Header from "./components/Header";
// import Header from "./components/Header";
// header.js this also work
// we can write filename Header.jsx then we can import through Header.jsx also
import * as obj from "./components/Header.js";
import Body from "./components/Body";
import Footer from "./components/Footer";

const AppLayout = () => {
  return (
    <>
      <obj.Header />
      <Body />
      <Footer />
    </>
  )
}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
