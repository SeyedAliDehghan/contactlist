import {React,useContext} from 'react'
import './SideBar.css'
import {HeadText,GroupItem} from '..'
import data from "../data";
import { GroupContext } from "../Context/ContactsContext";

const onlyUniqe=(value, index, self)=>{
    return self.indexOf(value) === index
}
const SideBar = () => {
  const {groups, setGroups} = useContext(GroupContext);
    return (
        <div className="sideBar">
            <HeadText text="Groups"/>
            {groups.map(item=>(
                <GroupItem key={item.id} groupItem={item.name}/>)
            )}
        </div>
    )
}

export default SideBar
