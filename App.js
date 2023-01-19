
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
  And it is done by file watcher algorithm
  .parcel-cache takes some space to do its work.
  dist folder keeps the build folder if parcel builds for production npx parcel build index.html
*/
//we add type="module" because browser doesn't understand import
import React from "react";
import ReactDOM from "react-dom/client";
const reactheading1 = React.createElement("h1",{"id": "com1"},"anand");
const reactheading2 = React.createElement("h6",{"id": "com2"},"anup");
const reactheading3 = React.createElement("div",{"id": "complex"},[reactheading1,reactheading2]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(reactheading3);