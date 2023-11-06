import React, { useEffect, useRef } from 'react';
import Lottie from 'lottie-react';
import donationanimation from '../../public/section2.json'

const Section2 = () => {
   
    return (
        <div>


            <div className='lg:flex justify-center items-center mb-36'>

                <div className='lg:w-[50%] relative'>
                    <div className='lg:w-3/4 '>
                        <img className='w-full my-5 lg:my-0' src="https://i.ibb.co/sKpLB76/Bull-Bell-Steakhouse-CREDITDestination-Riverina-Murray.jpg" alt="" />

                    </div>
                    <div className='hidden lg:flex lg:w-3/5 absolute top-40 left-48 '>
                        <Lottie animationData={donationanimation}></Lottie>

                    </div>



                </div>
                <div className='lg:w-[50%] text-sm md:text-lg lg:text-lg font-bold text-gray-700'>
                    <h1>Food is not just a necessity; it's a celebration of flavors, cultures, and traditions that bring people together. From the sizzling stir-fries of Asia to the hearty stews of Europe, the world's cuisines offer a delightful journey for the taste buds.</h1>
                    <h2>Food donation is a noble act that can transform lives, providing sustenance to those in need. Many charitable organizations rely on food donations to support the hungry and underprivileged individuals in our communities.</h2>
                </div>
            </div>

           
        </div>
    );
};

export default Section2;