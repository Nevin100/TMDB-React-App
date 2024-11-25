import React from "react";

function Pagination({ handlePrev, handleNext, pageNo }) {
  return (
    <div className="bg-gray-700 text-white text-xl flex items-center justify-center p-3 mt-5 cursor-pointer">
      <div className="text-2xl p-[4px] text-bold" onClick={handlePrev}>
        ←
      </div>
      <div className="text-2xl p-[4px]"> {pageNo} </div>
      <div className="text-2xl p-[4px] text-bold" onClick={handleNext}>
        →
      </div>
    </div>
  );
}

export default Pagination;
