import React from 'react';

const Button2 = ({ requestfood ,handleConfirm}) => {
    const { _id, foodname, foodimage, foodid, email, requestdate, donatoremail, donatorname, location, expiredate, additionalnotes, money, username, userimage ,status} = requestfood;

    return (

        <tr>

            <th>
                <label>
                    <input type="checkbox" className="checkbox" />
                </label>
            </th>
            <td>{username}</td>
            <td><img className='rounded-full' src={userimage } alt="" /></td>
   

            <td>{email}</td>
            <td>{requestdate}</td>
            <td>
                {
                    status === 'confirm' ? <button className=''>Delivered</button>:
                        <button onClick={() => handleConfirm(_id)} className='btn'>pending</button>


                }

               
            </td>




        </tr>

    );
};

export default Button2;