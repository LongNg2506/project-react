
type TMemberCard ={
    name:string
    thumnail:string
    title:string
    title1:string
    title2:string
    label:string
    label1:string
    label2:string
   
}


const MemberCard = ({name, thumnail, title, title1, title2, label, label1, label2}:TMemberCard) => {
  return (
    <div className="box_card w-[320px] h-fit text-left p-4 border-2 border-black rounded-lg my-3">
        <div className="Name_member">
            <h3 className='font-bold text-xl'>{name}</h3>
            <img className='w-[60px] h-[60px] rounded-full' src={thumnail} alt="" />
            <div className="content flex-col">
                <div className="profession flex">
                <p><span className='font-bold pr-1'>{title}</span>{label}</p>
                
                </div>
                <div className="awards flex">
                <p><span className='font-bold pr-1'>{title1}</span>{label1}</p>
                </div>
                <div className="discovered flex">
                <p><span className='font-bold pr-1'>{title2}</span>{label2}</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default MemberCard