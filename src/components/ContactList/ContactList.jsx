import React from 'react'
import './ContactList.css'

const ContactList = ({children}) => {
    return (
        <div className="ContactList">
            {children}
        </div>
    )
}

export default ContactList
