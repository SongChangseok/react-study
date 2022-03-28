import React from "react";
import Star from "./Star";
import createArray from "../common/Array";

export default function StarRating({ totalStars = 5, selectedStars = 0, onRate = f => f }) {
    // const [selectedStars, setSelectedStars] = useState(selectedStars);
    return (
        // <div style={{ padding: "5px", ...style }}>
        <>
            {createArray(totalStars).map((v, i) => (
                <Star 
                    key={i} 
                    selected={selectedStars > i}
                    onSelect={() => onRate(i + 1)}
                />
            ))}
            <p>
                {selectedStars} / {totalStars}
            </p>
        </>
        // </div>
    )
}