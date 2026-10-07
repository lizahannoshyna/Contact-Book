import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from './store/operations';

import { ContactList } from './components/ContactList';
import { ContactForm } from './components/contactForm';
import { Filter } from './components/Filter';

import './App.css';

function App() {
  const dispatch = useDispatch();
  const isLoading = useSelector((state) => state.contacts.isLoading);
  const error = useSelector((state) => state.contacts.error);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div className="">
      <h1>Книга контактів</h1>
      <ContactForm />
      <Filter />
      
      {isLoading && !error && <p>Завантаження контактів...</p>}
      {error && <p style={{ color: 'red' }}>Помилка: {error}</p>}
      
      <ContactList />
    </div>
  );
}

export default App;