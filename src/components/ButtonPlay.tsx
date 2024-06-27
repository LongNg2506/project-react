import React from 'react'
import { FaPlay,FaPause } from 'react-icons/fa'

const MODE ={
    PLAY: '{FaPlay}',
    PAUSE: '{FaPause}'
};


const ButtonPlay = () => {
    const [isPlay, setIsPlay] = React.useState(false);
    const [mode,setMode] = React.useState(MODE.PLAY)
  return (
    <>
    <div onClick={() => setMode(MODE.PLAY)}>
        <FaPlay />
    </div>
    <div onClick={() => setMode(MODE.PAUSE)}>
    <FaPause />
</div>
</>
  )
}

export default ButtonPlay