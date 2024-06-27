import { CiHeart } from "react-icons/ci";


type TVideo_List={
    src:string,
    name:string,
    title:string
}


function Video_List({src,name,title}:TVideo_List){
    return(
        <div className="List my-0 mx-auto w-4/5">
            <div className="container flex justify-between ">
                <div className="box flex">
                <div className="img"><img src={src} alt="" />
                </div>
                <div className="box-tittle flex-col content-center pl-4">
                    <div className="title font-bold">{title}</div>
                    <div className="name text-gray-400">{name}</div>
                </div>
                </div>
                <div className="icon content-center text-4xl ">
                 <CiHeart/>
                </div>
            </div>
        </div>
    )
}

export default Video_List

