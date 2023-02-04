import React, { useState } from "react";
import Modal from "./Modal/Modal";

import FileSystem from "./FileSystem/FileSystem";
import ProfilePic from "./ProfileDetails/ProfilePic";
import UserName from "./ProfileDetails/UserName";
import TimeDetail from "./ProfileDetails/TimeDetail";
import DisplayAllFile from "./AllFiles/AllFileDisplay/DisplayAllFile";


function Dashboard() {
  const [showFileDetails, setShowFileDetails] = useState(null);
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
              <ProfilePic/>
              <div className="border border-rose-600">
                {/* name section */}
                <UserName/>
                <TimeDetail/>
              </div>
            </div>
            <div className="border border-rose-300 flex justify-center items-center">
              <h1 className="p-1 w-2/3 bold text-2xl">All Files</h1>
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded-xl text-xl float-right m-2"
                onClick={editDetails}
              >
                New
              </button>
            </div>

            {/* All files div */}
            <DisplayAllFile setShowFileDetails={setShowFileDetails}/>
          </div>
        </div>
        <div className="border border-rose-600 w-2/3">
          <FileSystem showFileDetails={showFileDetails}/>
        </div>
      </div>
      {showModal ? (
        <>
          <Modal setShowModal={setShowModal} showModal={showModal} />
        </>
      ) : null}
    </>
  );
}

export default Dashboard;
