import React from 'react'
import './SideBar.css'
import {HeadText,GroupItem} from '..'
import data from "../data";
const onlyUniqe=(value, index, self)=>{
    return self.indexOf(value) === index
}
const SideBar = () => {
    return (
        <div className="sideBar">
            <HeadText text="Groups"/>
            <GroupItem key={0} groupItem={"All"}/>
            {data.map(item=>{return item.group}).filter(onlyUniqe).map((uniqeItem,index)=>
                <GroupItem key={index+1} groupItem={uniqeItem}/>)}
        </div>
    )
}

export default SideBar
