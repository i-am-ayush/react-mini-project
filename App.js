
/**  Hot module reload is done by parcel
 * Bundling
 * minifying
 * cleaning our code
 * image optimization
 * caching while development
 * dev and production build
 * compression
 * compatible with older verion of browser
 * https on dev
 * port numbver
 * consistent hashing algorithm
 * zero config bundler
 * transitive dependencies
 * tree shaking
  And it is done by file watcher algorithm
  .parcel-cache takes some space to do its work.
  dist folder keeps the build folder if parcel builds for production npx parcel build index.html
*/
// npx is used to execute without installing packages but npm is used to install packages..
// npx= npm run
//we add type="module" because browser doesn't understand import
import React from "react";
import ReactDOM from "react-dom/client";
// const reactheading1 = React.createElement("h1",{"id": "com1", "key" : "h1"},"anand");
// const reactheading2 = React.createElement("h6",{"id": "com2", "key" : "h2"},"anup");
// const reactheading3 = React.createElement("div",{"id": "complex"},[reactheading1,reactheading2]);
// const root = ReactDOM.createRoot(document.getElementById("root"));
//jsx code - It is html like syntax but no html inside js
//React.createElement = obj  => HTML(DOM)
//JSX=>React.createElement = obj  => HTML(DOM) (babel does this)
// these are jsx expression..we dont need to import
//There is package.json in node modules to keep version transitive dependencies of pachake-lock
const reactjsxheading1 = (
  <h1 id = "title" key="h2"> greatt </h1>
)
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(reactjsxheading1);