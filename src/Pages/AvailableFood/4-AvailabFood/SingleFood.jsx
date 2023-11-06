import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../../Providers.jsx/AuthProvider";
import Swal from "sweetalert2";


const SingleFood = () => {
    const { user } = useContext(AuthContext);
    // function goHome() {
    //     window.location.reload();
    // }
    // document.getElementById('gohome-button').addEventListener('click', goHome);

    
    const fansi =useLoaderData();
    console.log(fansi)
    const { _id,foodname, foodimage, foodquantity, location, date, additionalnotes, foodstatus, donatorname, donatorimage, donatoremail } = fansi;

    const handleAddFood = event => {
        event.preventDefault();
        const form = event.target;

        const foodname = form.foodname.value;
        const foodimage = form.foodimage.value;
        const foodid = form.foodid.value;
        const donatoremail = form.donatoremail.value;
        const donatorname = form.donatorname.value;
        const useremail = form.useremail.value;
        const requestdate = form.requestdate.value;
        const location = form.location.value;
        const expiredate = form.expiredate.value;
        const money = form.money.value;
        const additionalnotes = form.additionalnotes.value;
       
        
       

        const requestFood = { foodname, foodimage, foodid, useremail, requestdate, donatoremail, donatorname, useremail, location, expiredate, additionalnotes, money, donatoremail }

        console.log(requestFood);

        //send data to the server 
        fetch('http://localhost:5000/requestfood', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(requestFood)
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
                                    <form onSubmit={handleAddFood}>
                                        {/* if there is a button in form, it will close the modal */}

                                        <div className='md:flex lg:flex justify-between items-center gap-6 '>

                                            <div className="form-control md:w-3/6 lg:w-3/6">
                                                <label className="label">
                                                    <span className="label-text text-orange-700 font-bold lg:text-lg">Food Name</span>
                                                </label>
                                                <label className="input-group">

                                                    <input type="text" name="foodname" placeholder="foodname " defaultValue={foodname} className="input input-bordered w-full text-orange-500 font-bold lg:text-sm" />
                                                </label>
                                            </div>

                                            <div className="form-control md:w-3/6 lg:w-3/6">
                                                <label className="label">
                                                    <span className="label-text text-orange-700 font-bold lg:text-lg"> Food Image</span>
                                                </label>
                                                <label className="input-group">

                                                    <input type="text" name="foodimage" placeholder="food image" defaultValue={foodimage} className=" text-orange-500 input input-bordered w-full lg:text-sm font-bold" />
                                                </label>
                                            </div>

                                        </div>
                                        <div className='md:flex lg:flex justify-between items-center gap-6 '>

                                            <div className="form-control md:w-3/6 lg:w-3/6">
                                                <label className="label">
                                                    <span className="label-text text-orange-700 font-bold lg:text-lg">Food Id</span>
                                                </label>
                                                <label className="input-group">

                                                    <input type="text" name="foodid" placeholder="food id " defaultValue={_id} className="input input-bordered w-full text-orange-500 font-bold lg:text-sm" />
                                                </label>
                                            </div>

                                            <div className="form-control md:w-3/6 lg:w-3/6">
                                                <label className="label">
                                                    <span className="label-text text-orange-700 font-bold lg:text-lg"> Donator email</span>
                                                </label>
                                                <label className="input-group">

                                                    <input type="email" name="donatoremail" placeholder="donator email" defaultValue={donatoremail} className=" text-orange-500 input input-bordered w-full lg:text-sm font-bold" />
                                                </label>
                                            </div>

                                        </div>
                                        <div className='md:flex lg:flex justify-between items-center gap-6 '>

                                            <div className="form-control md:w-3/6 lg:w-3/6">
                                                <label className="label">
                                                    <span className="label-text text-orange-700 font-bold lg:text-lg">Donator Name</span>
                                                </label>
                                                <label className="input-group">

                                                    <input type="text" defaultValue={donatorname} name="donatorname" placeholder="donator name" className="input input-bordered w-full text-orange-500 font-bold lg:text-sm" />
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

                                                    <input type="date" name="requestdate" placeholder="request date" className="input input-bordered w-full text-orange-500 font-bold lg:text-sm" />
                                                </label>
                                            </div>

                                            <div className="form-control md:w-3/6 lg:w-3/6">
                                                <label className="label">
                                                    <span className="label-text text-orange-700 font-bold lg:text-lg"> Pickup Location</span>
                                                </label>
                                                <label className="input-group">

                                                    <input type="text" name="location" placeholder="location" defaultValue={location} className=" text-orange-500 input input-bordered w-full lg:text-sm font-bold" />
                                                </label>
                                            </div>

                                        </div>
                                        <div className='md:flex lg:flex justify-between items-center gap-6 '>

                                            <div className="form-control md:w-3/6 lg:w-3/6">
                                                <label className="label">
                                                    <span className="label-text text-orange-700 font-bold lg:text-lg">Expire Date</span>
                                                </label>
                                                <label className="input-group">

                                                    <input type="date" name="expiredate" placeholder="expire date" defaultValue={date} className="input input-bordered w-full text-orange-500 font-bold lg:text-sm" />
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

                                                    <input type="text" name="additionalnotes" placeholder="additional notes" className=" text-orange-500 input input-bordered w-full lg:text-sm font-bold" />
                                                </label>
                                            </div>

                                        </div>
                                        <div className="w-[50%] mx-auto">
                                            <button id='gohome-button' className="btn text-white btn-warning  mt-5 ">Request Food</button>

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