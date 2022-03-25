import React from "react";
import Ingredients from './Ingredients';

export default function IngredientsList({ list }) {
    return (
        <ul className='ingredients'>
            {list.map((ingredient, i) => (
                <Ingredients key={i} {...ingredient} />
            ))}
        </ul>
    );
}