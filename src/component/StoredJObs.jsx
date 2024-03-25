import { Link } from "react-router-dom";

const StoredJObs = ({ storedJob }) => {
  const {
    id,
    logo,
    job_title,
    company_name,
    remote_or_onsite,
    job_type,
    contact_information,
    salary,
  } = storedJob;
  return (
    <div className="flex flex-col lg:flex-row items-center justify-between border m-4 p-4 rounded-xl">
      <div className="flex flex-col lg:flex-row items-center gap-4">
        <div className="w-full h-20 bg-purple-50 flex items-center justify-center lg:w-36 lg:h-36">
          <img className="w-20" src={logo} alt="Image" />
        </div>
        <div className="">
          <h2 className="font-bold text-lg text-zinc-600">{job_title}</h2>
          <p className="font-medium text-lg text-zinc-500">{company_name}</p>
          <div className="flex gap-2">
            <h3 className=" border-2 border-indigo-500 rounded-lg p-1 font-bold text-indigo-500">
              {remote_or_onsite}
            </h3>
            <h3 className=" border-2 border-indigo-500 rounded-lg p-1 font-bold text-indigo-500">
              {job_type}
            </h3>
          </div>
          <div className="flex gap-4 font-medium text-zinc-500">
            <h3>{contact_information.address}</h3>
            <h3>{salary}</h3>
          </div>
        </div>
      </div>
      <div className="right">
        <Link to={`/jobDetails/${id}`}>
          <button className="bg-gradient-to-r from-indigo-500 to-purple-500 p-4 font-bold text-white rounded-xl">
            View Details
          </button>
        </Link>
      </div>
    </div>
  );
};

export default StoredJObs;
