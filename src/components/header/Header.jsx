import { React, useContext, useEffect } from "react";
import { ContactsContext, FilterContext } from "../Context/ContactsContext";
import "./Header.css";

const Header = () => {
  const { filter, setFilter } = useContext(FilterContext);
  const { contacts, setContacts } = useContext(ContactsContext);

  const handleAdd = () => {
    setContacts([
      ...contacts,
      { id: 10, firstName: "s", lastName: "s", group: "All", phone: "ds", img: "s" },
    ]);
    console.log(contacts);
  };

  useEffect(() => {}, [setFilter]);
  return (
    <div className="header">
      <input
        type="search"
        placeholder="Type To Search..."
        value={filter}
        onChange={(e) => console.log(contacts)}
      />
      <button onClick={() => handleAdd()}>Add Contact</button>
      <button>Add Group</button>
    </div>
  );
};

export default Header;
