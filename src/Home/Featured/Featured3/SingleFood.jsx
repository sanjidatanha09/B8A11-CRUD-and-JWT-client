import { useLoaderData } from "react-router-dom";


const SingleFood = () => {
    const feature =  useLoaderData();

    console.log(feature)
    const { _id, food_id, food_img, food_name, donator_name, donator_img, food_quantity, location, expired_date, additional_notes } = feature;

    return (
        <div>
            <div className="text-center mt-10 font-bold md:text-xl lg:text-3xl text-gray-600">
                
                <h2>Donar Name : {donator_name}</h2>
                <h2>Location  {location}</h2>

            </div>

            <div className="card md:w-[500px] lg:w-[600px] mx-auto bg-base-100 shadow-xl my-10">
                <figure><img className='w-full h-[400px]' src={food_img} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title lg:text-3xl">
                        {food_name}
                        {/* <div className="badge badge-warning text-white">NEW</div> */}
                    </h2>

                    <div className='flex justify-between items-center mb-5'>
                        <p className='text-gray-600 lg:text-xl font-bold '>Quantity : {food_quantity}</p>
                        <p className='text-gray-600 lg:text-xl font-bold text-end'>Exp Date : {expired_date}</p>

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