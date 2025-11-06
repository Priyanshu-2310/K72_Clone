import React from "react";
import { Link } from "react-router-dom";

const HomeBottomText = () => {
  return (
    <div className="font-[font2] flex items-center justify-center gap-5">
      <Link to='/projects' className="text-[5vw] uppercase border-2 hover:border-[#D3FD50] hover:text-[#D3FD50] border-white py-1 rounded-full px-8 ">
        Projects
      </Link>
      <Link to='/agence' className="text-[5vw] uppercase border-2 hover:border-[#D3FD50] hover:text-[#D3FD50]  border-white py-1 rounded-full px-8 ">
        Agence
      </Link>
    </div>
  );
};

export default HomeBottomText;
