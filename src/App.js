// import logo from './logo.svg';
import './App.css';
import React from "react";

import { useState } from "react";

const foodDB = {
  breakfast: [
    { name: "Dosa and chutney", description: "It is one of easiest food to cook and is one of healthiest breakfast.", rating: "4/5" },
    { name: "Bread and peanut butter", description: "This doesn't require any cooking. so, it can be eaten with very less effort and provides great nutrition.", rating: "3.5/5" },
    { name: "omlette", description: "This is one of my favorite foods. It takes very less time to cook and is tasty. You can add vegetables to it.", rating: "4.5/5" }
  ],

  lunch: [
    { name: "Rice, dal and salad", description: "One of the most eaten food by indians. We can call it National luch of India. ", rating: "4/5" },
    { name: "Mixed veg rice with curd", description: "You can experiment with rice and add some vegetables to it so that it becomes bit healthy and nutritious.", rating: "4.5/5" }
  ],
  dinner: [
    { name: "Chapati and vegetables", description: "You should eat light and early at night so that you can sleep properly and feel fresh.", rating: "4.5/5" },
    { name: "Salad", description: "This is the best meal anyone can have for dinner. This is healthy and nutritious and doesn't take much time to cook.",rating: "5/5" }
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
              <div style={{ fontSize: "smaller" }}> {food.description} </div>
              <div style={{ fontSize: "smaller" }}> {food.rating} </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
