import { Outlet } from "react-router-dom";
import Navbar from "../components/Shared/Navbar/Navbar";
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";

const RootLayout = () => {
  const {darkTheme} = useContext(AuthContext);
  console.log(darkTheme);
  return (
    <div  className={darkTheme? "darken" : ""}>
        <Navbar></Navbar>
      <div className="max-w-[1440px] px-4 md:px-10 xl:px-14 mx-auto">
        <Outlet></Outlet>
      </div>

    </div>
  );
};

export default RootLayout;