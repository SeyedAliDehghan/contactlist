import { React, useContext, useEffect, useState } from "react";
import "./Header.css";
import ContactsContextProvider from "../Context/ContactsContext";
import { FilterContext } from "../Context/ContactsContext";
import { ContactsContext } from "../Context/ContactsContext";

const Header = () => {
  const { filter, setFilter } = useContext(FilterContext);
  const { contacts, setContacts } = useContext(ContactsContext);

  const handleAdd=()=>{
    setContacts([...contacts,{id:10,firstName:"s",lastName:"s",group:"All",phone:"ds",img:"s"}])
    console.log(contacts);
  }

  useEffect(() => {
    
  }, [setFilter])
  return (
    <ContactsContextProvider>
      <div className="header">
        <input
          type="search"
          placeholder="Type To Search..."
          value={filter}
          onChange={(e) => console.log(contacts)}
        />
        <button onClick={()=>handleAdd()}>Add Contact</button>
        <button>Add Group</button>
      </div>
    </ContactsContextProvider>
  );
};

export default Header;
