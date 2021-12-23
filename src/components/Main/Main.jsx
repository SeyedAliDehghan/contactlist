import { React } from "react";
import { SideBar, ContactContainer } from "..";
import ContactsContextProvider from '../Context/ContactsContext'

import "./Main.css";

const Main = () => {
  return (
      <div className="contentContainer">
        <SideBar />
        <ContactContainer />
      </div>
  );
};

export default Main;
