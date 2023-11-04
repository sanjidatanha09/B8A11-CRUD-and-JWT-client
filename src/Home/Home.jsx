import { Outlet } from "react-router-dom";
import Banner from "./Banner";
import Footer from "./Footer";
import Featured from "./Featured/Featured";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Featured></Featured>
            <Footer></Footer>

        </div>
    );
};

export default Home;