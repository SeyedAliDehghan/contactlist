import React from 'react'
import './GroupItem.css'
const GroupItem = ({groupItem}) => {
    return (
        <div className="groupItem">
            <div>{groupItem}</div>
        </div>
    )
}

export default GroupItem
