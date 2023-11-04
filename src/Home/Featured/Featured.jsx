import React, { useEffect, useState } from 'react';
import Featured2 from './Featured2';

const Featured = () => {
    const [features, setFeatures] = useState([]);

    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setFeatures(data))
    }, [])

    return (
        <div className='mb-10'>
            <p className='font-bold text-5xl my-10 text-center'>Features : {features.length}</p>
            <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-5'>
                {
                    features.map(feature => <Featured2
                        key={feature._id}
                        feature={feature}

                    ></Featured2>)
                }

            </div>
         

        </div>
    );
};

export default Featured;