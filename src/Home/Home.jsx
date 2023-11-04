import { Outlet } from "react-router-dom";
import Banner from "./Banner";
import Footer from "./Footer";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Footer></Footer>
        </div>
    );
};

export default Home;