import React from 'react'
import './HeadText.css'
const HeadText = ({text}) => {
    return (
        <div className="textHead">
            {text}
            <hr />
        </div>
    )
}

export default HeadText
