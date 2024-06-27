
type TAccessItem = {
    name:string
    price:number
    promoPrice?:number
    thumnail:string
}


const CardProduct = ({thumnail,name, price, promoPrice = 0}: TAccessItem) => {
    const discount = promoPrice > 0 ? Math.round(((price - promoPrice) / price) * 100) : 0;
    
  return (
    <div className="item flex-col relative">
        {discount > 0 ? <span className='absolute right-0 bg-orange-500 p-2 text-base font-semibold text-white rounded'>{discount}</span> :null}
        <div className="img w-[320px] h-[240px]">
            <img src={thumnail} alt="" className='w-full h-[240px]'/>
        </div>
        <h3>{name}</h3>
        <div className="price">
            <strong>{price}</strong>
            {promoPrice > 0 ? (<del>{promoPrice}</del>) : null}
        </div>
    </div>
  )
}

export default CardProduct