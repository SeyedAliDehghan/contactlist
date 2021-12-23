import {React,useContext} from 'react'
import './GroupItem.css'
import { FilterContext } from "../Context/ContactsContext";

const GroupItem = ({groupItem}) => {
  const { filter, setFilter } = useContext(FilterContext);
  const handleFilterByGroup=(e)=>{
      if(e==="All"){
          setFilter("")
      }else{
        setFilter(groupItem)

      }
  }
    return (
        <div className="groupItem">
            <div onClick={()=>handleFilterByGroup(groupItem)}>{groupItem}</div>
        </div>
    )
}

export default GroupItem
