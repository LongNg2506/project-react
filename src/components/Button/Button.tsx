import React from 'react'
import "./Button.css"

const Button = ({label, icon, type}:{ type?:string; label:string; icon?: React.ReactNode}) => {
  return (
    <button className={`btn ${type}`}>
        {icon} {label} 
    </button>
  )
}

export default Button