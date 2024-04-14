import React from 'react';
import { Link } from 'react-router-dom';

const MFoodCard = ({ managefood, handleDelete }) => {
    const { _id, foodname, donatorname, foodstatus, foodquantity, status } = managefood;

    return (
        <tr>
        <th>
                <label>
                    <input type="checkbox" className="checkbox" />
                </label>
            </th>
            <td>{donatorname}</td>
            <td>{foodname}</td>

            <td>{foodquantity}</td>
            <td>
                <Link to={`/button/${_id}`}>
                    <button className='btn w-[140px]'>Manage Food</button>

                </Link>             
            </td>
            <td> <button className='btn' onClick={() => handleDelete(_id)}>X</button></td>
            <td>
                <Link to={`/managebutton/${_id}`}>
                    <button className='btn '>update</button>
               </Link>  
            </td>
        </tr>

    );
};

export default MFoodCard;