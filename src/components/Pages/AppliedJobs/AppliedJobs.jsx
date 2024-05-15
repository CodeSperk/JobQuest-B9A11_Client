import { useContext, useState } from "react";
import { Helmet } from "react-helmet-async";
import { AuthContext } from "../../../Provider/AuthProvider";
import useAxios from "../../../Hooks/useAxios";
import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";
import { useRef } from 'react';

const AppliedJobs = () => {
  const { user } = useContext(AuthContext);
  const targetRef = useRef();
  const axiosSecure = useAxios();
  const [jobs, setJobs] = useState([]);

  const { isPending, data: appliedJobs } = useQuery({
    queryKey: ["appliedJobs"],
    queryFn: async () => {
      const data = await axiosSecure.get(`/appliedJobs?email=${user?.email}`);
      setJobs(data.data);
      return data.data;
    },
  });  


  //to display loader while data is loading
  if (isPending) {
    return (
      <span className="loading loading-bars loading-lg text-[var(--clr-focused)]"></span>
    );
  }

  const handleAppliedJobs = (event) => {
    const searchedCategory = event.target.value;
    if(searchedCategory === "all"){
      setJobs(appliedJobs);
      return;
    }
    const filteredJobs = appliedJobs.filter(job => job.jobCategory.toLowerCase().includes(searchedCategory.toLocaleLowerCase()));
      setJobs(filteredJobs);
  }



  return (
    <div>
      <Helmet>
        <title>JobQuest | Applied Jobs </title>
      </Helmet>

      {/* Applied page banner */}
      <div className="card-style px-4 md:px-10 lg:pl-20 rounded-xl py-16 flex justify-center items-center">
        <div className="text-center">
          <h1 className="mb-4">
             <span className="text-[var(--clr-focused)]">Your Applied Jobs</span>
            <br />  Explore Your Professional Journey
          </h1>

          <div className="relative flex items-center justify-center ">
          <select value={""} onChange={handleAppliedJobs} className="px-8 py-2 rounded-lg outline-none">
        <option value="">Select Category</option>
        <option value="all">All Categories</option>
        <option value="Remote">Remote</option>
        <option value="Part-time">Part-time</option>
        <option value="On Site">On Site</option>
        <option value="Hybrid">Hybrid</option>
        {/* Add more options based on your job categories */}
      </select>
          </div>
        </div>
      </div>

      <button onClick={() => generatePDF(targetRef, {filename: 'page.pdf'})} className="px-3 py-2 rounded text-white bg-red-500">Download PDF</button>

      <div ref={targetRef} className="min-w-5xl bg-red-100 h-80">
        Hello there
      </div>

       {/* Tabular Form */}
       <div className="p-2 mx-auto sm:p-4 mt-8 min-h-96">
        <div className="overflow-x-auto">
          <table className="min-w-full">
            <thead className="">
              <tr className="text-left">
                <th className="p-3">Job Banner</th>
                <th className="p-3">Job Title</th>
                <th className="p-3">Job Category</th>
                <th className="p-3">Salary Range</th>
                <th className="p-3">View Details</th>
              </tr>
            </thead>

            <tbody>
                {jobs.map(job => <tr key={job?._id} className="border-b border-opacity-20">
                  <td className="p-3">
                    <img src={job?.pictureURL} alt="" className="h-16 w-auto"/>
                </td>
                  <td className="p-3">
                  <p>{job?.jobTitle}</p>
                </td>
                  <td className="p-3">
                  <p>{job?.jobCategory}</p>
                </td>
                  <td className="p-3">
                  <p>{job?.salaryRange}</p>
                </td>
                <td className="p-3">
                  <Link to={`/job/${job?._id}`}>
                  <button className="px-3 py-1 font-semibold rounded-md bg-[var(--clr-focused)] text-[var(--clr-light)]">
                    Details
                  </button>                  
                  </Link>
                </td>
                </tr>)}
            </tbody>
          </table>
        </div>
      </div>

      

    </div>
  );
};

export default AppliedJobs;
