import React from "react";

function Banner() {
  return (
    <div
      className="h-[20vh] md:h-[75vh] bg-cover bg-center flex items-end"
      style={{
        backgroundImage:
          "url(https://i.pinimg.com/originals/29/7d/e0/297de0761b0c756266d74ca50d03cc1d.jpg)",
      }}
    >
      <div className="text-gray-300 w-full flex align-items-center justify-center text-2xl bg-gray-900 p-[4px]">
        Avengers-EndGame
      </div>
    </div>
  );
}

export default Banner;
