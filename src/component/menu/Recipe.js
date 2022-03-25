import React from "react";
import Instrunctions from './Instructions';
import IngredientsList from './IngredientsList';

export default function Recipe({ name, ingredients, steps }) {
    return (
        <section id={name.toLowerCase().replace(/ /g, "-")}>
            <h1>{name}</h1>
            <IngredientsList list={ingredients} />
            <Instrunctions title="조리 절차" steps={steps} />
        </section>
    );
}