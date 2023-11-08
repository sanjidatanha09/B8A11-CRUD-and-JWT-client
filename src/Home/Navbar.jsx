import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../Providers.jsx/AuthProvider';
import { FaGithub, FaGofore, FaUserCircle, FaToggleOn } from 'react-icons/fa';

const Navbar = () => {
    const { user, logOUt } = useContext(AuthContext);

    const handleSignOut = () => {
        logOUt()
            .then()
            .catch()

    }
    const navLinks = <>

        <li><NavLink className='' to="/">Home</NavLink></li>
        <li><NavLink to="/availablfoods">Available Foods</NavLink></li>
        <li><NavLink to="/addfood">Add Food</NavLink></li>

        {
            user?.email ? <>
                <li><NavLink to='/managefood'>Manage My Food</NavLink></li>
                <li><NavLink to="/foodrequest">My Food Request</NavLink></li>

            </>

                :
                <li></li>
        }


        {/* <li><NavLink to="/managefood">Manage My Foods</NavLink></li> */}



    </>

    return (
        <div>
            <div className="navbar bg-base-100 h-28 border">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {navLinks}

                        </ul>
                    </div>
                    <div className='flex justify-between items-center gap-1'>
                        <img className='w-[30px] md:w-[60px] lg:w-[50px]' src="https://i.ibb.co/nM5yjYc/images-q-tbn-ANd9-Gc-QEv-NFq-CIQn-Lr8-F9t-MMQLT8k1a15ozh-Tfr-S6sgw-Y-h-Ndw-s.png" alt="" />
                        <h1 className='md:text-3xl lg:text-2xl font-bold text-gray-700'>Foodie <span className='text-orange-500'>Heaven</span> </h1>


                    </div>

                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className=" font-bold text-gray-600 menu menu-horizontal px-1 ">
                        {navLinks}
                    </ul>
                </div>
                <div className='navbar-end '>


                </div><div className="navbar-end ">

                    <div className='flex justify-end items-center gap-5'>

                        <div className='hidden lg:flex '>
                           
                               
                                <img className='rounded-full lg:w-[50px] ' src={user?.photoURL} alt="" />
                                

                         
                         


                        </div>


                        {
                            user ?
                                <button onClick={handleSignOut} className='btn btn-warning text-white'>Log Out</button>

                                :
                                <Link className='flex justify-center items-center gap-3' to="/login">
                                    <NavLink className='text-xl font-bold text-white btn btn-warning' to="/login">Login</NavLink>

                                </Link>

                        }
                       


                    </div>




                </div>


            </div>
        </div>
    );
};

export default Navbar;