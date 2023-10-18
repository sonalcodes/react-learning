const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "I am h1 tag"),
    React.createElement("h2", {}, "I am an h2 Tag"),
  ]),

  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", {}, "I am h1 tag"),
    React.createElement("h2", {}, "I am an h2 Tag"),
  ]),
]);

/*const heading = React.createElement(
  "h1",
  {
    id: "heading",
  },
  "Hello world from React !"
);*/

//console.log(heading); // this is a javascript object , can also say react element
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent); // resposible to converting it to the h1 tag
