import React, { useContext, useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import FoodRequCard from './FoodRequCard';
import Swal from 'sweetalert2';
import { AuthContext } from '../../Providers.jsx/AuthProvider';
import axios from 'axios';
import useAuth from '../../Hooks/useAuth';

const FoodRequest = () => {
    const { user } = useAuth();
    const [requestfoods, setRequFoods] = useState([]);

    const url = `https://assignment-11-server-smoky-mu.vercel.app/foodrequest?email=${user?.email}`; 


    useEffect(() => {
            axios.get(url, { withCredentials: true })
                .then(res => {
                    setRequFoods(res.data)
                })
            // fetch(url)
            //     .then(res => res.json())
            //     .then(data => setManageFood(data))

        // }

        document.title = "Foodie | Food Request";

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

                fetch(`https://assignment-11-server-smoky-mu.vercel.app/requfood/${id}`, {
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
                            const remaining = requestfoods.filter(requestfood => requestfood._id !== id);
                            setRequFoods(remaining);
                        }
                    })
            }

        });
    }

    return (
        <div className='grid md:grid-cols-1 lg:grid-cols-2 gap-5'>
            {
                requestfoods.map(requestfood => <FoodRequCard
                    key={requestfood._id}
                    requestfood={requestfood}
                    handleDelete={handleDelete}
                ></FoodRequCard>)
            }
        </div>
    );
};

export default FoodRequest;