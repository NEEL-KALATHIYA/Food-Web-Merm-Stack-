// import React from 'react'
import "./FoodDisplay.css";
import { StoreContext } from "../context/StoreContext";
import { useContext } from "react";
import FoodItem from "../FooItem/FoodItem";

const FoodDisplay = ({ category }) => {
  const { food_list } = useContext(StoreContext);
  return (
    <div className="food-display" id="food-">
      <h2>Top dishes near you</h2>
      <div className="food-display-list">
        {food_list.map((item, index) => {
          return <FoodItem key={index} id={item._id} name={item.name} description={item.description} price={item.price} image={item.image}/>;
        })}
      </div>
    </div>
  );
};

export default FoodDisplay;
