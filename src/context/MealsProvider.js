import { useState } from "react";

import MealsContext from "./MealsContext";


const MealsProvider = (props) => {
  const [filteredValue , setFilteredValue] = useState("all")
  const filterMealsHandler = (value) => setFilteredValue(value)
    

  const mealsContext = {
    mealsValue: filteredValue,
    mealsFilter: filterMealsHandler
  };

  return <MealsContext.Provider value={mealsContext}>{props.children}</MealsContext.Provider>;
};

export default MealsProvider;
