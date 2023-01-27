import React, { useState } from "react";
import { GiCrossedSabres } from "react-icons/gi";
import Modal from "./Modal/Modal";
// import { MdUpload } from 'react-icons/md'
function Dashboard() {
  const [showModal, setShowModal] = useState(false);
    const editDetails = () => {
        // show and hide details/modal
        setShowModal(!showModal);
    };
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
              <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-3xl text-2xl float-right m-3" onClick={editDetails}>
                New
              </button>
              <div className="flex justify-center items-center h-52">
                <h1 className="text-xl">All files</h1>
              </div>
            </div>
          </div>
        </div>
        <div className="border border-rose-600 w-2/3">
          {/* file system div */}
          <div className="flex justify-center items-center h-screen">
            <h1 className="text-3xl text-rose-600">File System</h1>
          </div>
        </div>
      </div>
      {showModal ? (
        <>
          <Modal/>
        </>
      ) : null}
    </>
  );
}

export default Dashboard;
