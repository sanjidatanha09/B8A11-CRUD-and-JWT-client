import React from 'react';

const FoodRequCard = ({ requestfood,handleDelete }) => {
    const { _id, foodname, foodimage, foodid, email, requestdate, donatoremail, donatorname, location, expiredate, additionalnotes, money, username, userimage, foodstatus } = requestfood;


    return (
        <div className='m-5 lg:m-0 '>
            <div className="card lg:card-side bg-base-100 shadow-xl">
                <figure><img className='ml-5 rounded-xl w-full lg:w-[200px] h-[400px] lg:h-[200px]' src={foodimage} alt="Album" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{donatorname}</h2>
                    <p>{expiredate}</p>
                    <p>{requestdate}</p>
                    <p>{money}</p>
                    <p>{foodstatus}</p>
                    <div className="card-actions justify-end">
                        <button onClick={() => handleDelete(_id)} className="btn btn-warning text-white">Cancel Request</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FoodRequCard;