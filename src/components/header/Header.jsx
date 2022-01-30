import { React, useContext, useEffect, useState } from "react";
import "./Header.css";
import ContactsContextProvider from "../Context/ContactsContext";
import { FilterContext } from "../Context/ContactsContext";
import { ContactsContext } from "../Context/ContactsContext";
import { GroupContext } from "../Context/ContactsContext";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
let imgstr =
  "https://s4.uupload.ir/files/pngtree-character-avatar-of-businessman-with-beard-png-image_2166772_v8lg.jpg";

const Header = () => {
  const { filter, setFilter } = useContext(FilterContext);
  const { contacts, setContacts } = useContext(ContactsContext);
  const { groups, setGroups } = useContext(GroupContext);

  const uniqId = () => {
    return parseInt(Math.random() * 10000);
  };
  const options = () => {
    const groupArr = groups.map((group) => group.name);
    // groupArr=
    let returned =
      '<input id="swal-input1" placeholder="First Name" class="swal2-input">' +
      '<input id="swal-input2" placeholder="Last Name" class="swal2-input">' +
      '<input id="swal-input3" placeholder="Phone" class="swal2-input">' +
      '<select id="swal-input4" placeholder="Group" class="swal2-input">';
    for (let i = 0; i < groupArr.length; i++) {
      returned += `<option value="${groupArr[i]}">${groupArr[i]}</option>`;
    }
    returned += "<select/>";
    return returned;
  };

  const handleAddGroup = () => {
    const GroupSwal = withReactContent(Swal);
    GroupSwal.fire({
      icon: "question",
      title: "Enter New Group Name",
      text: "Enter new group name in input and press add",
      input: "text",
      confirmButtonText: "Add",
      showCloseButton: true,
      preConfirm: (name) => {
        setGroups([...groups, { id: uniqId(), name }]);
      },
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        Swal.fire("Added!", "New Group Added!", "success");
      } else if (result.isDenied) {
        Swal.fire("Changes are not saved", "", "info");
      }
    });
  };

  const handleAddContact = () => {
    (async () => {
      const { value: formValues } = await Swal.fire({
        icon: "question",
        title: "Enter New Contact!",
        text: "Enter new Contact Details",
        html: options(),
        preConfirm: () => {
          return [
            document.getElementById("swal-input1").value,
            document.getElementById("swal-input2").value,
            document.getElementById("swal-input3").value,
            document.getElementById("swal-input4").value,
          ];
        },
      });

      if (formValues) {
        console.log(formValues);
        setContacts([
          ...contacts,
          {
            id: uniqId(),
            firstName: formValues[0],
            lastName: formValues[1],
            phone: formValues[2],
            group: formValues[3],
            img: imgstr,
          },
        ]);
        console.log(contacts);
        Swal.fire("Added!", "New Contact Added!", "success");
      }
    })();
  };

  return (
    <ContactsContextProvider>
      <div className="header">
        <input
          type="search"
          placeholder="Type To Search..."
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
        />
        <span className="headButtonContainer">
          <button onClick={() => handleAddContact()}>Add Contact</button>
          <button onClick={() => handleAddGroup()}>Add Group</button>
        </span>
      </div>
    </ContactsContextProvider>
  );
};

export default Header;
