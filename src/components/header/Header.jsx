import React from 'react'
import './Header.css'
const Header = () => {
    return (
        <div className="header">
            <input type="search" placeholder="Type To Search..." />
            <button>Add Contact</button>
            <button>Add Group</button>
        </div>
    )
}

export default Header
