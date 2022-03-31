import React from "react";
import AddColorForm from "./colorList/AddColorForm";

export default function AddColorFormTest() {
    return (
        <AddColorForm onNewColor={(title, color) => {console.log(title, color);}} />
    );
}