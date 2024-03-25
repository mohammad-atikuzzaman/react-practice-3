import Jobs from "./Jobs";

export default function HomePage() {
  return (
    <div>
      {/* hero section */}
      <div className="hero mt-10">
        <div className="hero-content flex-col lg:flex-row-reverse justify-between">
          <div>
            <img src="https://i.postimg.cc/7hdBFhyR/user.png" className="" />
          </div>
          <div className="">
            <h1 className="text-7xl font-extrabold">
              One Step Closer To Your <br />
              <span className="text-[#7E90FE]">Dream Job</span>
            </h1>
            <p className="py-6 font-medium text-lg text-slate-500">
              Explore thousands of job opportunities with all the information
              you need. Its your future. Come find it. Manage all your job
              application from start to finish.
            </p>
            <button className=" bg-gradient-to-r from-[#7E90FE] to-[#9873FF] p-4 rounded-xl text-white font-medium">
              Get Started
            </button>
          </div>
        </div>
      </div>
      {/* job category list */}
      <div className="mt-32">
        <div className="text-center">
          <h2 className="font-bold text-5xl">Job category list</h2>
          <p className="px-4 font-medium text-slate-500 mt-4">
            Explore thousands of job opportunities with all the information you
            need. Its your future
          </p>
        </div>
        <div className="px-4 grid grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="card bg-purple-50">
            <div className="p-7 flex ">
              <img
                className="justify-start bg-purple-100 p-2 rounded-xl"
                src="https://i.postimg.cc/gjjhvH19/accounts.png"
                alt="chip"
              />
            </div>
            <div className="card-body">
              <h2 className="card-title">Account & Finance</h2>
              <p>300 Jobs Available</p>
            </div>
          </div>
          <div className="card bg-purple-50">
            <div className="p-7 flex ">
              <img
                className="justify-start bg-purple-100 p-2 rounded-xl"
                src="https://i.postimg.cc/sfH73bZ3/creative.png"
                alt="chip"
              />
            </div>
            <div className="card-body">
              <h2 className="card-title">Creative Design!</h2>
              <p>100+ Jobs Available</p>
            </div>
          </div>
          <div className="card bg-purple-50">
            <div className="p-7 flex ">
              <img
                className="justify-start bg-purple-100 p-2 rounded-xl"
                src="https://i.postimg.cc/2ShZF695/marketing.png"
                alt="marketing"
              />
            </div>
            <div className="card-body">
              <h2 className="card-title">Marketing & Sales</h2>
              <p>150 Jobs Available</p>
            </div>
          </div>
          <div className="card bg-purple-50">
            <div className="p-7 flex ">
              <img
                className="justify-start bg-purple-100 p-2 rounded-xl"
                src="https://i.postimg.cc/zGBQVsxp/chip.png"
                alt="chip"
              />
            </div>
            <div className="card-body">
              <h2 className="card-title">Engineering Job</h2>
              <p>224 Jobs Available</p>
            </div>
          </div>
        </div>
      </div>

      {/* featured jobs */}
      <div className="my-32">
        <div className="text-center">
          <h2 className="font-bold text-5xl">Featured Jobs</h2>
          <p className="px-4 font-medium text-slate-500 mt-4">
            Explore thousands of job opportunities with all the information you
            need. Its your future
          </p>
        </div>
      </div>
      <div>
        <h2>jfdkfjdklsfh</h2>
        <Jobs></Jobs>
      </div>
    </div>
  );
}
