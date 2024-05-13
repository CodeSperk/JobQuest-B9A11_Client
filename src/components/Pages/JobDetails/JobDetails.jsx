import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";

const JobDetails = () => {
  const [job, setJob] = useState({});
  const {id} = useParams();
  useEffect(() => {
    fetch(`http://localhost:5000/job/${id}`)
    .then(res => res.json())
    .then(data => console.log(data))
  },[id])
  



  return (
    <div>
      Job Details Page
    </div>
  );
};

export default JobDetails;