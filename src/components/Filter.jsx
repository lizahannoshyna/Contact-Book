import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setFilter } from "../store/filterSlice";
export const Filter = () => {
  const value = useSelector((state) => state.filter);
  const dispatch = useDispatch();

  const handleChange = (e) => {
    dispatch(setFilter(e.target.value));
  };

  return (
    <label>
      Знайти контакт за ім'ям:
      <input 
        type="text" 
        value={value} 
        onChange={(e) => dispatch(setFilter(e.target.value))}
      />
    </label>
  );
};

