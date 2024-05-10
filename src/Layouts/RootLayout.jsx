import { Outlet } from "react-router-dom";
import Navbar from "../components/Shared/Navbar/Navbar";

const RootLayout = () => {
  return (
    <div>
        <Navbar></Navbar>
      <div className="max-w-[1440px] px-4 md:px-10 xl:px-14 mx-auto">
        <Outlet></Outlet>
      </div>

    </div>
  );
};

export default RootLayout;