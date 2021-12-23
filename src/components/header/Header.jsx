import { React, useContext, useEffect, useState } from "react";
import "./Header.css";
import ContactsContextProvider from "../Context/ContactsContext";
import { FilterContext } from "../Context/ContactsContext";
import { ContactsContext } from "../Context/ContactsContext";

const Header = () => {
  const { filter, setFilter } = useContext(FilterContext);
  const { contacts, setContacts } = useContext(ContactsContext);

  useEffect(() => {
    
  }, [setFilter])
  return (
    <ContactsContextProvider>
      <div className="header">
        <input
          type="search"
          placeholder="Type To Search..."
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
        />
        <button>Add Contact</button>
        <button>Add Group</button>
      </div>
    </ContactsContextProvider>
  );
};

export default Header;
