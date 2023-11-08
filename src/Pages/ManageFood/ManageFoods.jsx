import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Providers.jsx/AuthProvider';
import MFoodCard from './MFoodCard';
import Swal from 'sweetalert2';
import axios from 'axios';

const ManageFoods = () => {
    const { user } = useContext(AuthContext)
    const [managefoods, setManageFood] = useState([]);

    const url = `https://assignment-11-server-smoky-mu.vercel.app/somefood?email=${user?.email}`;


    useEffect(() => {
        if (user?.email) {

            axios.get(url, {withCredentials: true})
            .then(res =>{
                setManageFood(res.data)
            })
            // fetch(url)
            //     .then(res => res.json())
            //     .then(data => setManageFood(data))

        }

        document.title = "Foodie | Manage Food";

    }, [url])
    console.log(managefoods)
   


    const handleDelete = id => {

        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {

                fetch(`https://assignment-11-server-smoky-mu.vercel.app/allfood/${id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        if (data.deletedCount > 0) {
                            Swal.fire(
                                'Deleted',
                                'Your file has been deleted.',
                                'success'
                            )
                            const remaining = managefoods.filter(managefood => managefood._id !== id);
                            setManageFood(remaining);

                        }
                    })



            }


        });


    }

    
    //overflow-x-auto
    //mt-10 w-[400px] md:w-full lg:w-full


    return (
        <div>

          
            

            <div className="overflow-x-auto mt-10">
                <table className=" table table-xs table-pin-rows table-pin-cols">
                    {/* head */}
                    <thead className='lg:p-10'>
                        <tr className='lg:text-xl'>
                            <th>
                                <label>
                                    <input type="checkbox" className="checkbox" />
                                </label>
                            </th>
                            <th>Donator Name</th>
                            <th>Food Name</th>
                           
                            <th>Quantity</th>
                            <th>Manage Food </th>
                            <th>Delete</th>
                            <th>Update</th>
                        </tr>
                    </thead>
                    <tbody className=''>

                      {
                        managefoods.map(managefood =><MFoodCard
                        key={managefood._id}
                        managefood={managefood}
                        handleDelete={handleDelete}
                       
                        ></MFoodCard>)
                      }

                    </tbody>


                </table>
            </div>
        </div>
    );
};

export default ManageFoods;