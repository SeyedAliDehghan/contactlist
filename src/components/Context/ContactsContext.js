import { createContext, useState } from "react";
import data from "../data";

export const ContactsContext = createContext({
  contacts: [],
  setContacts: () => {}
});

export const GroupContext = createContext({
  contacts: [],
  setGroups: () => {}
});

export const FilterContext = createContext({
  filter: "",
  setFilter: () => {}
});

const ContactsContextProvider = ({ children }) => {
  const [contacts, setContacts] = useState(data);
  const [groups, setGroups] = useState([{ id: 1, name: "All" }]);
  const [filter, setFilter] = useState("");
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
