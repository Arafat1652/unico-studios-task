import { BsArrowRightCircleFill } from "react-icons/bs";
import { IoArrowForwardCircleOutline } from "react-icons/io5";

const SeoStrategy = () => {
  return (
    <div>
      <div className="relative container mx-auto rounded-[56px]">
        <div className=" isolate overflow-hidden bg-unic px-6 py-24 shadow-2xl rounded-[27px] sm:rounded-3xl sm:px-24 xl:py-32 text-center">
          <h2 className="text-5xl text-center font-bold  text-white ">
          Contact Us for a 
          
          </h2>
          <h2 className="text-5xl text-white font-bold">
          Customized SEO Strategy!
          </h2>

          <div className="w-full sm:w-[30%] mx-auto">
            <button className="mt-6 btn btn-outline hover:bg-white hover:text-black bg-white text-black rounded-full px-8 py-4">
            Schedule A Demo
                          <IoArrowForwardCircleOutline size={20} className="ml-8" />
                        </button>
           
          </div>

        </div>
          <div className="absolute top-48 -left-24">
            <img src="../../../public/rocket.png" alt="" srcSet="" />
          </div>
      </div>
    </div>
  );
};

export default SeoStrategy;
