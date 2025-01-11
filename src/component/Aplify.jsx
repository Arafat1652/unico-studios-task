import { BsArrowRightCircleFill } from "react-icons/bs";


const Aplify = () => {
    return (
        <div>
            <div className=" mt-16">
    <div
        className="relative isolate overflow-hidden bg-unic px-6 py-24 shadow-2xl rounded-[27px] sm:rounded-3xl sm:px-24 xl:py-32 text-center">
       <div className="relative w-full bg-[#2B2B2B]">
  
  <div className="absolute -left-24 h-[200px] w-[200px] bg-white blur-[100px] rounded-full"></div>

  
  <div className="absolute -top-24 -right-24 h-[200px] w-[300px] bg-white blur-[100px] rounded-full"></div>
</div>
        <h2 className="text-7xl text-center font-bold  text-white -translate-x-40">Let's Amplify,
        </h2>
        <h2 className="translate-x-24 text-7xl text-white font-bold">Your Brand's Impact</h2>

        <div className="w-full sm:w-[30%] mt-7 mx-auto -translate-x-24">
            <form
                className="flex rounded-full bg-white px-8 py-1 ">
                <input className="w-full appearance-none bg-white text-black focus:outline-none" placeholder="Schedule A Call"/>
                <button className='btn bg-black text-white rounded-full px-4'>Let's Go <BsArrowRightCircleFill size={20} className="ml-4" /></button>
            </form>
        </div>

    </div>
</div>
        </div>
    );
};

export default Aplify;