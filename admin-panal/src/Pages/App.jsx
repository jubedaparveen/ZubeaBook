import { useState } from "react";
// import reactLogo from '../assets/react.svg'
// import viteLogo from '/vite.svg'
import { FaEye, FaEyeSlash } from "react-icons/fa";
import "../App.css";
import { Link } from "react-router-dom";

function App() {
  const [show, setShow] = useState(false);

  return (
    <>
      <div className="bg-slate-800 w-svw h-svh flex justify-center items-center">
        <div className="bg-slate-200  p-8 w-[50rem]  rounded-md">
          <div className="border border-slate-400 p-8 rounded-2xl shadow-xl  shadow-slate-400 ">
            <h2 className="text-2xl uppercase tracking-widest font-semibold">
              Login
            </h2>
            <h3 className="text-xl mt-9 font-semibold tracking-wider">
              Sign-in to Dashboard
            </h3>
            <form method="">
              <div className="w-full mt-5 grid grid-cols-[20%_auto] ">
                <label
                  htmlFor="name"
                  className="w-full py-[8px] px-[10px] text-xl text-[#303640]"
                >
                  Email
                </label>
                <input
                  name="email"
                  id="name"
                  type="text"
                  placeholder="Enter your email"
                  className="w-full p-2  rounded-[5px]"
                />
              </div>
              <div className="w-full  grid grid-cols-[20%_auto] mt-5 relative">
                <label
                  htmlFor="password"
                  className="w-full text-xl  py-[8px] px-[10px] text-[#303640]"
                >
                  Password
                </label>
                <input
                  type={show === false ? "password" : "text"}
                  name="password"
                  placeholder="Enter your Password"
                  className="w-full border rounded-[5px] p-2 "
                />
                <span
                  className="absolute right-[20px] bottom-[10px] cursor-pointer text-[#303640]"
                  onClick={() => setShow(!show)}
                >
                  {show === false ? <FaEye /> : <FaEyeSlash />}
                </span>
              </div>
              <div className="w-full grid grid-cols-2 mt-16 ">
                <div>
                  <Link to="/ZubeaBook">
                    <button
                      type="submit"
                      className="bg-slate-600 text-white 
                    px-6 py-1 rounded-md text-xl font-bold uppercas tracking-[.1rem] uppercase "
                    >
                      Login
                    </button>
                  </Link>
                </div>

                <div className="mt-2 text-end">
                  <Link to="/reset-password">
                    <span className="text-slate-500 uppercase text-sm tracking-widest ">
                      Forgot password?
                    </span>
                  </Link>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
