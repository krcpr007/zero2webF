import React from "react";
import { AiFillDelete } from "react-icons/ai";

function File() {

  return (
    <>
      <div className="flex flex-col m-2 p-2 w-full transform border-2 cursor-pointer rounded-xl border-rose-600 ">
        <div className="flex justify-between">
          <div className="flex justify-between w-2/3">
            <button>
              <h1 className="mt-1 font-medium capitalize w-2/3">
              File Name
              </h1>
            </button>
            <p className="mt-2 text-gray-500 text-sm text-bold">00:03:00</p>
          </div>
          <div>
            <button>
              <AiFillDelete className="absolute top-5 right-8 text-xl text-rose-900" />
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default File;
