import React from 'react';

const Section1 = () => {
    return (
        <div className='pb-40'>
            <div className='relative '>

                <div>
                    <img className='h-[500px]  mx-auto w-full' src="https://i.ibb.co/8BvQQXh/pexels-photo-262978-jpeg-cs-srgb-dl-pexels-pixabay-262978.jpg" alt="" />
                </div>

                <div className='w-[350px] md:w-[650px] lg:w-[900px] mx-auto bg-orange-400 absolute top-96 left-10 md:top-96 md:left-16 lg:top-96 lg:left-44'>
                    <h1 className='md:text-lg lg:text-2xl p-10 text-white'>"Every year, our community comes together to organize a massive food drive, collecting essential items to donate to local shelters and food banks.Your small food donation can make a big difference in the lives of families struggling to put meals on their tables."</h1>
                </div>
            </div>

        </div>
        
    );
};

export default Section1;