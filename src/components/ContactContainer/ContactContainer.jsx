import React from "react";
import { HeadText, ContactList, ContactItem } from "..";
import "./ContactContainer.css";
import data from "../data";

const ContactContainer = () => {
  return (
    <div className="ContactContainer">
      <HeadText text="Contact List:" />
      <ContactList>
        {data.map((item) => (
          <ContactItem
            key={item.id}
            firstName={item.firstName}
            lastName={item.lastName}
            img={item.img}
            group={item.group}
            phone={item.phone}
          />
        ))}
      </ContactList>
    </div>
  );
};

export default ContactContainer;
