import React from 'react'
import Header from './Header'
import FoodOption from "./FoodOption";
import GroceryOption from "./GroceryOption";
import DineOption from "./DineOption";

function Home() {
  return (
    <div>
      <Header></Header>
       <FoodOption></FoodOption>
       <GroceryOption></GroceryOption>
       <DineOption></DineOption>
    </div>
  )
}

export default Home