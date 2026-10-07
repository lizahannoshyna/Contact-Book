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
    <div className="flex flex-col items-center max-w-xs mx-auto w-full my-4">
    <label className="flex flex-col items-center gap-1.5 text-gray-700 text-sm font-medium text-center w-full">
      Знайти контакт за ім'ям:
      <input 
        type="text" 
        value={value} 
        onChange={handleChange}
        className="border border-[#bbc3d3] hover:border-[#5373d5] focus:border-[#5373d5] focus:outline-none transition-colors duration-200 px-4 py-2 rounded-lg text-gray-700 w-full"
      />
    </label>
  </div>
  );
};