import React from 'react';
import {motion} from 'framer-motion'

const MeetTeam = () => {
    return (
       
        <div className='text-center  font-bold my-10'>



            


            <h1 className='text-2xl md:text-3xl lg:text-4xl text-gray-700 mb-10'>
                
                <motion.h1
                    initial={{ x: -900 }}
                    animate={{ x: 0 }}
                    transition={{
                        duration: '2',
                        delay: '1'
                    }}
                >

                    Meet Our Team

                </motion.h1>
                
                
                
                </h1>
            <div className='md:grid grid-cols-2 lg:flex justify-center items-center gap-10'>


                <div>
                    <div className="avatar">
                        <div className="w-52 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2 ">
                            <img src="https://i.ibb.co/tDW4G8d/businesswoman-character-avatar-icon-vector-11773829.jpg" />
                        </div>

                    </div>
                    <h1 className='text-2xl md:text-3xl lg:text-4xl my-2 text-gray-700'>Arohi Nayan</h1>

                </div>

                <div>
                    <div className="avatar">
                        <div className="w-52 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                            <img src="https://i.ibb.co/RzwKT0w/person-avatar-design-24877-38130.jpg" />
                        </div>

                    </div>
                    <h1 className='text-2xl md:text-3xl lg:text-4xl my-2 text-gray-700'>Rahini Sheikh</h1>

                </div>

                <div>
                    <div className="avatar">
                        <div className="w-52 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                            <img src="https://i.ibb.co/pzXqykd/images-q-tbn-ANd9-Gc-QAsnr-Twdv-Jt99dz5-HXHOq02-CCLdl76-s-XIi-Ah-P1-JVs-Sa3-WR1-Ak-EAq-Fpdr-Nfq0as-G.png" />
                        </div>

                    </div>
                    <h1 className='text-2xl md:text-3xl lg:text-4xl my-2 text-gray-700'>Mohini Ayan</h1>

                </div>
                <div>
                    <div className="avatar">
                        <div className="w-52 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                            <img src="https://i.ibb.co/pfDBzNB/avatar-3637425-1280.png" />
                        </div>

                    </div>
                    <h1 className='text-2xl md:text-3xl lg:text-4xl my-2 text-gray-700'>Akash Nil</h1>

                </div>


            </div>

        </div>
    );
};

export default MeetTeam;