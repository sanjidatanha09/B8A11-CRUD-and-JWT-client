import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import AvailableFood2 from './AvailableFood2';

const AvailableFoods = () => {
    

    const availableFood = useLoaderData();
    console.log(availableFood)

    const [fullCampaignes, setFullCampaignes] = useState(availableFood);

    const handleSearch = (e) => {
        const search = document.getElementById("searchinput").value;
        console.log(search);
        const lowerCase = search.toLowerCase()
        e.preventDefault();

        const filtercampaignes = availableFood.filter(
            (foods) => foods.foodname.toLowerCase().includes(lowerCase)
        );

        setFullCampaignes(filtercampaignes);
        

    };
    useEffect(() => {
        document.title = "Foodie | Available Foods";
    }, [])

    return (
        <div>

            <div className="md:h-[50vh] lg:h-[50vh] mb-10">
                <div class="flex  justify-center items-center flex-col md:h-[50vh] lg:h-[50vh] image-full shdow-xl bg-base-100 rounded-2xl ">
                    <div
                        class="w-full bg-[url('https://i.ibb.co/cDLLW0s/french-restaurant-background-food-concept-french-cuisine-serving-cafe-548821-14104.jpg')] bg-cover bg-center rounded-2xl">
                        <div class="w-full h-[50vh] md:h-[50vh] lg:h-[50vh] text-center bg-white opacity-60 backdrop-brightness-100  rounded-2xl">
                            <div className="pt-[140px] md:pt-[200px] lg:pt-[200px] mb-[40px]">
                                <span class="text-xl md:text-2xl lg:text-5xl w-1/2 text-center font-bold">Available Food to search here</span>
                            </div>

                            <div className="flex justify-center items-center">
                                <input id='searchinput' type="text" placeholder="Search here" className="input input-bordered  md:w-[275px]  lg:w-[490px]  p-2 md:p-3 lg:p-3 rounded-s-xl" />

                                <input onClick={handleSearch} className=" md:w-[100px] lg:w-[120px] p-2 bg-warning text-white lg:font-bold text-base md:text-2xl lg:text-2xl rounded-e-xl " type="submit" value="Submit" />

                            </div>



                        </div>

                    </div>
                </div>

            </div> 
            

            <AvailableFood2 availableFood={fullCampaignes}></AvailableFood2>
            
        </div>
    );
};

export default AvailableFoods;