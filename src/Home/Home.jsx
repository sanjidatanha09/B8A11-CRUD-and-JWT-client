import { Outlet } from "react-router-dom";
import Banner from "./Banner";
import Footer from "./Footer";
import Featured from "./Featured/Featured";
import Section1 from "./Section1";
import MeetTeam from "./MeetTeam";
import Section2 from "./Section2";
import { useEffect } from "react";


const Home = () => {
    useEffect(() => {
        document.title = "Foodie | Home";
    }, [])
    

    return (
        <div>
            <Banner></Banner>
            <Featured></Featured>
            <Section1></Section1>
            <Section2></Section2>
            <MeetTeam></MeetTeam>
    
            <Footer></Footer>

        </div>
    );
};

export default Home;