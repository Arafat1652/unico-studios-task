import Aplify from "../component/Aplify";
import Intentional from "../component/Intentional";
import LatestWork from "../component/LatestWork";
import OurWork from "../component/OurWork";
import Pricing from "../component/Pricing";
import TypeServices from "../component/TypeServices";
import WhatWeDo from "../component/WhatWeDo";


const Home = () => {
    return (
        <div>
            <Intentional/>
            <LatestWork/>
            <WhatWeDo/>
            <TypeServices/>
            <OurWork/>
            <Pricing/>
            <Aplify/>
        </div>
    );
};

export default Home;