const WhyChooseUs = () => {
  return (
    <div>
      <div className="container mx-auto mt-24 text-center p-6">
        <h2 className="mb-12 text-center text-4xl font-semibold sm:text-5xl">
          Why Choose Us?
        </h2>
        <div className="gr mx-auto items-stretch space-y-4 text-left sm:flex sm:space-y-0 sm:space-x-8 sm:text-center">
          <a
            className=" w-full rounded-xl border-opacity-10 px-4 py-6 text-black"
            href="#"
            target="_blank"
          >
            <img
              className=" ml-3  sm:mr-0"
              src="./approach.png"
              alt="Framework7"
            />

            <p className="text-sm opacity-75 mt-8">Results-driven approach</p>
          </a>
          <a
            className=" w-full rounded-xl border-opacity-10 px-4 py-6 text-black"
            href="#"
            target="_blank"
          >
            <img
              className=" ml-3  sm:mr-0"
              src="./repot.png"
              alt="Framework7"
            />

            <p className="text-sm opacity-75 mt-8">Transparent reporting</p>
          </a>
          <a
            className=" w-full rounded-xl border-opacity-10 px-4 py-6 text-black"
            href="#"
            target="_blank"
          >
            <img
              className=" ml-3  sm:mr-0"
              src="./strategie.png"
              alt="Framework7"
            />

            <p className="text-sm opacity-75 mt-8">Custom strategies tailored 
           <br /> to each business</p>
          </a>
          <a
            className=" w-full rounded-xl border-opacity-10 px-4 py-6 text-black"
            href="#"
            target="_blank"
          >
            <img
              className=" ml-3  sm:mr-0"
              src="./success.png"
              alt="Framework7"
            />

            <p className="text-sm opacity-75 mt-8">Proven track record 
           <br /> of success</p>
          </a>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
