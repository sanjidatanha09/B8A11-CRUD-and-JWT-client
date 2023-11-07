import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Providers.jsx/AuthProvider';
import MFoodCard from './MFoodCard';
import Swal from 'sweetalert2';

const ManageFoods = () => {
    const { user } = useContext(AuthContext)
    const [managefoods, setManageFood] = useState([]);

    const url = `http://localhost:5000/somefood?email=${user?.email}`;


    useEffect(() => {
        if (user?.email) {
            fetch(url)
                .then(res => res.json())
                .then(data => setManageFood(data))

        }

        document.title = "Foodie | Manage Food";

    }, [url])

   


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

                fetch(`http://localhost:5000/allfood/${id}`, {
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

    



    return (
        <div>
            <h2 className='text-5xl'>your foods :{managefoods.length} </h2>

            <div className="">
                <table className="table border text-center">
                    {/* head */}
                    <thead className='p-10'>
                        <tr>
                            <th>
                                <label>
                                    <input type="checkbox" className="checkbox" />
                                </label>
                            </th>
                            <th>Donator Name</th>
                            <th>Food Name</th>
                           
                            <th>Quantity</th>
                            <th>Manage</th>
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