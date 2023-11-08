import React from 'react';
import { Link } from 'react-router-dom';

const Featured2 = ({food}) => {
    const { _id,foodname, foodimage, foodquantity, location, date, additionalnotes, foodstatus, donatorname, donatorimage, donatoremail } = food;
    return (
        <div>
            <div className="card  bg-base-100 shadow-xl ">
                <figure><img className='w-full h-[300px]' src={foodimage} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title lg:text-3xl">
                        {foodname}
                        <div className="badge badge-warning text-white">NEW</div>
                    </h2>

                    <div className='flex justify-between items-center '>
                        <p className='text-gray-600 text-sm font-bold '>Quantity : {foodquantity}</p>
                        <p className='text-gray-600 text-sm font-bold text-end'>Exp Date : {date}</p>

                    </div>
                    
                    
                    <p className='text-gray-500 text-base h-[130px]'>{additionalnotes}</p>
                    <div className='flex justify-between items-center'>
                        <div className='flex justify-center items-center gap-2'>
                            <img className='w-[40px] h-[40px] rounded-full' src={donatorimage} alt="" />
                            <p className='font-bold text-gray-600'>{donatorname}</p>
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