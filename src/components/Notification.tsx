import React from 'react'
import {FaBell} from 'react-icons/fa'
const Notification = () => {
    const [isShow, setIsShow] = React.useState(false);

  return (
    <div onClick={() => {
        console.log("ok");
        setIsShow(!isShow)
    }}
    >
      <FaBell/> 
      {
        isShow && (
          <div className='notice_list flex items-center'>
        <ul>
            <li>notice 1</li>
            <li>notice 2</li>
            <li>notice 3</li>
        </ul>
        </div>
        )
      }
    
    </div>
  )
}

export default Notification