import React, { useEffect, useState } from 'react';
import Featured2 from './Featured2';
import { Link, useLoaderData } from 'react-router-dom';

const Featured = () => {

    const [foods, setFood] = useState([]);
    // const [data,setData] = useState([]);
   

    useEffect(() => {

        const fetchData = () => {


            fetch('http://localhost:5000/allfood')
                .then(res => res.json())
                .then(json => {
                    const result = json.sort((a,b) =>b.foodquantity - a.foodquantity)
                    console.log(result)


                    setFood(result.slice(0,6));

                })
                   
                .catch(e =>{
                    console.log('error',e)
                })


        }
        fetchData();


    }, []);



    return (
        <div className='mb-10'>
            <p className='font-bold text-5xl my-10 text-center'>Features : {foods.length}</p>
            <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-5'>
                {
                    foods.map(food => <Featured2
                        key={food._id}
                        food={food}

                    ></Featured2>)
                }

            </div>
            <div className='w-[600px] mx-auto'>
                <Link to='/availablfoods'>
                    <button className='btn btn-warning text-white  font-bold lg:text-3xl border w-[500px] mx-auto mt-10'>Show All</button>
                </Link>


            </div>




        </div>
    );
};

export default Featured;