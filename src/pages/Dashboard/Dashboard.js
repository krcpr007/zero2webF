import React, { useState } from "react";
import { GiCrossedSabres } from "react-icons/gi";
// import { MdUpload } from 'react-icons/md'
import FileDetails from "./FileDetails";
import { AiFillDelete } from "react-icons/ai";
import UseVisiblityToggle from "./UseVisiblityToggle";

function Dashboard() {
  const [showModal, setShowModal] = useState(false);
  const editDetails = () => {
    // show and hide details/modal
    setShowModal(!showModal);
  };
  const handleInputs = (e) => {
    //this function will handle the input
    let name, value;
    name = e.target.name;
    value = e.target.value;
  };
  const updateDetails = async () => {
    //function for updating the details of blog
    try {
      const yes = window.confirm("Confirm do you want to update?"); //confirmation
      if (yes) {
        setShowModal(false);
        editDetails();
      }
    } catch (error) {
      console.log(error);
    }
  };

  const data = [
    {
      id: 1,
      filename: "FileName 1",
      duration: "00:03:01",
      details: "File 1 Details will be shown here!!",
    },
    {
      id: 2,
      filename: "FileName 2",
      duration: "00:03:02",
      details: "File 2 Details will be shown here!!",
    },
    {
      id: 3,
      filename: "FileName 3",
      duration: "00:03:03",
      details: "File 3 Details will be shown here!!",
    },
  ];

  const [fileDetailsComponent, toggleDetailsVisiblity] = UseVisiblityToggle(
    <FileDetails name="File 1 details will be shown here" />,
    false
  );

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
              
              <button
                class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-3xl text-3xl float-right m-3"
                onClick={editDetails}
              >
                +
              </button>
            </div>
            
            {/* All files div */}
            <div className="border border-rose-300">
              {data.map((file) => (
                <div className="flex justify-center items-center">
                  <div className="flex flex-col m-2 p-2 w-full transform border-2 cursor-pointer rounded-xl border-rose-600 ">
                    <div className="flex justify-between">
                      <div className="flex justify-between p-1 w-2/3">
                        <button
                          onClick={toggleDetailsVisiblity}
                          className="mt-2 ml-1 font-medium capitalize"
                        >
                          {file.filename}
                        </button>
                        <p className="mt-2 text-gray-500 text-sm text-bold">
                          {file.duration}
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
              ))}
            </div>
          </div>
        </div>
        <div className="border border-rose-600 w-2/3">
          {/* file system div */}
          {fileDetailsComponent}
        </div>
      </div>
      {showModal ? (
        <>
          <div className=" overflow-y-auto overflow-x-hidden fixed m-50 z-50 w-full md:inset-0 h-modal md:h-full">
            <div className="relative p-4 w-full max-w-2xl h-full md:h-auto">
              {/* <!-- Modal content --> */}
              <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
                {/* <!-- Modal header --> */}
                <form>
                  <div className="flex justify-between items-start p-4 rounded-t border-b dark:border-gray-600">
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white"></h3>
                    <button
                      type="button"
                      onClick={editDetails}
                      className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
                      data-modal-toggle="defaultModal"
                    >
                      <GiCrossedSabres className="text-sky-500 text-lg" />
                      <span className="sr-only">Close modal</span>
                    </button>
                  </div>
                  {/* <!-- Modal body --> */}
                  <div className="px-5">
                    <div>
                      <label
                        htmlFor="title"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                      >
                        File name
                      </label>
                      <input
                        type="text"
                        name="title"
                        id="title"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        onChange={handleInputs}
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="desc"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                      >
                        Description
                      </label>
                      <input
                        type="text"
                        name="desc"
                        id="desc"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        onChange={handleInputs}
                      />
                    </div>
                    <div class="max-w-xl">
                      <label
                        htmlFor="desc"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                      >
                        Upload
                      </label>
                      <label class="flex justify-center w-full h-32 px-4 transition bg-white border-2 border-gray-300 border-dashed rounded-md appearance-none cursor-pointer hover:border-gray-400 focus:outline-none">
                        <span class="flex items-center space-x-2">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            class="w-6 h-6 text-gray-600"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            stroke-width="2"
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                            />
                          </svg>
                          <span class="font-medium text-gray-600">
                            Drop files to Attach, or
                            <span class="text-blue-600 underline">browse</span>
                          </span>
                        </span>
                        <input type="file" name="file_upload" class="hidden" />
                      </label>
                    </div>
                  </div>
                  {/* <!-- Modal footer --> */}
                  <div className="flex items-center p-6 space-x-2 rounded-b border-t border-gray-200 dark:border-gray-600">
                    <button
                      data-modal-toggle="defaultModal"
                      type="button"
                      className="tailwind-btn"
                      onClick={updateDetails}
                    ></button>
                    <button
                      data-modal-toggle="defaultModal"
                      type="button"
                      className="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-sky-500 rounded-lg border border-sky-500 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-sky-500 dark:border-sky-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600"
                      onClick={editDetails}
                    >
                      Create
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </>
      ) : null}
    </>
  );
}

export default Dashboard;
