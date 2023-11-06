import { useLoaderData } from "react-router-dom";


const SingleFood = () => {
    
    const fansi =useLoaderData();
    console.log(fansi)
    const { foodname, foodimage, foodquantity, location, date, additionalnotes, foodstatus, donatorname, donatorimage, donatoremail } = fansi;

    return (
        <div>
            <div className="text-center mt-10 font-bold md:text-xl lg:text-3xl text-gray-600">

                <h2>Donar Name : {foodname}</h2>
                <h2>Location  :{location}</h2>

            </div>

            <div className="card md:w-[500px] lg:w-[600px] mx-auto bg-base-100 shadow-xl my-10">
                <figure><img className='w-full h-[400px]' src={foodimage} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title lg:text-3xl">
                    {foodname}
                        
                    </h2>

                    <div className='flex justify-between items-center mb-5'>
                        <p className='text-gray-600 lg:text-xl font-bold '>Quantity : {foodquantity}</p>
                        <p className='text-gray-600 lg:text-xl font-bold text-end'>Exp Date : {date}</p>

                    </div>




                    <div className="card-actions justify-end">

                        <button className='btn btn-warning text-white font-bold'>Request Food</button>


                    </div>
                </div>
            </div>

        </div>
    );
};

export default SingleFood;