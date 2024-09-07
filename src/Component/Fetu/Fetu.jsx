import React from 'react';

const Fetu = ({ fetu }) => {
    const { logo, job_title, company_name, remote_or_onsite, location, job_type, salary } = fetu
    return (
        <div className='bg-white rounded-lg shadow-md p-7 '>
            <img src={logo} alt="" />
            <h2 className='text-2xl  py-2 font-extrabold'>{job_title}</h2>
            <p className='text-gray-600 font-semibold  py-2'>{company_name}</p>
            <div className='flex gap-3 py-2'>
                <button className="btn btn-outline btn-primary">{remote_or_onsite}</button>
                <button className="btn btn-outline btn-primary">{job_type}</button>
            </div>
            <div className='flex gap-3  py-2'>
                <p>Location: {location}</p>
                <p>Salary: {salary}</p>
            </div>
            <button className="btn bg-blue-600 text-white">View Details</button>
            
        </div>
    );
};

export default Fetu;