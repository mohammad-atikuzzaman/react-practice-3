import { useEffect, useState } from "react";
import Job from "./Job";

const Jobs = () => {
  const [jobs, setJobs] = useState([]);
  const [dataLength, setDataLength] = useState(4);
  const handleShowAll = () => {
    setDataLength(jobs.length);
  };
  useEffect(() => {
    fetch("../../public/jobs.json")
      .then((res) => res.json())
      .then((data) => setJobs(data));
  }, []);
  return (
    <div>
      <div className="grid mx-4 grid-cols-1 lg:grid-cols-2 gap-6">
        {jobs.slice(0, dataLength).map((job) => (
          <Job key={job.id} job={job}></Job>
        ))}
      </div>
      <div
        className={`${
          dataLength === jobs.length && "hidden"
        } flex justify-center items-center my-4`}>
        <button onClick={handleShowAll} className="btn btn-primary">
          See All Jobs
        </button>
      </div>
    </div>
  );
};

export default Jobs;
