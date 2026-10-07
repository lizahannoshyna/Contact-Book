import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteContact } from "../store/operations";

export const ContactList = () => {
  const contacts = useSelector((state) => state.contacts.items);
  const filter = useSelector((state) => state.filter);

  const dispatch = useDispatch();

  const filteredContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <ul>
      {filteredContacts.map(({ id, name, phone }) => (
        <li key={id}>
          {name}: {phone}
          <button
            type="button"
            onClick={() => dispatch(deleteContact(id))}
            className="bg-white border border-[#bbc3d3] text-[#5373d5] hover:bg-[#5373d5] hover:border-[#5373d5] hover:text-white transition-colors duration-200 px-2 py-1 rounded-lg font-medium"
          >
            Видалити
          </button>
        </li>
      ))}
    </ul>
  );
};