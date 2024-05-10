import { IoMdMenu } from "react-icons/io";
import { Link, NavLink } from "react-router-dom";
import Button1 from "../Buttons/Button1";

const Navbar = () => {
  const navLinks = <>
            <li>
              <NavLink>Home</NavLink>
            </li>
  </>
  return (
    <div className="py-2 flex items-center">
    <nav className="border-b navbar max-w-[1440px] px-4 md:px-10 xl:px-14 mx-auto">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="text-2xl lg:hidden">
          <IoMdMenu />
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
           {navLinks}
          </ul>
        </div>
        <h1 className="hidden lg:flex">JobExplorer</h1>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          {navLinks}
        </ul>
      </div>
      <div className="navbar-end">
        <Link to="/login">
        <Button1 name="Login"></Button1>
        </Link>
      </div>
    </nav>
    </div>
  );
};

export default Navbar;
