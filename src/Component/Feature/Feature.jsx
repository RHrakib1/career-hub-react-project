import React, { useEffect, useState } from 'react';
import Fetu from '../Fetu/Fetu';

const Feature = () => {
    const [feature, setfeature] = useState([])
    useEffect(() => {
        fetch('jobs.json')
            .then(res => res.json())
            .then(data => setfeature(data))
    }, [])
    return (
        <div>
            <div className="text-center mt-14">
                <h1 className='text-5xl font-extrabold'>Featured Jobs</h1>
                <p className='py-4 text-gray-600 font-semibold'>Explore thousands of job opportunities with all the information you need. Its your future</p>
            </div>
            <div className='lg:grid grid-cols-2 gap-4 mt-5'>
                {
                    feature.map(copyfetu => <Fetu key={feature.id} fetu={copyfetu}></Fetu>)
                }
            </div>
        </div>
    );
};

export default Feature;