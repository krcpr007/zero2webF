import React from "react";
import DisplayFileName from "./DisplayFileName";
import Data from "../DummyData/Data.json";

function DisplayAllFile({setShowFileDetails}) {
  const handleDisplayFiles = (ele) => {
    console.log(ele);
    /// searching data with id...
    Data.data.forEach((it)=>{
       if(it.id===ele){
        setShowFileDetails(it);
       }
    })
    
  };
  return (
    <div className="border border-rose-300">
      {Data.data.map((file) => {
        return (
          <>
            <DisplayFileName
              filename={file.filename}
              key={file.id}
              id={file.id}
              handleDisplayFiles={handleDisplayFiles}
            />
          </>
        );
      })}
    </div>
  );
}

export default DisplayAllFile;
