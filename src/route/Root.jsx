
import { Outlet } from 'react-router-dom';
import Nav from '../component/Nav';
import Footer from '../component/Footer';

const Root = () => {
    return (
        <div>
            <Nav/>
            <Outlet/>
            <Footer/>
        </div>
    );
};

export default Root;