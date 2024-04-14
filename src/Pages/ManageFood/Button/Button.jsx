import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Button2 from './Button2';

const Button = () => {
    const buttonupdate = useLoaderData();
    const [requestfoods, setRequestFood] = useState(buttonupdate);
    const handleConfirm = id => {
        fetch(`https://assignment-11-server-smoky-mu.vercel.app/requfood/${id}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({ status: 'confirm' })

        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount > 0) {
                    //update
                    const remaining = requestfoods.filter(requestfood => requestfood._id !== id);
                    const updated = requestfoods.find(requestfood => requestfood._id === id);
                    updated.status = 'confirm'
                    const newFoodie = [updated, ...remaining];
                    setRequestFood(newFoodie);

                }
            })
    }

    return (
        <div>
            <h1>{requestfoods.length}</h1>

            <div className="overflow-x-auto mt-10">
                <table className="text-center table table-xs table-pin-rows table-pin-cols">
                    {/* head */}
                    <thead className='p-10'>
                        <tr>
                            <th>
                                <label>
                                    <input type="checkbox" className="checkbox" />
                                </label>
                            </th>
                            <th>Requester Name</th>
                            <th>Requester Image</th>

                            <th>Requester Email</th>
                            <th>Request Time and Date</th>
                            <th>status</th>

                        </tr>
                    </thead>
                    <tbody className=''>

                        {
                            requestfoods.map(requestfood => <Button2
                                key={requestfood._id}
                                requestfood={requestfood}
                                handleConfirm={handleConfirm}

                            ></Button2>)
                        }

                    </tbody>


                </table>
            </div>

        </div>
    );
};

export default Button;