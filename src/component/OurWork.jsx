

const OurWork = () => {
  return (
    <div className="mt-16">
      <section className=" py-5 bg-unic lg:py-10 rounded-[35px]">
        <div className="flex justify-between items-center mb-5 px-24">
        <h2 className="text-white text-2xl">Our Work</h2>
        <button className='btn bg-white text-black rounded-full px-8 py-4'>Explore more of our work</button>
        </div>
        <div className="pl-20 grid lg:grid-cols-3 gap- items-center justify-between">

          <div className="translate-x-4">
            <img
              className="w-[484px] h-[306px]"
              src="../../public/laptop.png"
              alt="Image"
            />
            <div className="p-4 text-white">
              <h3 className="text-xl font-semibold mb-2">Haze Productions</h3>
              <p className=""> Web Design  Web Development   SMM</p>
            </div>
          </div>
          <div className="translate-x-24">
            <img
              className="w-[484px] h-[306px]"
              src="../../public/image.png"
              alt="Image"
            />
            <div className="p-4 text-white">
              <h3 className="text-xl font-semibold mb-2">Tharavadu</h3>
              <p className=""> Web Design Branding</p>
            </div>
          </div>
          <div className="translate-x-48">
            <img
              className="w-[484px] h-[306px]"
              src="../../public/laptop2.png"
              alt="Image"
            />
            <div className="p-4 text-white">
              <h3 className="text-xl font-semibold mb-2">SmartWealth</h3>
              <p className=""> Web Design Web Development SMM</p>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
};

export default OurWork;
