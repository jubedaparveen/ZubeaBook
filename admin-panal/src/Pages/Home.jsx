import React from "react";
//images
import zub from '../images/zub.jpeg'
//icons
import { CiEdit } from "react-icons/ci";
import { RiDeleteBin5Line } from "react-icons/ri";
import { FaArrowCircleLeft } from "react-icons/fa";
import { FaArrowCircleRight } from "react-icons/fa";




const Home = () => {
  return (
    <div className=" mt-[7.3rem] mb-9">
      <div className="grid grid-cols-5 gap-5 mb-5"> 
        <div className="bg-slate-600 hover:bg-slate-400 hover:text-slate-800 font-bold tracking-widest p-4 text-white text-xl text-center">
          <h2 className=" text-2xl mb-2">Total Client</h2>
          <span>6302</span>
        </div>
        <div className="bg-slate-600 hover:bg-slate-400 hover:text-slate-800 font-bold tracking-widest p-4 text-white text-xl text-center">
          <h2 className=" text-2xl mb-2">Total Books List</h2>
          <span>5620</span>
        </div>
        <div className="bg-slate-600 hover:bg-slate-400 hover:text-slate-800 font-bold tracking-widest p-4 text-white text-xl text-center">
          <h2 className=" text-2xl mb-2">Total Category</h2>
          <span>5620</span>
        </div>
        <div className="bg-slate-600 hover:bg-slate-400 hover:text-slate-800 font-bold tracking-widest p-4 text-white text-xl text-center">
          <h2 className=" text-2xl mb-2">Total SubCategory</h2>
          <span>5620</span>
        </div>
        <div className="bg-slate-600 hover:bg-slate-400 hover:text-slate-800 font-bold tracking-widest p-4 text-white text-xl text-center">
          <h2 className=" text-2xl mb-2">Total New Users</h2>
          <span>5620</span>
        </div>
        <div className="bg-slate-600 hover:bg-slate-400 hover:text-slate-800 font-bold tracking-widest p-4 text-white text-xl text-center">
          <h2 className=" text-2xl mb-2">Every Day Visitors</h2>
          <span>5620</span>
        </div>
        <div className="bg-slate-600 hover:bg-slate-400 hover:text-slate-800 font-bold tracking-widest p-4 text-white text-xl text-center">
          <h2 className=" text-2xl mb-2">Total Sold Books</h2>
          <span>5620</span>
        </div>
        <div className="bg-slate-600 hover:bg-slate-400 hover:text-slate-800 font-bold tracking-widest p-4 text-white text-xl text-center">
          <h2 className=" text-2xl mb-2">Total Order</h2>
          <span>5620</span>
        </div>
        <div className="bg-slate-600 hover:bg-slate-400 hover:text-slate-800 font-bold tracking-widest p-4 text-white text-xl text-center">
          <h2 className=" text-2xl mb-2">Total Author</h2>
          <span>5620</span>
        </div>
        <div className="bg-slate-600 hover:bg-slate-400 hover:text-slate-800 font-bold tracking-widest p-4 text-white text-xl text-center">
          <h2 className=" text-2xl mb-2">Total Publisher</h2>
          <span>5620</span>
        </div>
      </div>
      <div className="pb-5 h-[30rem] overflow-scroll ">
        <div className=" w-full text-white ">
          <table className="table-auto w-full">
            <thead className="bg-slate-700 text-base uppercase">
              <tr>
                <th className="p-4">S.No</th>
                <th className="p-4">Client Images</th>
                <th className="py-4 text-start">Client Details</th>
                <th className="py-4 text-start">Books List</th>
                <th className="p-4">Amount</th>
                <th className="p-4">Buying Date</th>
                <th className="p-4">Expiring Date</th>
                <th className="p-4">Active</th>
                <th className="p-4"> Status</th>
              </tr>
            </thead>
            <tbody className="bg-slate-500 ">
              <tr className="hover:bg-slate-400 hover:text-slate-800 border-b">
                <td className="p-2 text-center">1</td>
                <td className="p-2 flex justify-center ">
                  <div className=" w-16 h-16 rounded-full my-3">
                    <img src={zub} alt="" className=" w-16 h-16 rounded-full "/>
                  </div>
                </td>
                <td className="p-2">
                  <p>Jubeda Parveen</p>
                  <span>40 Diamon Colony Dhar Naka Mhow</span>
                </td>
                <td className="p-2">
                  <p> Book Name</p>
                  <p> Book Name</p>
                  <p> Book Name</p>
                  <p> Book Name</p>
                </td>
                <td className="p-2 text-center">Rs 1500</td>
                <td className="p-2 text-center">11/01/2025</td>
                <td className="p-2 text-center"> 31/12/2025</td>
                <td className="p-2 text-center"> 
                  <CiEdit size={25} className="inline mx-2"/> | <RiDeleteBin5Line size={25} className="inline mx-2  "/> 
                </td>
                <td className="p-2 text-center"> Payment Success</td>
              </tr>
              <tr className="hover:bg-slate-400 hover:text-slate-800 border-b">
                <td className="p-2 text-center">1</td>
                <td className="p-2 flex justify-center ">
                  <div className=" w-16 h-16 rounded-full my-3">
                    <img src={zub} alt="" className=" w-16 h-16 rounded-full "/>
                  </div>
                </td>
                <td className="p-2">
                  <p>Jubeda Parveen</p>
                  <span>40 Diamon Colony Dhar Naka Mhow</span>
                </td>
                <td className="p-2">
                  <p> Book Name</p>
                  <p> Book Name</p>
                  <p> Book Name</p>
                  <p> Book Name</p>
                </td>
                <td className="p-2 text-center">Rs 1500</td>
                <td className="p-2 text-center">11/01/2025</td>
                <td className="p-2 text-center"> 31/12/2025</td>
                <td className="p-2 text-center"> 
                  <CiEdit size={25} className="inline mx-2"/> | <RiDeleteBin5Line size={25} className="inline mx-2  "/> 
                </td>
                <td className="p-2 text-center"> Payment Success</td>
              </tr>
              <tr className="hover:bg-slate-400 hover:text-slate-800 border-b">
                <td className="p-2 text-center">1</td>
                <td className="p-2 flex justify-center ">
                  <div className=" w-16 h-16 rounded-full my-3">
                    <img src={zub} alt="" className=" w-16 h-16 rounded-full "/>
                  </div>
                </td>
                <td className="p-2">
                  <p>Jubeda Parveen</p>
                  <span>40 Diamon Colony Dhar Naka Mhow</span>
                </td>
                <td className="p-2">
                  <p> Book Name</p>
                  <p> Book Name</p>
                  <p> Book Name</p>
                  <p> Book Name</p>
                </td>
                <td className="p-2 text-center">Rs 1500</td>
                <td className="p-2 text-center">11/01/2025</td>
                <td className="p-2 text-center"> 31/12/2025</td>
                <td className="p-2 text-center"> 
                  <CiEdit size={25} className="inline mx-2"/> | <RiDeleteBin5Line size={25} className="inline mx-2  "/> 
                </td>
                <td className="p-2 text-center"> Payment Success</td>
              </tr>
              <tr className="hover:bg-slate-400 hover:text-slate-800 border-b">
                <td className="p-2 text-center">1</td>
                <td className="p-2 flex justify-center ">
                  <div className=" w-16 h-16 rounded-full my-3">
                    <img src={zub} alt="" className=" w-16 h-16 rounded-full "/>
                  </div>
                </td>
                <td className="p-2">
                  <p>Jubeda Parveen</p>
                  <span>40 Diamon Colony Dhar Naka Mhow</span>
                </td>
                <td className="p-2">
                  <p> Book Name</p>
                  <p> Book Name</p>
                  <p> Book Name</p>
                  <p> Book Name</p>
                </td>
                <td className="p-2 text-center">Rs 1500</td>
                <td className="p-2 text-center">11/01/2025</td>
                <td className="p-2 text-center"> 31/12/2025</td>
                <td className="p-2 text-center"> 
                  <CiEdit size={25} className="inline mx-2"/> | <RiDeleteBin5Line size={25} className="inline mx-2  "/> 
                </td>
                <td className="p-2 text-center"> Payment Success</td>
              </tr>
              <tr className="hover:bg-slate-400 hover:text-slate-800 border-b">
                <td className="p-2 text-center">1</td>
                <td className="p-2 flex justify-center ">
                  <div className=" w-16 h-16 rounded-full my-3">
                    <img src={zub} alt="" className=" w-16 h-16 rounded-full "/>
                  </div>
                </td>
                <td className="p-2">
                  <p>Jubeda Parveen</p>
                  <span>40 Diamon Colony Dhar Naka Mhow</span>
                </td>
                <td className="p-2">
                  <p> Book Name</p>
                  <p> Book Name</p>
                  <p> Book Name</p>
                  <p> Book Name</p>
                </td>
                <td className="p-2 text-center">Rs 1500</td>
                <td className="p-2 text-center">11/01/2025</td>
                <td className="p-2 text-center"> 31/12/2025</td>
                <td className="p-2 text-center"> 
                  <CiEdit size={25} className="inline mx-2"/> | <RiDeleteBin5Line size={25} className="inline mx-2  "/> 
                </td>
                <td className="p-2 text-center"> Payment Success</td>
              </tr>
              <tr className="hover:bg-slate-400 hover:text-slate-800 border-b">
                <td className="p-2 text-center">1</td>
                <td className="p-2 flex justify-center ">
                  <div className=" w-16 h-16 rounded-full my-3">
                    <img src={zub} alt="" className=" w-16 h-16 rounded-full "/>
                  </div>
                </td>
                <td className="p-2">
                  <p>Jubeda Parveen</p>
                  <span>40 Diamon Colony Dhar Naka Mhow</span>
                </td>
                <td className="p-2">
                  <p> Book Name</p>
                  <p> Book Name</p>
                  <p> Book Name</p>
                  <p> Book Name</p>
                </td>
                <td className="p-2 text-center">Rs 1500</td>
                <td className="p-2 text-center">11/01/2025</td>
                <td className="p-2 text-center"> 31/12/2025</td>
                <td className="p-2 text-center"> 
                  <CiEdit size={25} className="inline mx-2"/> | <RiDeleteBin5Line size={25} className="inline mx-2  "/> 
                </td>
                <td className="p-2 text-center"> Payment Success</td>
              </tr>
              <tr className="hover:bg-slate-400 hover:text-slate-800 border-b">
                <td className="p-2 text-center">1</td>
                <td className="p-2 flex justify-center ">
                  <div className=" w-16 h-16 rounded-full my-3">
                    <img src={zub} alt="" className=" w-16 h-16 rounded-full "/>
                  </div>
                </td>
                <td className="p-2">
                  <p>Jubeda Parveen</p>
                  <span>40 Diamon Colony Dhar Naka Mhow</span>
                </td>
                <td className="p-2">
                  <p> Book Name</p>
                  <p> Book Name</p>
                  <p> Book Name</p>
                  <p> Book Name</p>
                </td>
                <td className="p-2 text-center">Rs 1500</td>
                <td className="p-2 text-center">11/01/2025</td>
                <td className="p-2 text-center"> 31/12/2025</td>
                <td className="p-2 text-center"> 
                  <CiEdit size={25} className="inline mx-2"/> | <RiDeleteBin5Line size={25} className="inline mx-2  "/> 
                </td>
                <td className="p-2 text-center"> Payment Success</td>
              </tr>
              <tr className="hover:bg-slate-400 hover:text-slate-800 border-b">
                <td className="p-2 text-center">1</td>
                <td className="p-2 flex justify-center ">
                  <div className=" w-16 h-16 rounded-full my-3">
                    <img src={zub} alt="" className=" w-16 h-16 rounded-full "/>
                  </div>
                </td>
                <td className="p-2">
                  <p>Jubeda Parveen</p>
                  <span>40 Diamon Colony Dhar Naka Mhow</span>
                </td>
                <td className="p-2">
                  <p> Book Name</p>
                  <p> Book Name</p>
                  <p> Book Name</p>
                  <p> Book Name</p>
                </td>
                <td className="p-2 text-center">Rs 1500</td>
                <td className="p-2 text-center">11/01/2025</td>
                <td className="p-2 text-center"> 31/12/2025</td>
                <td className="p-2 text-center"> 
                  <CiEdit size={25} className="inline mx-2"/> | <RiDeleteBin5Line size={25} className="inline mx-2  "/> 
                </td>
                <td className="p-2 text-center"> Payment Success</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="bg-slate-700 text-white p-4 text-lg font-bold tracking-widest">
          <div className="flex justify-between">
            <div>
              <span>Showing 1-10 of 60 pages</span>
            </div>
            <div>
              <span>
                <FaArrowCircleLeft className="inline"/> 1 2 3 4 5 6 7 8 9 10 <FaArrowCircleRight className="inline"/>
              </span>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Home;
