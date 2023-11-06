import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../../Providers.jsx/AuthProvider";


const SingleFood = () => {
    const { user } = useContext(AuthContext);
    
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



                        {/* Open the modal using document.getElementById('ID').showModal() method */}


                        <button className="btn btn-warning text-white font-bold" onClick={() => document.getElementById('my_modal_5').showModal()}>Request Food</button>


                        <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
                            <div className="modal-box">
        
                                
                                <div className="modal-action">
                                    <form method="dialog">
                                        {/* if there is a button in form, it will close the modal */}

                                        <div className='md:flex lg:flex justify-between items-center gap-6 '>

                                            <div className="form-control md:w-3/6 lg:w-3/6">
                                                <label className="label">
                                                    <span className="label-text text-orange-700 font-bold lg:text-lg">Food Name</span>
                                                </label>
                                                <label className="input-group">

                                                    <input type="text" name="foodname" placeholder="foodname " className="input input-bordered w-full text-orange-500 font-bold lg:text-sm" />
                                                </label>
                                            </div>

                                            <div className="form-control md:w-3/6 lg:w-3/6">
                                                <label className="label">
                                                    <span className="label-text text-orange-700 font-bold lg:text-lg"> Food Image</span>
                                                </label>
                                                <label className="input-group">

                                                    <input type="text" name="foodimage" placeholder="food image" className=" text-orange-500 input input-bordered w-full lg:text-sm font-bold" />
                                                </label>
                                            </div>

                                        </div>
                                        <div className='md:flex lg:flex justify-between items-center gap-6 '>

                                            <div className="form-control md:w-3/6 lg:w-3/6">
                                                <label className="label">
                                                    <span className="label-text text-orange-700 font-bold lg:text-lg">Food Id</span>
                                                </label>
                                                <label className="input-group">

                                                    <input type="text" name="foodid" placeholder="food id " className="input input-bordered w-full text-orange-500 font-bold lg:text-sm" />
                                                </label>
                                            </div>

                                            <div className="form-control md:w-3/6 lg:w-3/6">
                                                <label className="label">
                                                    <span className="label-text text-orange-700 font-bold lg:text-lg"> Donator email</span>
                                                </label>
                                                <label className="input-group">

                                                    <input type="text" name="donatoremail" placeholder="donator email"  className=" text-orange-500 input input-bordered w-full lg:text-sm font-bold" />
                                                </label>
                                            </div>

                                        </div>
                                        <div className='md:flex lg:flex justify-between items-center gap-6 '>

                                            <div className="form-control md:w-3/6 lg:w-3/6">
                                                <label className="label">
                                                    <span className="label-text text-orange-700 font-bold lg:text-lg">Donator Name</span>
                                                </label>
                                                <label className="input-group">

                                                    <input type="text" name="donatorname" placeholder="donator name" className="input input-bordered w-full text-orange-500 font-bold lg:text-sm" />
                                                </label>
                                            </div>

                                            <div className="form-control md:w-3/6 lg:w-3/6">
                                                <label className="label">
                                                    <span className="label-text text-orange-700 font-bold lg:text-lg"> User email</span>
                                                </label>
                                                <label className="input-group">

                                                    <input type="text" name="useremail" placeholder="user email" defaultValue={user?.email} className=" text-orange-500 input input-bordered w-full lg:text-sm font-bold" />
                                                </label>
                                            </div>

                                        </div>

                                        <div className='md:flex lg:flex justify-between items-center gap-6 '>

                                            <div className="form-control md:w-3/6 lg:w-3/6">
                                                <label className="label">
                                                    <span className="label-text text-orange-700 font-bold lg:text-lg">Request Date</span>
                                                </label>
                                                <label className="input-group">

                                                    <input type="text" name="date" placeholder="request date" className="input input-bordered w-full text-orange-500 font-bold lg:text-sm" />
                                                </label>
                                            </div>

                                            <div className="form-control md:w-3/6 lg:w-3/6">
                                                <label className="label">
                                                    <span className="label-text text-orange-700 font-bold lg:text-lg"> Pickup Location</span>
                                                </label>
                                                <label className="input-group">

                                                    <input type="text" name="location" placeholder="location"  className=" text-orange-500 input input-bordered w-full lg:text-sm font-bold" />
                                                </label>
                                            </div>

                                        </div>
                                        <div className='md:flex lg:flex justify-between items-center gap-6 '>

                                            <div className="form-control md:w-3/6 lg:w-3/6">
                                                <label className="label">
                                                    <span className="label-text text-orange-700 font-bold lg:text-lg">Expire Date</span>
                                                </label>
                                                <label className="input-group">

                                                    <input type="text" name="expiredate" placeholder="expire date" className="input input-bordered w-full text-orange-500 font-bold lg:text-sm" />
                                                </label>
                                            </div>

                                            <div className="form-control md:w-3/6 lg:w-3/6">
                                                <label className="label">
                                                    <span className="label-text text-orange-700 font-bold lg:text-lg">Donation Money</span>
                                                </label>
                                                <label className="input-group">

                                                    <input type="text" name="money" placeholder="money"  className=" text-orange-500 input input-bordered w-full lg:text-sm font-bold" />
                                                </label>
                                            </div>

                                        </div>
                                        <div className='md:flex lg:flex justify-between items-center gap-6 '>

                                            

                                            <div className="form-control md:w-3/6 lg:w-3/4">
                                                <label className="label">
                                                    <span className="label-text text-orange-700 font-bold lg:text-lg">Additional Notes</span>
                                                </label>
                                                <label className="input-group">

                                                    <input type="text" name="money" placeholder="money" className=" text-orange-500 input input-bordered w-full lg:text-sm font-bold" />
                                                </label>
                                            </div>

                                        </div>
                                        <div className="w-[50%] mx-auto">
                                            <button className="btn text-white btn-warning  mt-5 ">Request Food</button>

                                        </div>
                                        
                                        
                                    </form>
                                </div>
                            </div>
                        </dialog>


                    </div>
                </div>
            </div>

        </div>
    );
};

export default SingleFood;