import React from "react";


const Note = ({icon, title, label } : {icon?:React.ReactNode; title:string; label:string}) => {
  return (
    <div className="flex items-center">
        <div className="text-2xl text-blue-800 ">{icon}</div>
        <div className="font-semibold py-1">{title}</div>
         {label}
    </div>
  )
}

export default Note