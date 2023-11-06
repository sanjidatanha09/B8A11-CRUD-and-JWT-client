import React, { useEffect, useState } from 'react';
import AvailableFoodCard from './AvailableFoodCard';
import { useLoaderData } from 'react-router-dom';

const AvailableFood2 = ({ availableFood }) => {
    
    const foodall = useLoaderData()
    console.log(foodall);
    const [dateList, setDateList] = useState(foodall);
    const [sortList, setSortList] = useState([]);

    useEffect(() =>{
        const sortData=() =>{
            dateList.sort((a,b) =>new Date(a.date) - new Date(b.date))
            console.log(dateList)
            setSortList();

            
        }
        sortData()
    }, [])
  


    return (
        <div>
            <div className='text-center font-bold md:text-2xl lg:text-3xl mb-5'>
                {/* Total Available Food:{fullCampaignes.length} */}
            </div>
            

            <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-5 px-2  lg:px-0'>
                {
                    availableFood?.map(food => <AvailableFoodCard
                        key={food._id}
                        food={food}


                    ></AvailableFoodCard>)
                }
            </div>




        </div>
    );
};

export default AvailableFood2;