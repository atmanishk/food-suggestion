// import logo from './logo.svg';
import './App.css';
import React from "react";

import { useState } from "react";

const foodDB = {
  breakfast: [
    { name: "Dosa and chutney", rating: "4/5" },
    { name: "Bread and peanut butter", rating: "3.5/5" },
    { name: "omlette", rating: "4.5/5" }
  ],

  lunch: [
    { name: "Rice, dal and salad", rating: "4/5" },
    { name: "Mixed veg rice with curd", rating: "4.5/5" }
  ],
  dinner: [
    { name: "Chapati and vegetables", rating: "4.5/5" },
    { name: "Salad", rating: "5/5" }
  ]
};

export default function App() {
  const [selectedCuisine, setCuisine] = useState("breakfast");
  function cuisineClickHandler(cuisine) {
    setCuisine(cuisine);
  }
  return (
    <div className="App">
      <h1> 🥗 goodfoods </h1>
      <p style={{ fontSize: "smaller" }}> These are my food recommendations for your good health. </p>
      <div>
        {Object.keys(foodDB).map((cuisine) => (
          <button onClick={() => cuisineClickHandler(cuisine)} style={{ 
            cursor: "pointer", 
            background: "#E5E7EB", 
            borderRadius: "0.5rem", 
            padding: "0.5rem  1rem", 
            border: "1px solid black", 
            margin: "1rem 0.3rem"
            }}
          >
            {cuisine}
          </button>
        ))}
      </div>
      <hr />
      <div style={{ textAlign: "left" }}>
        <ul style={{ paddingInlineStart: "0" }}>
          {foodDB[selectedCuisine].map((food) => (
            <li
              key={food.name}
              style={{
                listStyle: "none",
                padding: "1rem",
                border: "1px solid #D1D5DB",
                width: "70%",
                margin: "1rem 0rem",
                borderRadius: "0.5rem"
              }}
            >
              <div style={{ fontSize: "larger" }}> {food.name} </div>
              <div style={{ fontSize: "smaller" }}> {food.rating} </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
