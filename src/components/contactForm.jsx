import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addContact } from "../store/operations";
import { selectAllContacts } from "../store/contactsSlice"; 

export const ContactForm = () => {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");

  const dispatch = useDispatch();

  const contacts = useSelector(selectAllContacts);

  const handleSubmit = (e) => {
    e.preventDefault();

    const isExist = contacts.some(
      (contact) => contact.name.toLowerCase() === name.toLowerCase(),
    );

    if (isExist) {
      alert(`${name} вже є у вашому списку контактів`);
      return;
    }

    dispatch(addContact({ name, phone: number }));

    setName("");
    setNumber("");
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col items-center gap-4 max-w-xs mx-auto w-full">
      <label className="flex flex-col items-center gap-1.5 text-gray-700 text-sm font-medium text-center w-full">
        Ім'я :
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          className="border border-[#bbc3d3] hover:border-[#5373d5] focus:border-[#5373d5] focus:outline-none transition-colors duration-200 px-4 py-2 rounded-lg text-gray-700 w-full"
        />
      </label>

      <label className="flex flex-col items-center gap-1.5 text-gray-700 text-sm font-medium text-center w-full">
        Номер телефону:
        <input
          type="tel"
          value={number}
          onChange={(e) => setNumber(e.target.value)}
          required
          className="border border-[#bbc3d3] hover:border-[#5373d5] focus:border-[#5373d5] focus:outline-none transition-colors duration-200 px-4 py-2 rounded-lg text-gray-700 w-full"
        />
      </label>

      <button
        type="submit"
        className="bg-white border border-[#bbc3d3] text-[#5373d5] hover:bg-[#5373d5] hover:border-[#5373d5] hover:text-white transition-colors duration-200 px-4 py-2 rounded-lg font-medium w-full"
      >
        Зберегти
      </button>
    </form>
  );
};