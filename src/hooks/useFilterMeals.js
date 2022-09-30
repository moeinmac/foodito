import { useEffect, useState } from "react";
import supabase from "../supabase";

const useFilterMeals = (value) => {
  const [meals, setMeals] = useState([0, 1, 2, 3]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const getMeals = async () => {
      if (value === "all") {
        let { data, error } = await supabase.from("food").select("*");
        if (data) {
          setLoading(false);
          setMeals(data);
        }
      } else {
        setLoading(true);
        setMeals([0, 1, 2, 3]);
        let { data, error } = await supabase
          .from("food")
          .select("*")
          .eq("type", value);
        setLoading(false);
        setMeals(data);
      }
    };
    getMeals();
  }, [value]);

  return {
    meals,
    loading,
  };
};

export default useFilterMeals;
