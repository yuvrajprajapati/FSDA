console.log("connection establoished");
const parent = document.getElementById("root");
console.dir(parent);
const root = ReactDOM.createRoot(parent);
// const h1 = React.createElement(
//   "h1",
//   { style: { color: "blue" } },
//   "ABES Engineering College"
// );
// const l1 = React.createElement("li", {}, "orange");
// const l2 = React.createElement("li", {}, "apple");
// const ul = React.createElement(
//   "ul",
//   { style: { backgroundColor: "red" } },
//   l1,
//   l2
// );
const element = <h1> Hello</h1>;
const l1 = <li>orenage</li>;
const l2 = <li>Apple</li>;
const ul = (
  <ul>
    {l1}
    {l2}
  </ul>
);
const container = (
  <div style={{ backgroundColor: "cyan" }}>
    <div>{element}</div>
    <div>{ul}</div>
  </div>
);

root.render(container);
