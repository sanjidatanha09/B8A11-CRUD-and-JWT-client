import React from 'react';

const AvailableFoodCard = ({food}) => {
    return (
        <div>
            <div className="card  mx-auto bg-base-100 shadow-xl ">
                <figure><img className='w-full h-[250px] mb-0 pb-0' src='https://i.ibb.co/hmTPbW9/Margherita-Pizza-094.jpg' alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title lg:text-3xl mt-0">
                        name

                    </h2>

                    <div className='flex justify-between items-center '>
                        <p className='text-gray-600 text-sm font-bold '>Quantity : </p>
                        <p className='text-gray-600 text-sm font-bold text-end'>Exp Date : </p>

                    </div>


                    <p className='text-gray-500 text-base'>additional_notes</p>
                    <div className='flex justify-between items-center'>
                        <div className='flex justify-center items-center gap-2'>
                            <img className='w-[40px] h-[40px] rounded-full' src='https://i.ibb.co/hmTPbW9/Margherita-Pizza-094.jpg' alt="" />
                            <p className='font-bold text-gray-600'>donator_name</p>
                        </div>
                        <div>
                            <h1>location</h1>
                        </div>

                    </div>

                    <div className="card-actions border w-full mt-5">

                        <button className='btn w-full btn-warning text-white font-bold'>Details</button>


                    </div>
                </div>
            </div>
        </div>
    );
};

export default AvailableFoodCard;