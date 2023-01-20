import React, { useState } from "react";
import FileSystem from "./FileSystem";
import FileDetails from "./FileDetails";
import { AiFillDelete } from "react-icons/ai";
// import { MdUpload } from 'react-icons/md'
import File from "./File";
import data from "./DummyData";

function Dashboard() {
  const [show, setShow] = useState(false);



    
  return (
    <>
      <div className="md:flex justify-between h-screen bg-gray-100">
        <div className="lg:w-1/3 border border-rose-600">
          <div className="">
            <div className="flex">
              {/* profile picture */}
              <div className="border border-rose-600 lg:w-1/2">
                <div className="flex justify-center items-center lg:h-48">
                  <div className="w-36 h-36 rounded-full bg-gray-400"></div>
                </div>
              </div>
              <div className="border border-rose-600">
                {/* name section */}
                <div className="text-center md:mt-5">
                  <h1 className="text-3xl">Rohit Kumar singh</h1>
                </div>
                <div className="flex justify-around text-center border border-rose-600">
                  <div className="">
                    <h1>
                      6 <br /> hours
                    </h1>
                  </div>
                  <div>
                    <h1>
                      33 <br /> minutes
                    </h1>
                  </div>
                </div>
              </div>
            </div>
            <div className="border border-rose-300">
              {/* All files div */}
              <div className="flex justify-center items-center">
                <div className="flex flex-col m-2 p-2 w-full transform border-2 cursor-pointer rounded-xl border-rose-600 ">
                  <div className="flex justify-between">
                    <div className="flex justify-between w-2/3">
                      <button onClick={() => setShow(!show)}>
                        <h1 className="mt-1 font-medium capitalize w-2/3">
                          file name
                        </h1>
                      </button>
                      <p className="mt-2 text-gray-500 text-sm text-bold">
                        00:03:00
                      </p>
                    </div>
                    <div>
                      <button>
                        <AiFillDelete className="absolute top-5 right-8 text-xl text-rose-900" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex justify-center items-center">
                {
                    // data.map((val,i) =>{
                    //     return(
                    //         <File
                    //             key={i}
                    //             filename={val.filename}
                    //             duration={val.duration}
                    //         />
                    //     );
                    // })
                }
              </div>
              
            </div>
          </div>
        </div>
        <div className="border border-rose-600 w-2/3">
          {/* file system div */}
          {show && <FileDetails/>}
          {!show && <FileSystem/>}
        </div>
      </div>
    </>
  );
}

export default Dashboard;
