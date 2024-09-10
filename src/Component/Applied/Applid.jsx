import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getstorJobApplication } from "../Utiliti/LocalStorage";
import Apply from "./Apply";

const Applid = () => {

    const job = useLoaderData()


    const [allpy, setallpy] = useState([])
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
        }
    }, [job, setallpy])
    return (
        <div>
            <h2 className="text-3xl font-semibold text-center">Applied Job: {allpy.length}</h2>
            <div className="lg:grid grid-cols-1 gap-3 mb-10">
                {
                    allpy.map((copyapply, idx) => <Apply key={idx} apply={copyapply}></Apply>)
                }
            </div>

        </div>
    );
};

export default Applid;