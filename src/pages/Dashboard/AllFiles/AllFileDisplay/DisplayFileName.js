import React from "react";

function DisplayFileName({filename, id ,handleDisplayFiles}) {
  return (
    <div className="flex justify-center items-center hover:bg-gray-400" onClick={()=>handleDisplayFiles(id)}>
      <div className="flex flex-col m-1 p-1 w-full transform cursor-pointer">
        <div className="flex justify-between">
          <div className="flex justify-between p-1">
            <button className="mt-1 ml-8 font-medium capitalize ">
              {filename}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DisplayFileName;
