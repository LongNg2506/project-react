import React from "react";
import { AiOutlineLike } from "react-icons/ai";

const ButtonLike = () => {
  const [isLike,setIsLike] = React.useState(false);
  console.log("isLike",isLike);
  
  return (
    <button onClick={()=>{
      console.log('clicked');
      setIsLike(!isLike)
      
    }}
    className={`${isLike === true ? 'btn_click' : 'btn_default'} flex items-center`} >
      <div className="pr-1">
    <AiOutlineLike />
    </div>
    Like</button>
  )
}

export default ButtonLike