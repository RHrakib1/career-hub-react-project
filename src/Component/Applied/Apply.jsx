import React from 'react';
import { CiLocationOn } from "react-icons/ci";
import { MdAttachMoney } from "react-icons/md";

const Apply = ({ apply }) => {
    const { logo, job_title, company_name, salary, location, job_type, remote_or_onsite } = apply
    return (
        <div className=''>
            <div className='bg-gray-50  flex justify-between rounded-xl  shadow-xl p-10 items-center'>
                <div className='flex gap-4'>
                    <div className='bg-gray-200 flex items-center justify-center p-5 rounded-xl'>
                        <img src={logo} alt="" />
                    </div>
                    <div>
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
                            <div className='flex items-center gap-2'>
                                <MdAttachMoney className='text-2xl'></MdAttachMoney>
                                <p>Salary: {salary}</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <button className="btn bg-blue-600 text-white">View Details</button>
                </div>
            </div>
        </div>
    );
};

export default Apply;