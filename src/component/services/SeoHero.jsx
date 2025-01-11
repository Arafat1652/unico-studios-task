
import { IoArrowForwardCircleOutline } from "react-icons/io5";

const SeoHero = () => {
  return (
    <div>
      <section className="sm:mt-6 lg:mt-8 mt-12 mx-auto ">
        <div className="my-10 container mx-auto sm:mt-12 sm:px-6 md:mt-16 lg:mt-20  xl:mt-28 flex  lg:flex-justify lg:flex flex-col lg:flex-row gap-10">
          <div className="sm:text-center lg:text-left">
            <h1 className="text-5xl font-medium tracking-tight text-gray-800">
              Search Engine Optimization
            </h1>
            <p className="text-xl mt-3 sm:mt-5 w-[558px] sm:mx-auto md:mt-5  lg:mx-0 text-justify">
              Let’s face it: fancy websites and technical jargon mean nothing if
              they don’t bring in customers. What you really want is to turn
              your audience into paying customers—and that’s exactly what we do.
              <br />
              <br />
              Our SEO strategies aren’t just about rankings or traffic; they’re
              about driving real results. Whether it’s generating leads,
              boosting sales, or growing your business, we focus on what matters
              to you: conversion, growth, and success.
            </p>

            <button className="mt-12 btn btn-outline border-b-4 text-black rounded-full px-8 py-4">
              Get A Free Audit
              <IoArrowForwardCircleOutline size={20} className="ml-8" />
            </button>
          </div>

          <div className="lg:inset-y-0 lg:right-0 lg:w-1/2 my-4">
            <img
              className="h-56 w-full sm:h-72 md:h-96 lg:w-full lg:h-full"
              src="./serviceHero.svg"
              alt=""
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default SeoHero;
