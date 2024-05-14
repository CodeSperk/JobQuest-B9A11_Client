import { useContext } from "react";
import { Helmet } from "react-helmet-async";
import { AuthContext } from "../../../Provider/AuthProvider";
import useAxios from "../../../Hooks/useAxios";
import { useQuery } from "@tanstack/react-query";

const AppliedJobs = () => {
  const {user} = useContext(AuthContext);
  const axiosSecure = useAxios();
  const {isPending, data: appliedJobs} = useQuery({
    queryKey:["appliedJobs"],
    queryFn: async () => {
      const data = await axiosSecure.get(`/appliedJobs?email=${user?.email}`);
      return data.data;
    }
  })
    //to display loader while data is loading
    if (isPending) {
      return (
        <span className="loading loading-bars loading-lg text-[var(--clr-focused)]"></span>
      );
    }
  console.log(appliedJobs);

  return (
    <div>
      <Helmet>
        <title>JobQuest | Applied Jobs </title>
      </Helmet>
      This is applied jobs page
    </div>
  );
};

export default AppliedJobs;
