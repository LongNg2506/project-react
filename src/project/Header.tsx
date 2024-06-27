
import Form from './Form'

const Header = () => {
  return (
    <div className="container flex items-center justify-between">
    <div className='logo text-2xl font-bold text-white'>
        MOVIE
        <span className='text-yellow-600'>VENNIE</span>
    </div>
    <div className="search-box flex items-center">
    <div className='icon'>
    <Form/>
    </div>
    <div className="ava w-16 h-16">
        <img className='w-[64px] h-[64px] object-cover object-center' src="./Imgs/user.png" alt="" />
    </div>
    </div>
    </div>
  )
}

export default Header