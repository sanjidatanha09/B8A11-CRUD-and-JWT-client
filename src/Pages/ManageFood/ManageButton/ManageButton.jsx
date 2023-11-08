import React, { useContext, useEffect } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../../Providers.jsx/AuthProvider';
import Swal from 'sweetalert2';

const ManageButton = () => {
    const { user } = useContext(AuthContext);
    const foodupdate = useLoaderData();
    console.log(foodupdate)
    useEffect(() => {
        document.title = "Foodie | Food Update";
    }, [])

    const { _id, foodname, foodimage, foodquantity, location, date, additionalnotes, foodstatus } = foodupdate;

    const handleUpdateFood = event => {
        event.preventDefault();
        const form = event.target;

        const foodname = form.foodname.value;
        const foodimage = form.foodimage.value;
        // const donatorimage = user?.photoURL;
        // const donatorname = user?.displayName;
        const foodquantity = form.foodquantity.value;
        const location = form.location.value;
        const date = form.date.value;
        const additionalnotes = form.additionalnotes.value;
        const foodstatus = form.foodstatus.value;
        // const email = user?.email;

        const updatedFood = { foodname, foodimage, foodquantity, location, date, additionalnotes, foodstatus }

        console.log(updatedFood);

        //send data to the server 
        fetch(`https://assignment-11-server-smoky-mu.vercel.app/onefood/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updatedFood)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount > 0) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Food update Successfully',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                    })

                }
            })

    }

    return (
        <div>
          
            <div className='mt-16 '>



                <div className='border text-gray-600 font-bold text-3xl max-w-4xl mx-auto text-center  p-12 bg-[#F4F3F0]'>
                    




                    <h2 className='text-5xl font-bold text-orange-600 mb-5'>Update Food : {foodname}</h2>
                    <form onSubmit={handleUpdateFood}>
                        <div className='md:flex lg:flex justify-between items-center gap-6 '>

                            <div className="form-control md:w-3/6 lg:w-3/6">
                                <label className="label">
                                    <span className="label-text text-orange-700 font-bold lg:text-xl">Food Name</span>
                                </label>
                                <label className="input-group">

                                    <input type="text" defaultValue={foodname} name="foodname" placeholder="foodname " className="input input-bordered w-full text-orange-500 font-bold lg:text-xl" />
                                </label>
                            </div>

                            <div className="form-control md:w-3/6 lg:w-3/6">
                                <label className="label">
                                    <span className="label-text text-orange-700 font-bold lg:text-xl"> Food Image</span>
                                </label>
                                <label className="input-group">

                                    <input type="text" defaultValue={foodimage} name="foodimage" placeholder="food image" className=" text-orange-500 input input-bordered w-full" />
                                </label>
                            </div>

                        </div>

                        {/* <div className='md:flex lg:flex justify-between items-center gap-6 '>

                            <div className="form-control md:w-3/6 lg:w-3/6">
                                <label className="label">
                                    <span className="label-text text-orange-700 font-bold lg:text-xl">Donator Image</span>
                                </label>
                                <label className="input-group">

                                    <input type="text" name="donatorimage" defaultValue={user?.photoURL} placeholder="donator image " className="input input-bordered w-full text-orange-500 font-bold lg:text-xl" />
                                </label>
                            </div>

                            <div className="form-control md:w-3/6 lg:w-3/6">
                                <label className="label">
                                    <span className="label-text text-orange-700 font-bold lg:text-xl"> Donator Name</span>
                                </label>
                                <label className="input-group">

                                    <input type="text" defaultValue={user?.displayName} name="donatorname" placeholder="donator name" className="input text-orange-500 input-bordered w-full" />
                                </label>
                            </div>

                        </div> */}

                        <div className='md:flex lg:flex justify-between items-center gap-6'>
                            <div className="form-control md:w-3/6 lg:w-3/6">
                                <label className="label">
                                    <span className="label-text text-orange-700 font-bold lg:text-xl">Food Quantity</span>
                                </label>
                                <label className="input-group">

                                    <input type="text" defaultValue={foodquantity} name="foodquantity" placeholder="food quantity" className="input text-orange-500 input-bordered w-full" />
                                </label>
                            </div>
                            <div className="form-control md:w-3/6 lg:w-3/6">
                                <label className="label">
                                    <span className="label-text text-orange-700 font-bold lg:text-xl">Pickup Location</span>
                                </label>
                                <label className="input-group">

                                    <input type="text" defaultValue={location} name="location" placeholder="location" className="input input-bordered w-full text-orange-500" />
                                </label>
                            </div>
                        </div>

                        <div className='md:flex lg:flex justify-between items-center gap-6'>
                            <div className="form-control md:w-3/6 lg:w-3/6">
                                <label className="label">
                                    <span className="label-text text-orange-700 font-bold lg:text-xl">Expired Date</span>
                                </label>
                                <label className="input-group">

                                    <input type="date" defaultValue={date} name="date" placeholder="expired date" className="input input-bordered text-orange-500 w-full" />
                                </label>
                            </div>
                            <div className="form-control md:w-3/6 lg:w-3/6">
                                <label className="label">
                                    <span className="label-text text-orange-700 font-bold lg:text-xl">Additional Notes</span>
                                </label>
                                <label className="input-group">

                                    <input type="text" defaultValue={additionalnotes} name="additionalnotes" placeholder="additional notes" className="input input-bordered w-full text-orange-500" />
                                </label>
                            </div>
                        </div>
                        <div className='md:flex lg:flex justify-between items-center gap-6'>
                            <div className="form-control md:w-3/6 lg:w-3/6">
                                <label className="label">
                                    <span className="label-text text-orange-700 font-bold lg:text-xl">Food Status</span>
                                </label>
                                <label className="input-group">

                                    <input type="text" defaultValue={foodstatus} name="foodstatus" placeholder="food status"  className="input text-orange-500 input-bordered w-full" />
                                </label>
                            </div>
                            {/* <div className="form-control md:w-3/6 lg:w-3/6">
                                <label className="label">
                                    <span className="label-text text-orange-700 font-bold lg:text-xl">Donator Email</span>
                                </label>
                                <label className="input-group">

                                    <input type="email"  defaultValue={user?.email} name="email" placeholder="donator email" className="input input-bordered w-full text-orange-500" />
                                </label>
                            </div> */}
                        </div>


                        <div className='pt-10'>
                            <button className="btn btn-warning text-white lg:text-2xl ">Update Food</button>

                        </div>






                    </form>



                </div>
            
            </div>
        </div>
    );
};

export default ManageButton;