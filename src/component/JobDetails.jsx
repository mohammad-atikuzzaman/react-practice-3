import { RiMoneyDollarCircleLine } from "react-icons/ri";
import { LuSubtitles } from "react-icons/lu";
import { FiPhone } from "react-icons/fi";
import { HiOutlineMail } from "react-icons/hi";
import { GoLocation } from "react-icons/go";
import { useLoaderData, useParams } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { saveJobApplication } from "./storedJobs";

const JobDetails = () => {
  const myJobDetails = useLoaderData();
  const { id } = useParams();
  const myJob = myJobDetails.find((job) => job.id === parseInt(id));
  const {
    job_title,
    job_description,
    salary,
    educational_requirements,
    job_responsibility,
    experiences,
    contact_information,
  } = myJob;

  const handleAppliedJob = () => {
    saveJobApplication(parseInt(id));
    toast.success("Wow so easy !", { theme: "colored" });
  };

  return (
    <div>
      <ToastContainer />
      <div className="w-full h-32 bg-purple-50 flex justify-center items-center">
        <h2 className="font-bold text-2xl ">Job Details</h2>
      </div>
      <div className="flex flex-col lg:flex-row justify-between my-6">
        <div className="p-4 lg:max-w-[60%]">
          <p className="mt-4">
            <span className="font-bold "> Job Description:</span>
            {job_description}
          </p>
          <p className="mt-4">
            <span className="font-bold">Job Responsibility:</span>
            {job_responsibility}
          </p>
          <h3 className="font-bold mt-4">Educational Requirements:</h3>
          <p className="mt-4">{educational_requirements}</p>
          <h3 className="font-bold mt-4">Experiences:</h3>
          <p className="mt-4">{experiences}</p>
        </div>
        <div className="p-4 lg:p-0">
          <div className="bg-purple-50 p-6 rounded-xl">
            <h2 className="font-bold mb-4">Job Details</h2>
            <hr />
            <p className="mt-4 flex items-center gap-2">
              <RiMoneyDollarCircleLine className="text-purple-500" />
              <span className="font-bold">Salary :</span> {salary} (Per Month)
            </p>
            <p className="mt-4 flex items-center gap-2">
              <LuSubtitles className="text-purple-500" />
              <span className="font-bold">Job Title :</span>
              {job_title}
            </p>
            <h3 className="font-bold my-4">Contact Information</h3>
            <hr />
            <p className="mt-4 flex items-center gap-2">
              <FiPhone className="text-purple-500" />
              <span className="font-bold">Phone :</span>
              {contact_information.phone}
            </p>
            <p className="mt-4 flex items-center gap-2">
              <HiOutlineMail className="text-purple-500" />
              <span className="font-bold">Email :</span>
              {contact_information.email}
            </p>
            <p className="mt-4 flex items-center gap-2">
              <GoLocation className="text-purple-500" />
              <span className="font-bold"></span>
              {contact_information.address}
            </p>
          </div>
          <button
            onClick={handleAppliedJob}
            className="btn btn-primary mt-6 w-full">
            Apply now
          </button>
        </div>
      </div>
    </div>
  );
};

export default JobDetails;
