import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

// var dish = React.createElement("h1", null, "구운연어");
// var dessert = React.createElement("h2", null, "코코넛 크림 파이");
// ReactDOM.render([dish, dessert], document.getElementById("root"));

const root = document.getElementById("root");
// const list = React.createElement(
//   "ul",
//   null,
//   React.createElement("li", null, "연어"),
//   React.createElement("li", null, "로즈마리"),
//   React.createElement("li", null, "오일"),
//   React.createElement("li", null, "레몬"),
//   React.createElement("li", null, "마늘"),
// );
const items = [ "연어", "로즈마리", "오일", "레몬", "마늘" ];
const list = React.createElement(
  "ul", 
  { className: "ingredients" },
  items.map((item, i) => 
    React.createElement("li", { key: i }, item)
  )
)
ReactDOM.render(list, root)

console.log(list);
