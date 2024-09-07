import React, { useEffect, useState } from 'react';
import Fetu from '../Fetu/Fetu';

const Feature = () => {
    const [feature, setfeature] = useState([])
    const [datalode, setdataload] = useState(4)
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
                    feature.slice(0, datalode).map(copyfetu => <Fetu key={feature.id} fetu={copyfetu}></Fetu>)
                }
            </div>
            <div className={datalode === feature.length ? "hidden" : ""}>
                <button className='btn btn-primary mx-auto flex mt-10' onClick={() => setdataload(feature.length)}>See All Jobs</button>
            </div>
        </div>
    );
};

export default Feature;