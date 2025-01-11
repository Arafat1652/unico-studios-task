import { BsArrowRightCircleFill } from "react-icons/bs";

const Pricing = () => {
  return (
    <div className="mt-24">
      <div id="features" className="mx-auto max-w-6xl">
        <h1 className="text-5xl font-semibold">Pricing Plans</h1>
        <p className="text-2xl mt-3">Tailored solutions to fit your business needs and budget.</p>
        <ul className="mt-12 grid grid-cols-1 gap-6 text-left md:grid-cols-3">
          {/* first col */}
          <div>
            <li className="relative px-10 py-8 shadow-sm border-[1px] rounded-2xl border-b-8 border-black h-[745px]">
              <h3 className="my-3 font-display font-medium text-5xl">₹17,999/m</h3>

                <li className="list-disc text-2xl mt-14">8 Posts + 4 Stories/m</li>
                <li className="list-disc text-2xl mt-10">SMM (2 Platforms)</li>
                <li className="list-disc text-2xl mt-10">Basic SEO Optimization</li>

                <button className='absolute bottom-4 left-4 btn btn-outline text-black rounded-full px-8 py-4'>I Like This <BsArrowRightCircleFill size={20} className="ml-12" /></button>
              
            </li>
          </div>
          {/* second col */}
          <div>
          <li className="relative px-10 py-8 shadow-sm border-[1px] rounded-2xl border-b-8 border-black h-[745px]">
              <h3 className="my-3 font-display font-medium text-5xl">₹27,999/m</h3>

                <li className="list-disc text-2xl mt-14">SMM 4 platforms{')'}.</li>
                <li className="list-disc text-2xl mt-10">12 Posts + 8 Stories/m</li>
                <li className="list-disc text-2xl mt-10">Advanced SMM Strategy with Analytics</li>
                <li className="list-disc text-2xl mt-10">Advanced SEO + Analytics</li>
                <li className="list-disc text-2xl mt-10">Ad Campaign Setup</li>

                <button className='absolute bottom-4 left-4 btn btn-outline text-black rounded-full px-8 py-4'>I Like This <BsArrowRightCircleFill size={20} className="ml-12" /></button>
              
            </li>
          </div>
          {/* third col */}
          <div>
          <li className="relative px-10 py-8 shadow-sm border-[1px] rounded-2xl border-b-8 border-black h-[745px]">
              <h3 className="my-3 font-display font-medium text-4xl">Tailored for you</h3>

                <p className="absolute bottom-24 left-4">A personalized solution to fit your unique business needs. Contact us for a custom quote.</p>

                <button className='absolute bottom-4 left-4 btn btn-outline text-black rounded-full px-8 py-4'>Schedule A Call <BsArrowRightCircleFill size={20} className="ml-12" /></button>
              
            </li>
          </div>
        </ul>
      </div>
    </div>
  );
};

export default Pricing;
