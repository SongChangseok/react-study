import React from "react";
import StarRating from "../star/StartRating";
import { FaTrash } from "react-icons/fa";
import { useColors } from "../hooks/color-hooks";
import { useNavigate } from "react-router";

export default function Color({ id, title, color, rating }) {
  const { rateColor, removeColor } = useColors();
  let navigate = useNavigate();
  return (
    <section>
      <h1>{title}</h1>
      <button onClick={() => removeColor(id)}>
        <FaTrash />
      </button>
      <div style={{ height: 50, backgroundColor: color }} />
      <StarRating
        selectedStars={rating}
        onRate={(rating) => rateColor(id, rating)}
      />
      <button onClick={() => navigate(`/${id}`)}>test</button>
    </section>
  );
}
