import { createContext, useState } from "react";
import data from "../data";

export const ContactsContext = createContext({
  contacts: [],
  setContacts: (input) => {}
});

export const GroupContext = createContext({
  contacts: [],
  setContacts: (input) => {}
});

export const FilterContext = createContext({
  filter: "",
  setFilter: () => {}
});

const ContactsContextProvider = ({ children }) => {
  const [contacts, setContacts] = useState(data);
  const [filter, setFilter] = useState("");
  const [groups, setGroups] = useState([{ id: 1, name: "All" }]);
  return (
    <ContactsContext.Provider value={{ contacts, setContacts }}>
      <GroupContext.Provider value={{ groups, setGroups }}>
        <FilterContext.Provider value={{ filter, setFilter }}>
          {children}
        </FilterContext.Provider>
      </GroupContext.Provider>
    </ContactsContext.Provider>
  );
};

export default ContactsContextProvider;
