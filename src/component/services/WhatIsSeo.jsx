import React from 'react';

const WhatIsSeo = () => {
    return (
        <div className='container mx-auto sm:px-6'>
            <hr className='border-[1] border-black mb-16'/>
            <h1 className='text-5xl font-semibold mb-5'>What Is SEO?</h1>
            <p className='w-[770px] text-justify mb-12'>Search Engine Optimization (SEO) is the process of optimizing your website to rank higher on search engine results pages (SERPs). It involves strategies like improving your site’s structure, creating high-quality content, and targeting specific keywords to make it more attractive to search engines like Google. Simply put, SEO helps your website get found by the right people at the right time.</p>

            <h1 className='text-5xl font-semibold mb-5'>Why Do We Need SEO?</h1>

            <div className="mt-5">
      <section className=" py-5 bg-unic  rounded-[35px]">
      <div className="flex items-center justify-items-center gap-5 w-[100%]">
        <div className=" text-center order-2 lg:order-1 w-[30%]">
            <p className='text-lg text-white'>Increase Visibility</p>
            <hr className='ml-10 my-3 border-[1] border-[#565656] w-[302px]'/>
            <p className='text-lg text-[#565656]'>Drive Organic Traffic</p>
            <hr className='ml-10 my-3 border-[1] border-[#565656] w-[302px]'/>
            <p className='text-lg text-[#565656]'>Build Credibility</p>
            <hr className='ml-10 my-3 border-[1] border-[#565656] w-[302px]'/>
            <p className='text-lg text-[#565656]'>Target the Right Audience</p>
            <hr className='ml-10 my-3 border-[1] border-[#565656] w-[302px]'/>
            <p className='text-lg text-[#565656]'>Boost Conversions</p>
            <hr className='ml-10 my-3 border-[1] border-[#565656] w-[302px]'/>
            <p className='text-lg text-[#565656]'>Stay Competitive</p>
            <hr className='ml-10 my-3 border-[1] border-[#565656] w-[302px]'/>
            
        </div>
        <div className="order-1 lg:order-2 bg-white rounded-xl w-[66.5%] p-16">
            <img className="h-[241px] w-[241px] mx-auto " src="../../../public/search.png" alt=""/>
            <p className='text-black text-justify ml-40 mt-8 w-[530px]'>Ensures your website appears at the top of search <br /> results, where potential customers are looking.</p>
        </div>
    </div>
      </section>
    </div>

        </div>
    );
};

export default WhatIsSeo;