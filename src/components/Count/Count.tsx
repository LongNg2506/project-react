import React from "react"
import {FaHeart} from "react-icons/fa"

const Count = () => {
  const [index,setIndex] = React.useState(0);
  console.log("rendering");
  
  return (
    <>
    <button onClick={() =>{
      setIndex((n) => n + 1);
    }}
    >
      <div className="text-red-700 flex">
      <FaHeart/>
      {index}
      </div>
      </button>
    </>
  )
  
}

export default Count