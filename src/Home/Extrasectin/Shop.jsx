import React from 'react';

const Shop = () => {
    return (
        <div className='pt-10'>
            <h1 className='text-center  mb-10 text-5xl font-bold text-gray-600'>Shop Offer</h1>
            <div className='grid lg:grid-cols-2 justify-between items-center'>
                <div className="card lg:w-[500px] bg-base-100 shadow-xl">
                    <figure><img className='w-full h-[250px]' src="https://static.wixstatic.com/media/28e529_debc31987152462faf1893029e45a24e~mv2.jpg/v1/crop/x_0,y_549,w_3024,h_2264/fill/w_391,h_293,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/1905%20Family%20Of%20Restaurants%20Gift%20Card.jpg" alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title text-6xl text-center text-[#c5c558]">Gift Cards</h2>


                    </div>
                </div>
                <div className="card lg:w-[500px] bg-base-100 shadow-xl">
                    <figure><img className='w-full h-[250px]' src="https://static.wixstatic.com/media/28e529_bcf512868c0a41fd9237736a2d73649c~mv2.jpg/v1/fill/w_439,h_293,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/Columbia%20Restaurant%20Gift%20Shop.jpg" alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title text-6xl text-center text-[#c5c558]">Gift Shop</h2>
                       


                    </div>
                </div>
            </div>

        </div>
       
    );
};

export default Shop;