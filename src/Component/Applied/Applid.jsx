import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getstorJobApplication } from "../Utiliti/LocalStorage";
import Apply from "./Apply";

const Applid = () => {

    const job = useLoaderData()


    const [allpy, setallpy] = useState([])
    const [displayjob, setdisplayjob] = useState([])
    const hendlejobFelter = filter => {
        if (filter === "All") {
            setdisplayjob(allpy)
        }
        else if (filter === "Remote") {
            const filteris = allpy.filter(job => job.remote_or_onsite === "Remote")
            setdisplayjob(filteris)
        }
        else if (filter === "Onsite") {
            const onsitejob = allpy.filter(job => job.remote_or_onsite === "Onsite")
            setdisplayjob(onsitejob)

        }
    }
    useEffect(() => {
        const storgjobid = getstorJobApplication()
        if (job.length > 0) {
            // const jobapplid = job.filter(job => storgjobid.includes(job.id))
            const jobApplid = []
            for (const id of storgjobid) {
                const job1 = job.find(jobs => jobs.id === id)
                if (job1) {
                    jobApplid.push(job1)
                }
            }
            setallpy(jobApplid)
            setdisplayjob(jobApplid)
        }
    }, [job, setallpy])
    return (
        <div>
            <h2 className="text-3xl font-semibold text-center">Applied Job: {allpy.length}</h2>
            <details className="dropdown">
                <summary className="btn m-1">Filter on jobs</summary>
                <ul className="menu dropdown-content bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
                    <li onClick={() => hendlejobFelter('All')}><a>All</a></li>
                    <li onClick={() => hendlejobFelter('Remote')}><a>Remote</a></li>
                    <li onClick={() => hendlejobFelter('Onsite')}><a>Onside</a></li>
                </ul>
            </details>
            <div className="lg:grid grid-cols-1 gap-3 mb-10">
                {
                    displayjob.map((copyapply, idx) => <Apply key={idx} apply={copyapply}></Apply>)
                }
            </div>

        </div>
    );
};

export default Applid;