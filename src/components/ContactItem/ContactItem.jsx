import { React, useContext } from "react";
import "./ContactItem.css";
import { ContactsContext } from "../Context/ContactsContext";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { GroupContext } from "../Context/ContactsContext";

let imgstr =
  "https://s4.uupload.ir/files/pngtree-character-avatar-of-businessman-with-beard-png-image_2166772_v8lg.jpg";

const ContactItem = ({ id, firstName, lastName, img, phone, group }) => {
  const { contacts, setContacts } = useContext(ContactsContext);
  const { groups, setGroups } = useContext(GroupContext);

  const options = (id) => {
    const groupArr = groups.map((group) => group.name);
    // const FirstName=
    const user = contacts.filter((contact) => contact.id === id);

    let returned =
      `<input id="swal-input1" value="${user[0].firstName}" placeholder="First Name" class="swal2-input">` +
      `<input id="swal-input2" value="${user[0].lastName}" placeholder="Last Name" class="swal2-input">` +
      `<input id="swal-input3" value="${user[0].phone}" placeholder="Phone" class="swal2-input">` +
      '<select id="swal-input4" placeholder="Group" class="swal2-input">';
    for (let i = 0; i < groupArr.length; i++) {
      returned += `<option value="${groupArr[i]}">${groupArr[i]}</option>`;
    }
    returned += "<select/>";
    return returned;
  };

  const handleDeleteItem = (id) => {
    setContacts(contacts.filter((contact) => contact.id !== id));
  };
  const handleEditItem = (id) => {
    (async () => {
      const { value: formValues } = await Swal.fire({
        icon: "info",
        title: "Edit Contact!",
        text: "Enter Contact New Details",
        html: options(id),
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
        setContacts(
          contacts.map((contact) =>
            contact.id === id
              ? (contact = {
                  id: id,
                  firstName: formValues[0],
                  lastName: formValues[1],
                  phone: formValues[2],
                  group: formValues[3],
                  img: imgstr,
                })
              : contact
          )
        );
        Swal.fire("Saved!", "New Contact Details Saved!", "success");
      }
    })();
  };
  return (
    <div className="item">
      <div className="imgName itemsWidth">
        <img src={img} alt={firstName + " " + lastName + " Avatar"} />
        <span style={{ marginLeft: "0.5rem" }}>
          {firstName + " " + lastName}
        </span>
      </div>
      <div className="itemsWidth" style={{ textAlign: "right" }}>
        {group}
      </div>
      <div className="itemsWidth" style={{ textAlign: "right" }}>
        {phone}
      </div>
      <div className="itemsWidth" style={{ textAlign: "right" }}>
        <button onClick={() => handleDeleteItem(id)}>Delete</button>
        <button onClick={() => handleEditItem(id)}>Edit</button>
      </div>
    </div>
  );
};

export default ContactItem;
