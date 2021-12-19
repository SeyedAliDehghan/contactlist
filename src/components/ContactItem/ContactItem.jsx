import React from 'react'
import './ContactItem.css'
const ContactItem = ({firstName,lastName,img,phone,group}) => {
    return (
        <div className="item">
            <div className="imgName itemsWidth">
                <img src={img} alt={firstName+" "+lastName+" Avatar"} />
                <span style={{marginLeft:"0.5rem"}}>{firstName+" "+lastName}</span>
            </div>
            <div className="itemsWidth" style={{textAlign:'right'}}>{group}</div>
            <div className="itemsWidth" style={{textAlign:'right'}}>{phone}</div>
            <div className="itemsWidth" style={{textAlign:'right'}}>
                <button>Details</button>
            </div>
            
        </div>
    )
}

export default ContactItem
