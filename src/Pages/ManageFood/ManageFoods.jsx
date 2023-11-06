import axios from 'axios';
import React, { useEffect, useState } from 'react';
import DataTable from 'react-data-table-component';
import { Link, useLoaderData } from 'react-router-dom';

const ManageFoods = () => {

    const [countries, setCountries] = useState([]);

    const getCountries = async () =>{
        try{
            const response = await axios.get('http://localhost:5000/allfood');
            setCountries(response.data);

        }catch(error){
            console.log(error);
        }
    };

    // const handleDelete = 

    const columns = [
        {
            name: 'Donator Name',
            selector: row => row.donatorname,
            sortable: true
        },
        {
            name: 'Food Name',
            selector: row => row.foodname,
            sortable: true
        },
        {
            name: 'Quantity',
            selector: row => row.foodquantity,
            sortable: true
        },
        {
            name: 'Update',
            selector: row => <button className='btn my-2 text-[12px]'>update</button>,
            sortable: true
        },
        {
            name: 'Delete',
            selector: row => <button className='btn my-2 '>X</button>,
            sortable: true
        },
        {
            name: 'Manage Food',
            selector: row => <Link to=''><button className='btn my-2 text-[12px]'>Manage Food</button> </Link> ,
            sortable: true
        },


    ];


    useEffect(() =>{
        getCountries();

    },[]);

    return (
        <div className='m-5'>

            <DataTable className='p-6'
                columns={columns}
                data={countries}
                selectableRows
                fixedHeader
                pagination
            ></DataTable>

        </div>
    );
};

export default ManageFoods;