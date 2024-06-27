import { FaCaretRight } from "react-icons/fa6";

type TNews = {
    thumnail:string
    name:string
    date:string
    content:string
}


const News = ({thumnail, name, date, content}:TNews) => {
  return (
    <div className="box_news flex-col w-[320px] h-[360px] ">
        <div className="thumnail_news">
            <img src={thumnail} alt="" />
        </div>
        <div className='text-left'>
        <h3 className=' font-bold'>{name}</h3>
        <span className='text-sm/[8px] text-gray-400'>{date}</span>
        <p className='py-1 text-gray-400'>{content}</p>
        <button className='font-semibold flex items-center'> Read more
        <div className="text-orange-500">
         <FaCaretRight/>
         </div>
         </button>
        </div>
    </div>
  )
}

export default News