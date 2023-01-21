import React from "react";
import ReactDOM from "react-dom/client";
const reactjsxheading1 = (
  <h1 id="title" key="h2"> greatt </h1>
)

const Reactjsxheading1func = () => (
  <h1 id="title" key="h2"> greatt2 </h1>
)
// const data = api.data()
//react component
//functional compo starts with capital name-not mandatory
//we give (parenthesis) if jsx is in multiple lines
//component composition - passing component inside component
const HeaderComponent = () => {
  return (
    <div>
      {/* {data}  we can write any piece of js code inside {} and jsx keeps sanitizing every malware attack, it keeps the app safe*/}
      {reactjsxheading1}
      {Reactjsxheading1func()}
      <Reactjsxheading1func/>
      <h1>functional component</h1><h2>functional component part 2</h2>
    </div>
  )
}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeaderComponent/>);