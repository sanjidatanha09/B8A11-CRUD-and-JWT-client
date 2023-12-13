import React from 'react';

const OurStory = () => {
    return (
        <div className='mt-20'>
            <h1 className='text-center mb-2 text-5xl font-bold text-gray-600'>Our Story</h1>
            <p className='text-center text-xl font-bold text-[#77775b]'>The Foodie Heaven Restaurant began as a dream.</p>

            <div className='mt-10'>
                <div className="card lg:card-side bg-base-100 shadow-xl">
                    <div className='lg:w-2/5'><img className='lg:h-[550px] w-full rounded-xl' src="https://static.wixstatic.com/media/28e529_d9deb364a28c401c83cfdc4799b372e9~mv2.png/v1/fill/w_296,h_445,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/1920s%20Columbia%20Restaurant%20Don%20Quixote%20dining%20room.png" alt="Movie" /></div>
                    <div className="card-body lg:w-3/5">

                        <p className='font-medium text-xl mb-5'>For Spanish-Cuban immigrant Casimiro Hernandez, Sr., arriving in Tampa, FL, with his four young sons meant searching for opportunity and a better life.
                        </p>
                        <p className='font-medium text-xl mb-5'>
                            On Dec. 17, 1903, he helped to open the Columbia Saloon, which became the Foodie Heaven Restaurant in 1905.

                        </p>
                        <p className='font-medium text-xl mb-5'>
                            Over nearly 120 years, the original restaurant has expanded to an entire city block and is now the largest Spanish restaurant in the world.

                        </p>
                        <p className='font-medium text-xl mb-5'>
                            Casimiro's descendants diligently care for the Foodie Heaven Restaurant and help preserve his Bd dream. As Florida’s oldest restaurant, the Foodie Heaven has seven locations in Florida and is still owned and operated by family members. 

                        </p>
 


                    <div className="card-actions justify-end">
                        <button className="btn btn-warning text-white font-bold text-xl">See More</button>
                    </div>
                </div>
            </div>
        </div>
        </div >
    );
};

export default OurStory;