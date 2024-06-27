import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { IoPlayOutline } from "react-icons/io5";


interface Movie {
  id: number;
  original_title: string;
  backdrop_path: string;
}

const options = {
  params: { language: "en-US", page: "1" },
  headers: {
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiYmY0YWJjNGUzMTEyYzNhOGIyODMwMWMxYWQwMzllZSIsInN1YiI6IjY0MTI3N2Q2ZTE4ZTNmMDdkMDU1ZjY4OCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.iw5OvKuR35yRllO8eoRWjvCQnlFmh8nieiLD9NpSDc8",
  },
};

const ProjectMovie = () => {
  localStorage.setItem(
    "access_token",
    "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiYmY0YWJjNGUzMTEyYzNhOGIyODMwMWMxYWQwMzllZSIsInN1YiI6IjY0MTI3N2Q2ZTE4ZTNmMDdkMDU1ZjY4OCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.iw5OvKuR35yRllO8eoRWjvCQnlFmh8nieiLD9NpSDc8"
  );

  const { isPending, error, data } = useQuery({
    queryKey: ["repoData"],
    queryFn: () =>
      axios.get("https://api.themoviedb.org/3/movie/popular?language=en-US&page=${page}", options),
  });

  console.log("data", data?.data.results);

  if (isPending) return "Loading...";

  if (error) return "An error has occurred: " + error.message;

  return (
    <div className="truncate pb-64">
      
      <h2 className="h-12 w-3/5 m-auto bg-slate-800 pl-4 mt-14 mb-10 text-white flex items-center text-xl font-semibold">
        Popular Movies
      </h2>
      <div className="w-3/5 m-auto">
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          slidesPerView={4}
          spaceBetween={50}
          navigation
          scrollbar={{ draggable: true }}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log("slide change")}
        >
          {data?.data.results.map((movie: Movie) => (
            <SwiperSlide className="">
              <div className="mx-4 m-auto h-full hover:scale-105 transition duration-500 relative ">
                <img
                  className="w-full "
                  src={`https://www.themoviedb.org/t/p/w220_and_h330_face${movie.backdrop_path}`}
                  alt=""
                />
                <div className="w-full flex justify-between items-center absolute bottom-0 ">
                  <div className="max-w-64 pl-3">
                    <p className="text-[20px] max-w-52 font-bold text-white whitespace-normal">
                      {movie.original_title}
                    </p>
                    <p className="text-[20px] text-white">action</p>
                  </div>
                  <div className=" text-white  hover:text-yellow-500 cursor-pointer ">
                    <IoPlayOutline className="my-0 mx-auto" size={32} />
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
    
  );
};

export default ProjectMovie;
