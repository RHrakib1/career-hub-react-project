import React from 'react';
import { CiLocationOn } from "react-icons/ci";
import { MdAttachMoney } from "react-icons/md";

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
            <div className='flex gap-5  py-2'>
                <div className='flex items-center gap-2'>
                    <CiLocationOn className='text-2xl'></CiLocationOn>
                    <p>Location: {location}</p>
                </div>
                <div  className='flex items-center gap-2'>
                    <MdAttachMoney className='text-2xl'></MdAttachMoney>
                    <p>Salary: {salary}</p>
                </div>
            </div>
            <button className="btn bg-blue-600 text-white">View Details</button>

        </div>
    );
};

export default Fetu;