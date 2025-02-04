import React, { useState } from "react";
import { ContextVar } from "../Context/ContextApi";
import { Link } from "react-router-dom";

// images
import Logo from "../images/logooo.png";

//Icons
import { LuLayoutDashboard } from "react-icons/lu";
import { FaRegUser } from "react-icons/fa";
import { PiNotificationThin } from "react-icons/pi";
import { VscSignIn } from "react-icons/vsc";
import { VscSignOut } from "react-icons/vsc";
import { GiDistressSignal } from "react-icons/gi";



const Sidebar = () => {
  const { sidebarNav } = useState(ContextVar);

  return (
    <>
      <div className="h-[50rem]">
        <div className=" divide-y divide-slate-700">
          <Link to={"/ZubeaBook"}>
            <div>
            <img src={Logo} alt="Book Website" />
            </div>
          </Link>

          <ul>
            <Link to={""}>
              <li>
                <div className="p-4">
                  <span className="flex gap-4">
                    <LuLayoutDashboard className="mt-1.5" />
                    <h2 className="tracking-wider ">ZubeaBook Dashboard</h2>
                  </span>
                </div>
              </li>
            </Link>
            <Link to={"/ZubeaBook/profiledetails"}>
              <li>
                <div className="px-4 pb-4">
                  <span className="flex gap-4">
                    <FaRegUser className="mt-1" />
                    <h2 className="tracking-wider ">Profile</h2>
                  </span>
                </div>
              </li>
            </Link>
          </ul>

          <div className="p-4">side bar</div>
          <div>
            <span className="uppercase flex justify-center text-lg my-3 font-bold tracking-widest ">
              other
            </span>
            <ul>
              <Link to={"/ZubeaBook/notification"}>
                <li>
                  <div className="px-4">
                    <span className="flex gap-4">
                      <PiNotificationThin className="mt-1.5" />
                      <h2 className="tracking-wider ">Notification</h2>
                    </span>
                  </div>
                </li>
              </Link>
              <Link to={"/ZubeaBook/signin"}>
                <li>
                  <div className="px-4 py-4">
                    <span className="flex gap-4">
                      <VscSignIn className="mt-1.5" />
                      <h2 className="tracking-wider ">Sign in</h2>
                    </span>
                  </div>
                </li>
              </Link>
              <Link to={"/ZubeaBook/signup"}>
                <li>
                  <div className="px-4 pb-4">
                    <span className="flex gap-4">
                      <GiDistressSignal className="mt-1.5" />
                      <h2 className="tracking-wider ">Sign up</h2>
                    </span>
                  </div>
                </li>
              </Link>
            </ul>
          </div>
          <div className="flex justify-end ">
            <span className="block p-4 text-white">
              <VscSignOut className="text-[25px] text-[#ffffff6a] hover:text-[#ffffff9a]  cursor-pointer" />
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
