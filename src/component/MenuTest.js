import React from "react";
import Menu from './menu/Menu';
import recipes from './menu/recipes.json';

export default function MenuTest() {
    return (
        <Menu recipes={recipes} title="맛있는 조리법" />
    );
}