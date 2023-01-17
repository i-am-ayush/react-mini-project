const reactheading = React.createElement("h1",{"id": "title"},"namaste reactjs");
const reactheading1 = React.createElement("h1",{"id": "com1"},"nononono");
const reactheading2 = React.createElement("h5",{"id": "com2"},"yoyoyoyo");
const reactheading3 = React.createElement("div",{"id": "complex"},[reactheading1,reactheading2]);
const root2 = ReactDOM.createRoot(document.getElementById("root2"));
root2.render(reactheading3);