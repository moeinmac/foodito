import React from "react";

const MealsContext = React.createContext({
  mealsValue : "",
  mealsFilter : (value)=>{}
})

export default MealsContext