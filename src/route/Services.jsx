
import Faq from '../component/services/Faq';
import SeoHero from '../component/services/SeoHero';
import SeoStrategy from '../component/services/SeoStrategy';
import WhatIsSeo from '../component/services/WhatIsSeo';
import WhyChooseUs from '../component/services/WhyChooseUs';

const Services = () => {
    return (
        <div>
            <SeoHero/>
            <WhatIsSeo/>
            <WhyChooseUs/>
            <Faq/>
            <SeoStrategy/>
        </div>
    );
};

export default Services;