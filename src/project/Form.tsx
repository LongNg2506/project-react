import { IoSearchOutline } from "react-icons/io5";

const Form = () => {
  return (
    <div>
      <form className="flex items-center">
        <div className="bg-[#2D2E37] flex items-center px-2 py-2 rounded-full">
          <input
            className=" bg-[#2D2E37]"
            type="text"
            name=""
            placeholder="Search Movie"
          />
          <div className="text-white">
          <IoSearchOutline /> 
            </div>   
        </div>
      </form>
    </div>
  );
};

export default Form;
