import React from "react";

function FileSystem({ showFileDetails }) {
  return (
    <>
      <div className="flex justify-center items-center h-screen">
        {showFileDetails ? (
          <h1 className="text-3xl text-blue-600">{showFileDetails?.details}</h1>
        ) : (
          <h1 className="text-3xl text-rose-600">FILE SYSTEM</h1>
        )}
      </div>
    </>
  );
}

export default FileSystem;
