import { useLoaderData } from "react-router-dom";
import { getStoredJob } from "./storedJobs";
import { useEffect, useState } from "react";
import StoredJObs from "./StoredJObs";

const AppliedJobs = () => {
  const allJobs = useLoaderData();
  const [myallStoredJobs, setStoredJobs] = useState([]);
  const [myStoredJobs, setFilteredStoredJobs] = useState([]);
  useEffect(() => {
    const storedJobs = getStoredJob();
    const jobsApplied = allJobs.filter((job) => storedJobs.includes(job.id));
    setStoredJobs(jobsApplied);
    setFilteredStoredJobs(jobsApplied)
  }, []);

  
  const filterJobType = (jobType) => {
    if (jobType === "all") {
      setFilteredStoredJobs(myallStoredJobs);
    } else if (jobType === "remote") {
      const myJob = myallStoredJobs.filter(
        (job) => job.remote_or_onsite === "Remote"
      );
      setFilteredStoredJobs(myJob);
    } else if (jobType === "onsite") {
      const myJob = myallStoredJobs.filter((job) => job.remote_or_onsite === "Onsite");
      setFilteredStoredJobs(myJob);
    }
  };

  return (
    <div>
      <h2 className="font-bold text-3xl bg-purple-50 w-full h-32 rounded-xl flex items-center justify-center">
        Applied Jobs
      </h2>
      <div className="flex justify-end my-6">
        <details className="dropdown">
          <summary className="m-1 btn">Filter Your Jobs</summary>
          <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
            <li>
              <button onClick={() => filterJobType("all")}>all</button>
            </li>
            <li>
              <button onClick={() => filterJobType("remote")}>remote</button>
            </li>
            <li>
              <button onClick={() => filterJobType("onsite")}>onsite</button>
            </li>
          </ul>
        </details>
      </div>
      <div>
        {myStoredJobs.map((storedJob) => (
          <StoredJObs key={storedJob.id} storedJob={storedJob}></StoredJObs>
        ))}
      </div>
    </div>
  );
};

export default AppliedJobs;
