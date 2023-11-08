import React, { useEffect, useState } from 'react';
import Featured2 from './Featured2';
import { Link, useLoaderData } from 'react-router-dom';
import { motion } from 'framer-motion'

const Featured = () => {

    const [foods, setFood] = useState([]);
    // const [data,setData] = useState([]);
   

    useEffect(() => {

        const fetchData = () => {


            fetch('https://assignment-11-server-smoky-mu.vercel.app/allfood')
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
            <p className='font-bold text-5xl my-10 text-center'>
                <motion.h1
                    initial={{ x: -900 }}
                    animate={{ x: 0 }}
                    transition={{
                        duration: '2',
                        delay: '1'
                    }}
                >

                    Features : {foods.length}

                </motion.h1>

                
                
                
                </p>
            <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-5'>
                {
                    foods.map(food => <Featured2
                        key={food._id}
                        food={food}

                    ></Featured2>)
                }

            </div>
            <div className='w-[200px] md:w[400px] lg:w-[600px] mx-auto'>
                <Link to='/availablfoods'>
                    <button className='btn btn-warning text-white  font-bold lg:text-3xl border w-[200px] md:w-[300px] lg:w-[500px] mx-auto mt-10'>Show All</button>
                </Link>


            </div>




        </div>
    );
};

export default Featured;