import React from 'react';
import { BsArrowRightCircleFill } from 'react-icons/bs';

const LatestWork = () => {
    return (
        <div>
            
<section className="px-3 py-5 bg-unic lg:py-10 rounded-[35px]">
    <div className="grid lg:grid-cols-2 items-center justify-items-center">
        <div className="relative order-2 lg:order-1 flex flex-col justify-center items-center">

            <p className=" mb-2 md:text-lg -translate-x-60 text-white">Our Latest Work</p>
            <img className=" h-80 w-80 object-cover lg:h-[448px] lg:w-[635px]" src="./laptop.png" alt=""/>
            <div className='text-white flex items-center gap-12 absolute top-16 left-4'>
            <p>Website Design</p>
            <p>Website Development</p>
            </div>
            <div className='text-white flex items-center justify-between px-6 w-full absolute bottom-4 '>
            <h1 className='uppercase text-2xl'>haze <br />Production</h1>
            <button className='btn bg-white text-black rounded-full px-8 py-4'>View Work <BsArrowRightCircleFill size={20} /></button>
            </div>
        </div>
        <div className="relative order-2 lg:order-1 flex flex-col justify-center items-center">

            <img className=" h-80 w-80 object-cover lg:h-[473px] lg:w-[684px]" src="./laptop2.png" alt=""/>
            <div className='text-white flex items-center gap-12 absolute top-8 left-4'>
            <p>Website Design</p>
            <p>Website Development</p>
            </div>
            <div className='text-white flex items-center justify-between px-6 w-full absolute bottom-4 '>
            <h1 className='uppercase text-2xl'>SMART <br />WEALTH.AI</h1>
            <button className='btn bg-white text-black rounded-full px-8 py-4'>View Work <BsArrowRightCircleFill size={20} /></button>
            </div>
        </div>
    </div>
</section>
        </div>
    );
};

export default LatestWork;