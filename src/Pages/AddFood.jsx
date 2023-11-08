import React, { useContext, useEffect } from 'react';
import { AuthContext } from '../Providers.jsx/AuthProvider';
import Swal from 'sweetalert2';

const AddFood = () => {
    const { user } = useContext(AuthContext);
    useEffect(() => {
        document.title = "Foodie | Add Food";
    }, [])

    const handleAddFood = event => {
        event.preventDefault();
        const form = event.target;

        const foodname = form.foodname.value;
        const foodimage = form.foodimage.value;
        const donatorimage = user?.photoURL;
        const donatorname = user?.displayName;
        const foodquantity = form.foodquantity.value;
        const location = form.location.value;
        const date = form.date.value;
        const additionalnotes = form.additionalnotes.value;
        const foodstatus = form.foodstatus.value;
        const email = user?.email;

        const newFood = { foodname, foodimage, donatorimage, donatorname, foodquantity, location, date, additionalnotes, foodstatus, email }

        console.log(newFood);

        //send data to the server 
        fetch('https://assignment-11-server-smoky-mu.vercel.app/allfood', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newFood)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.insertedId) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Food Added Successfully',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                    })

                }
            })

    }


    return (
        <div className='mt-16 '>



            <div className='border text-gray-600 font-bold text-3xl max-w-4xl mx-auto text-center  p-12 bg-[#F4F3F0]'>
                <div className='text-end flex justify-end items-center'>
                    <img className='w-[20px] rounded-full' src={user?.photoURL} alt="" />
                    <p className='text-sm font-bold text-orange-700'>{user?.displayName}</p>




                </div>
                <div className='text-end text-orange-700'>
                    <p className='text-sm font-bold'>{user?.email}</p>

                </div>




                <h2 className='text-5xl font-bold text-orange-600 mb-5'></h2>
                <form onSubmit={handleAddFood}>
                    <div className='md:flex lg:flex justify-between items-center gap-6 '>

                        <div className="form-control md:w-3/6 lg:w-3/6">
                            <label className="label">
                                <span className="label-text text-orange-700 font-bold lg:text-xl">Food Name</span>
                            </label>
                            <label className="input-group">

                                <input type="text" name="foodname" placeholder="foodname " className="input input-bordered w-full text-orange-500 font-bold lg:text-xl" />
                            </label>
                        </div>

                        <div className="form-control md:w-3/6 lg:w-3/6">
                            <label className="label">
                                <span className="label-text text-orange-700 font-bold lg:text-xl"> Food Image</span>
                            </label>
                            <label className="input-group">

                                <input type="text" name="foodimage" placeholder="food image" className=" text-orange-500 input input-bordered w-full" />
                            </label>
                        </div>

                    </div>

                    <div className='md:flex lg:flex justify-between items-center gap-6 '>

                        <div className="form-control md:w-3/6 lg:w-3/6">
                            <label className="label">
                                <span className="label-text text-orange-700 font-bold lg:text-xl">Donator Image</span>
                            </label>
                            <label className="input-group">
                                

                                <input type="text" disabled name="donatorimage" defaultValue={user?.photoURL}  placeholder="donator image " className="input input-bordered w-full text-orange-500 font-bold lg:text-xl" />
                            </label>
                        </div>

                        <div className="form-control md:w-3/6 lg:w-3/6">
                            <label className="label">
                                <span className="label-text text-orange-700 font-bold lg:text-xl"> Donator Name</span>
                            </label>
                            <label className="input-group">

                                <input type="text" disabled defaultValue={user?.displayName} name="donatorname" placeholder="donator name" className="input text-orange-500 input-bordered w-full" />
                            </label>
                        </div>

                    </div>

                    <div className='md:flex lg:flex justify-between items-center gap-6'>
                        <div className="form-control md:w-3/6 lg:w-3/6">
                            <label className="label">
                                <span className="label-text text-orange-700 font-bold lg:text-xl">Food Quantity</span>
                            </label>
                            <label className="input-group">

                                <input type="text" name="foodquantity" placeholder="food quantity" className="input text-orange-500 input-bordered w-full" />
                            </label>
                        </div>
                        <div className="form-control md:w-3/6 lg:w-3/6">
                            <label className="label">
                                <span className="label-text text-orange-700 font-bold lg:text-xl">Pickup Location</span>
                            </label>
                            <label className="input-group">

                                <input type="text" name="location" placeholder="location" className="input input-bordered w-full text-orange-500" />
                            </label>
                        </div>
                    </div>

                    <div className='md:flex lg:flex justify-between items-center gap-6'>
                        <div className="form-control md:w-3/6 lg:w-3/6">
                            <label className="label">
                                <span className="label-text text-orange-700 font-bold lg:text-xl">Expired Date</span>
                            </label>
                            <label className="input-group">

                                <input type="date" name="date" placeholder="expired date" className="input input-bordered text-orange-500 w-full" />
                            </label>
                        </div>
                        <div className="form-control md:w-3/6 lg:w-3/6">
                            <label className="label">
                                <span className="label-text text-orange-700 font-bold lg:text-xl">Additional Notes</span>
                            </label>
                            <label className="input-group">

                                <input type="text" name="additionalnotes" placeholder="additional notes" className="input input-bordered w-full text-orange-500" />
                            </label>
                        </div>
                    </div>
                    <div className='md:flex lg:flex justify-between items-center gap-6'>
                        <div className="form-control md:w-3/6 lg:w-3/6">
                            <label className="label">
                                <span className="label-text text-orange-700 font-bold lg:text-xl">Food Status</span>
                            </label>
                            <label className="input-group">

                                <input type="text" name="foodstatus" placeholder="food status" defaultValue='Available' className="input text-orange-500 input-bordered w-full" />
                            </label>
                        </div>
                        <div className="form-control md:w-3/6 lg:w-3/6">
                            <label className="label">
                                <span className="label-text text-orange-700 font-bold lg:text-xl">Donator Email</span>
                            </label>
                            <label className="input-group">

                                <input type="email" disabled defaultValue={user?.email} name="email" placeholder="donator email" className="input input-bordered w-full text-orange-500" />
                            </label>
                        </div>
                    </div>

                   
                    <div className='pt-10'>
                        <button className="btn btn-warning text-white lg:text-2xl ">Add Food</button>

                    </div>






                </form>



            </div>
            <div className='pb-32'>

            </div>
        </div>
    );
};

export default AddFood;