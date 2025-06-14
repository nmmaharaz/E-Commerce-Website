"use client";
import { Rating, ThinStar } from "@smastrom/react-rating";
import { useState } from "react";
import "@smastrom/react-rating/style.css";

export default function ProductRating() {
    const [rating, setRating] = useState(0);

    const defaultStyles = {
        itemShapes: ThinStar,
        activeFillColor: "#ffffff",
        activeStrokeColor: "#d1d5db",
        inactiveFillColor: "#ffffff",
        inactiveStrokeColor: "#d1d5db",
        itemStrokeWidth: 2, // 👈 This is important for border to appear
    };

    const ratedStyles = {
        itemShapes: ThinStar,
        activeFillColor: "#ffb700",
        activeStrokeColor: "#ffb700",
        inactiveFillColor: "#fbf1a9",
        inactiveStrokeColor: "#d1d5db",
        itemStrokeWidth: 2,
    };

    return (
        <div>
            <label className="text-[13px] font-bold text-gray-700 block pb-2">PRODUCT RAMS</label>
            <Rating
                style={{ maxWidth: 160 }}
                value={rating}
                onChange={setRating}
                itemStyles={rating === 0 ? defaultStyles : ratedStyles}
            />
        </div>
    );
}
