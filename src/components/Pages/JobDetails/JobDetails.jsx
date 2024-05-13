import { useParams } from "react-router-dom";
import useAxios from "../../../Hooks/useAxios";
import { useQuery } from "@tanstack/react-query";
import Button1 from "../../Shared/Buttons/Button1";
import { FaRegHandPointRight } from "react-icons/fa";

const JobDetails = () => {
  // const [job, setJob] = useState({});
  const { id } = useParams();
  const axiosSecure = useAxios();

  const { isPending, data: job } = useQuery({
    queryKey: ["job"],
    queryFn: async () => {
      const data = await axiosSecure.get(`/job/${id}`);
      return data.data;
    },
  });
  if (isPending) {
    return (
      <span className="loading loading-bars loading-lg text-[var(--clr-focused)]"></span>
    );
  }

  const { pictureURL, jobTitle, jobDescription, salaryRange, jobApplicants } =
    job;

  return (
    <div>
      {/* Job Banner */}
      <div
        className="text-white bg-[#7c7083] bg-center bg-cover bg-blend-multiply px-4 py-24 md:py-36 text-center rounded-xl"
        style={{ backgroundImage: `url(${pictureURL})` }}
      >
        <h1>{jobTitle}</h1>
      </div>

      <main>
        {/* job Details Section */}
        <section className="grid grid-cols-1 lg:grid-cols-3 gap-8">

          {/* Left div */}
          <div className="lg:col-span-2 space-y-6">
            <div
              key={job._id}
              className="flex hover:shadow-lg flex-col md:flex-row gap-6 p-6 md:p-8 border rounded-md"
            >
              <div className="w-20 h-20 p-4 border rounded-lg bg-[var(--clr-light-primary)]">
                <img src={job?.companyLogo} alt="" />
              </div>
              <div className="flex-1 space-y-4">
                <h4>{job?.jobTitle}</h4>
                <small>Posted by : {job.userName}</small>
                <div className="flex gap-6 justify-between">
                  <p className="text-[var(--clr-focused)] text-lg font-bold">
                    {salaryRange}
                  </p>
                  <p>
                    <span className="font-bold">Job Posted</span> :{" "}
                    {job?.jobPostingDate}
                  </p>
                  <p>
                    <span className="font-bold"> Deadline</span> :{" "}
                    {job?.applicationDeadline}
                  </p>
                </div>
              </div>
              <div></div>
            </div>
            {/* job Description */}
              <div className="space-y-4">
                <h4>Job Description</h4>
                <p>{jobDescription}</p>
              </div>
            {/* job Requirements */}
              {
                job.requirements && <div className="space-y-4">
                <h4>Job requirements</h4>
                <div>
                  {job?.requirements.map((requirement, idx) => <div 
                      key={idx}
                      className="flex items-center gap-2 ml-4 space-y-2">
                      <FaRegHandPointRight />
                      <p>{requirement}</p>
                  </div>
                  )}
                </div>
              </div>
              }
          </div>

          {/* aside */}
          <aside>
            <div className="space-y-4 border p-4 md:p-8 rounded-md">
              <h5>Job Overview</h5>
              <p className="flex justify-between">Posted Date: <span>{job.jobPostingDate}</span></p>
              <p className="flex justify-between">Application Deadline: <span>{job.applicationDeadline}</span></p> 
              <p className="flex justify-between">Total Applied: <span>{jobApplicants}</span></p>
              <p className="flex justify-between">Job Nature: <span>{job.jobCategory}</span></p> 
              <Button1 name="Apply Now"></Button1>
            </div>

          </aside>
        </section>
      </main>
    </div>
  );
};

export default JobDetails;
