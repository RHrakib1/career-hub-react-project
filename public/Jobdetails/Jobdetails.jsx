import { useLoaderData, useParams } from 'react-router-dom';
import { CiLocationOn } from "react-icons/ci";
import { CiPhone } from "react-icons/ci";
import { MdOutlineEmail } from "react-icons/md";
import { BsCurrencyDollar } from "react-icons/bs";
import { AiOutlineProfile } from "react-icons/ai";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { savejobapplication } from '../../src/Component/Utiliti/LocalStorage';

const Jobdetails = () => {

    const jobs = useLoaderData()
    const { userid } = useParams()
    const numberid = parseInt(userid)
    const job = jobs.find(job => job.id === numberid)
    console.log(job);
    const toasted = () => {
        savejobapplication(numberid)
        toast('You have applied successfully')
    }
    return (
        <div className='mb-10'>
            <h1 className='text-center font-extrabold text-4xl mt-5 '>Job Details</h1>
            <div className='lg:grid grid-cols-2 gap-4 mt-10'>
                <div className=''>
                    <h1><span className='font-extrabold'>Job Description:</span> {job.job_description}</h1>
                    <h1><span className='font-extrabold'>Job Responsibility:</span> {job.job_responsibility}</h1>
                    <span className='font-extrabold'>Educational Requirements:</span>
                    <h1> {job.educational_requirements}</h1>
                    <h1 className='font-extrabold'>Experiences:</h1>
                    <p>{job.experiences}</p>
                </div>
                <div>
                    <div className='bg-blue-50 p-10'>
                        <h2 className='font-extrabold '>Job Details</h2> <hr className='mt-3 mb-3'></hr>
                        <div className='flex gap-2 items-center'>
                            <BsCurrencyDollar></BsCurrencyDollar>
                            <p><span className='font-semibold'>salary: </span>{job.salary}</p>
                        </div>
                        <div className='flex gap-2 items-center'>
                            <AiOutlineProfile ></AiOutlineProfile>
                            <p><span className='font-semibold'>Job Title: </span>{job.job_title}</p>
                        </div>
                        <h2 className='font-extrabold '>Contact Information</h2> <hr className='mt-3 mb-3'></hr>
                        <div className='flex gap-2 items-center'>
                            <CiPhone></CiPhone>
                            <p><span className='font-semibold'>Phone: </span>{job.phone}</p>
                        </div>
                        <div className='flex gap-2 items-center'>
                            <MdOutlineEmail></MdOutlineEmail>
                            <p><span className='font-semibold'>Email: </span>{job.email}</p>
                        </div>
                        <div className='flex gap-2 items-center'>
                            <CiLocationOn></CiLocationOn>
                            <p><span className='font-semibold'>Address: </span>{job.address}</p>
                        </div>
                    </div>
                    <div>
                        <button onClick={toasted} className="btn bg-blue-600 text-white mt-3">Apply Now</button>
                        <ToastContainer></ToastContainer>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Jobdetails;