import React from "react";
// import MenuTest from './component/MenuTest';
// import StarTest from './component/StarTest';
import ColorListTest from './component/ColorListTest';
import AddColorForm from './component/colorList/AddColorForm'

function App() {
  return (
    <AddColorForm onNewColor={(title, color) => {console.log(title, color);}} />
  );
}

export default App;