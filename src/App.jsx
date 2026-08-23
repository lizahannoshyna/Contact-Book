import React from 'react';
import './App.css';

import { ContactList } from './components/ContactList';
import { ContactForm } from './components/contactForm';
import { Filter } from './components/FIlter';


function App() {

  return (
    <div className="">
      <h1>Книга контактів</h1>
      <ContactForm/>
      <Filter/>
      <ContactList/>
    </div>
  )
}

export default App
