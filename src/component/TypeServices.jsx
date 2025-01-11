import marketing from '../../public/marketing.svg';
import d3 from '../../public/d3.svg';
import ui from '../../public/ui.svg'
import branding from '../../public/branding.svg'
import  seo from '../../public/seo.svg'

const TypeServices = () => {
  return (
   
        <div className="">

<div id="features" className="mx-auto max-w-6xl">

  <ul className="mt-16 grid grid-cols-1 gap-6 text-center md:grid-cols-3">
    {/* first col */}
    <div>

    <li className=" px-6 py-8 shadow-sm border-[1px] rounded-2xl border-b-8 border-black">

      <h3 className="my-3 font-display font-bold text-3xl">UI/UX</h3>
      <img src={ui} alt="" className="mx-auto w-[187px] h-[177px]"/>
      <p className="mt-7 text-sm text-left text-secondary-500 w-[309px]">
      Enhance user experiences with intuitive UI/UX design. We focus on crafting visually appealing websites and apps that engage and retain users.
      </p>

    </li>

    <li className=" px-6 py-3 mt-5 shadow-sm border-[1px] rounded-2xl border-b-8 border-black">

      <h3 className="my-3 font-display font-bold text-3xl">3D Design</h3>
      <img src={d3} alt="" className="mx-auto"/>
      <p className="mt-2 text-sm text-left text-secondary-500 w-[309px]">
      Bring your concepts to life with our 3D design services. From realistic modeling to engaging animations, we create immersive visuals that captivate audiences.
      </p>

    </li>
    </div>
    {/* second col */}
    <div>
        
    <li className=" px-6 py-7 shadow-sm border-[1px] rounded-2xl border-b-8 border-black">

      <h1 className="mb-2 font-bold text-3xl text-left">40+</h1>
        <h4 className='text-xl text-left'>Trustd Client</h4>
        <p className='text-left'>in tech, lifestyle, and beyond</p>

    </li>
    <li className=" px-6 py-3 mt-5 shadow-sm border-[1px] rounded-2xl border-b-8 border-black">

      <h1 className=" mb-2 font-bold text-3xl text-left">12+</h1>
        <h4 className='text-xl text-left'>Experts</h4>
        <p className='text-left'>A talented team turning creative ideas into reality</p>

    </li>

    <li className="mt-4 px-6 py-2 shadow-sm border-[1px] rounded-2xl border-b-8 border-black">

      <h3 className="my-5 font-display font-bold text-3xl">Branding</h3>
      <img src={branding} alt="" className="mx-auto w-[158px] h-[150px]"/>
      <p className="mt-4 mb-3 text-sm text-left text-secondary-500 w-[309px]">
      Enhance user experiences with intuitive UI/UX design. We focus on crafting visually appealing websites and apps that engage and retain users.
      </p>

    </li>

    </div>
    {/* third col */}
    <div>

    <li className=" px-6 py-8 shadow-sm border-[1px] rounded-2xl border-b-8 border-black">

      <h3 className="my-3 font-display font-bold text-3xl">Marketing</h3>
      <img src={marketing} alt="" className="mx-auto w-[187px] h-[177px]"/>
      <p className="mt-7 text-sm text-left text-secondary-500 w-[309px]">
      Unlock your brand’s potential with tailored digital marketing strategies. From SEO and social media to email marketing, we drive traffic and engagement that converts.
      </p>

    </li>

    <li className=" px-6 py-3 mt-5 shadow-sm border-[1px] rounded-2xl border-b-8 border-black">

      <h3 className="my-3 font-display font-bold text-3xl">SEO</h3>
      <img src={seo} alt="" className="mx-auto"/>
      <p className="mt-2 text-sm text-left text-secondary-500 w-[309px]">
      Tell your brand story through compelling content. Our services include copywriting and visual content creation that resonate with your target audience.
      </p>

    </li>
    </div>

  </ul>
</div>

    </div>
  );
};

export default TypeServices;
