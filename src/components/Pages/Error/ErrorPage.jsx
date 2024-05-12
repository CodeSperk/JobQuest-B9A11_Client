import { Link } from "react-router-dom";
import Button1 from "../../Shared/Buttons/Button1";

const ErrorPage = () => {
  return (
    <div className="w-full h-screen flex justify-center items-center">
      
      <Link to="/">
      <Button1 name="Back To Home"></Button1>
      </Link>
    </div>
  );
};

export default ErrorPage;