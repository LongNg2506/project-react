import { IoPlayOutline } from "react-icons/io5";
import ProjectMovie from "./Index";


const HomePage = () => {
  return (
    <>
    <div className="w-3/5 m-auto relative h-full  ">
      <div className="banner-img">
        <img src="/Imgs/home-background.png" alt="banner-img" />
        <div className="title-movie absolute top-1/2 pl-6  text-white items-center">
          <h1 className="text-4xl pb-4 font-semibold">
            Hitman's Wife's <br />
            Bodyguard
          </h1>
          <p className="text-yellow-500">Releasing 23 july</p>
          <a className="flex items-center pt-2" href="#">
            <i className="text-5xl text-yellow-500 ">
            <IoPlayOutline />
            </i>
            <span>Watch the trailer</span>
          </a>
        </div>
      </div>
    </div>
    <ProjectMovie/>
    </>
  );
};

export default HomePage;
