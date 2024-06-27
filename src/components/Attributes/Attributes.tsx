import { useState } from "react"
import "./Attributes.css"

const AttributesItem = ({ label, active=false, onClick }: {label : string; active?: boolean; onClick: ()=>void}) => {
    return <span onClick={onClick} className={`attr_item ${active ? "active": ""}`}>{label}</span>
};

const attrs = [
    {id:1, label: "Gold"},
    {id:2, label: "Black"},
    {id:3, label: "Pink"},
    {id:4, label: "Red"},
    {id:5, label: "Green"}
]

const Attributes = () => {
    const [currentActive, setCurrentActive] = useState(0)

    const handleClickAttrItem = (index:number) => {
        setCurrentActive(index)
    }

  return (
    <div>
       {
        attrs.map((attr, index)=>{
            return <AttributesItem onClick={()=>{
                handleClickAttrItem(index)
            }} active={currentActive === index} key={attr.id} label={attr.label}/>;
        })}
    </div>
  )
}

export default Attributes