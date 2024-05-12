import useAxios from "../../../Hooks/useAxios";
import { useQuery } from "@tanstack/react-query";
import HomeBanner from "./Banner/HomeBanner";
import JobCategory from "./JobCategory/JobCategory";

const Home = () => {
  const axiosSecure = useAxios();

  const {isPending, data: jobs} = useQuery({
    queryKey: ['jobs'],
    queryFn: async () => {
      const data = await axiosSecure.get("/jobs");
      return data.data;
    }
  });
  if(isPending){
    return <span className="loading loading-bars loading-lg text-[var(--clr-focused)]"></span>
  }


  return (
    <div>
      {/* Banner Page */}
      <HomeBanner></HomeBanner>

      <main className="space-y-6">
        {/* Job Category Section */}
        <JobCategory jobs={jobs} id="jobs"></JobCategory>
    
      </main>
    </div>
  );
};

export default Home;
