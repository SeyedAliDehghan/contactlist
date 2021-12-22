import { React } from "react";
import { SideBar, ContactContainer } from "..";
import ContactsContextProvider from '../Context/ContactsContext'

import "./Main.css";

const Main = () => {
  return (
    <ContactsContextProvider>
      <div className="contentContainer">
        <SideBar />
        <ContactContainer />
      </div>
    </ContactsContextProvider>
  );
};

export default Main;
