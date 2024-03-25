import { IoLocationOutline } from "react-icons/io5";
import { RiMoneyDollarCircleLine } from "react-icons/ri";
import { Link } from "react-router-dom";
const Job = ({ job }) => {
  const {
    id,
    logo,
    job_title,
    company_name,
    remote_or_onsite,
    job_type,
    salary,
    location,
  } = job;
  return (
    <div className="border-2 rounded-md p-7">
      <div className="flex ">
        <img
          className="justify-start bg-purple-100 p-2 rounded-xl"
          src={logo}
        />
      </div>
      <div className="mt-6">
        <h2 className="font-bold text-2xl text-[#474747] mb-2">{job_title}</h2>
        <p className="font-semibold text-xl text-[#757575] mb-6">
          {company_name}
        </p>
        <div className="flex gap-4 mb-6">
          <h3 className="border border-indigo-500 rounded-xl font-medium text-xl text-indigo-500 p-2">
            {remote_or_onsite}
          </h3>
          <h3 className="border border-indigo-500 rounded-xl font-medium text-xl text-indigo-500 p-2">
            {job_type}
          </h3>
        </div>
        <div className="flex gap-4 mb-6">
          <h3 className="flex items-center gap-2">
            <IoLocationOutline />
            {location}
          </h3>
          <h3 className="flex items-center gap-2">
            <RiMoneyDollarCircleLine />
            {salary}
          </h3>
        </div>
        <Link to={`/jobDetails/${id}`}>
          <button className="btn btn-primary">View Details</button>
        </Link>
      </div>
    </div>
  );
};

export default Job;
