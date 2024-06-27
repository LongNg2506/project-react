
import Header from './Header'
import { Link, Outlet } from 'react-router-dom'
import { IoCompassOutline } from 'react-icons/io5'
import { PiTelevisionSimpleBold } from 'react-icons/pi'
import { FiHeart } from 'react-icons/fi'
import { HiOutlineHome } from 'react-icons/hi'
import { BiSolidHot } from 'react-icons/bi'

const Layout = () => {
  return (
    <>
    <header className='w-3/5 m-auto'>
        <Header/>
    </header>
    <nav className="pl-4 text-white fixed title-movie top-1/2 ">
        <div className="container flex-col ">

          <div className="">
            {/*<a href="/">Home</a>*/}
            <div className=" text-xl ">
            <Link className='' to={"/"}>
              <HiOutlineHome className='my-0 mx-auto' />
              <p className="text-center ">Home</p>
            </Link>
            </div >
          </div>

          <div className="pt-6">
            {/*<a href="/blog">Blog</a>*/}
            <div className=" text-xl">
            <Link to={"/trending"}>
              <BiSolidHot className='my-0 mx-auto ' />
              <p className="text-center">Trending</p>
            </Link>
            </div>
          </div>

          <div className="pt-6">
            {/*<a href="/product">Product</a>*/}
            <div  className="text-xl">
            <Link to={"/explore"}>
              <IoCompassOutline className='my-0 mx-auto' />
              <p className="text-center">Explore</p>
            </Link>
            </div>
          </div>

          <div className="pt-6">
            <div  className=" text-xl">
            <Link to={"/"}>
              <PiTelevisionSimpleBold  className='my-0 mx-auto'/>
              <p className="text-center">Movies</p>
            </Link>
            </div>
          </div>

          <div className="pt-6">
            <div  className=" text-xl">
            <Link to={"/"}>
            <FiHeart className='my-0 mx-auto' />
            <p className="text-center">Favorites</p>
            </Link>
            </div>
          </div>
        </div>
      </nav>

    <main>
        <Outlet/>
    </main>
    </>
  )
}

export default Layout