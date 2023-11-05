import React from 'react';
import { Link } from 'react-router-dom';

const Featured2 = ({feature}) => {
    const {_id, food_id, food_img, food_name, donator_name, donator_img, food_quantity, location, expired_date, additional_notes } = feature ;
    return (
        <div>
            <div className="card bg-base-100 shadow-xl ">
                <figure><img className='w-full h-[300px]' src={food_img} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title lg:text-3xl">
                        {food_name}
                        <div className="badge badge-warning text-white">NEW</div>
                    </h2>

                    <div className='flex justify-between items-center '>
                        <p className='text-gray-600 text-sm font-bold '>Quantity : {food_quantity}</p>
                        <p className='text-gray-600 text-sm font-bold text-end'>Exp Date : {expired_date}</p>

                    </div>
                    
                    
                    <p className='text-gray-500 text-base'>{additional_notes}</p>
                    <div className='flex justify-between items-center'>
                        <div className='flex justify-center items-center gap-2'>
                            <img className='w-[40px] h-[40px] rounded-full' src={donator_img} alt="" />
                            <p className='font-bold text-gray-600'>{donator_name}</p>
                        </div>
                        <div>
                            <h1>{location}</h1>
                        </div>

                    </div>
                    
                    <div className="card-actions justify-end">
                        <Link to={`/singlefood/${_id}`}>
                            <button className='btn btn-warning text-white font-bold'>Details</button>
                        </Link>
                       
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Featured2;