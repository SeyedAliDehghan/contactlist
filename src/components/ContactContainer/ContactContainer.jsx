import { React, useContext } from "react";
import { HeadText, ContactItem } from "..";
import "./ContactContainer.css";
import { ContactsContext } from "../Context/ContactsContext";
import { FilterContext } from "../Context/ContactsContext";

const ContactContainer = () => {
  const { contacts, setContacts } = useContext(ContactsContext);
  const { filter, setFilter } = useContext(FilterContext);
  return (
    <div className="ContactContainer">
      <HeadText text="Contact List:" />
      {contacts
        .filter(
          (contact) =>
            (contact.firstName + " " + contact.lastName)
              .toLowerCase()
              .includes(filter.toLowerCase()) ||
            contact.phone.includes(filter) ||
            contact.group.toLowerCase().includes(filter.toLowerCase())
        )
        .map((item) => (
          <ContactItem
            key={item.id}
            id={item.id}
            firstName={item.firstName}
            lastName={item.lastName}
            img={item.img}
            group={item.group}
            phone={item.phone}
          />
        ))}
      {/* {contacts.map((item) => (
          <ContactItem
            key={item.id}
            firstName={item.firstName}
            lastName={item.lastName}
            img={item.img}
            group={item.group}
            phone={item.phone}
          />
        ))} */}
    </div>
  );
};

export default ContactContainer;
