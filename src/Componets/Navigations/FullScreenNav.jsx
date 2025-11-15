import React from "react";

const FullScreenNav = () => {
  return (
    <div
      id="fullscreennav"
      className="h-screen py-16 w-full absolute bg-amber-900"
    >
      <div id="all-links" className="">
        <div className="relative  link  border-t-[0.5px]">
          <h1 className="font-[font2] text-[7vw] leading-[1] pt-3 text-center  uppercase">
            Projects
          </h1>
          <div className="absolute overflow-x-auto  top-0 text-black bg-[#D3FD50] flex gap-10">
            <div className="flex w-max flex-nowrap  items-center gap-5">
              <h2 className="font-[font2] whitespace-nowrap text-[7vw] leading-[1] pt-3 uppercase">
                Pour Tout voir
              </h2>
              <img
                className="h-24 w-60 rounded-full"
                src="/Images/nav1.jpg"
                alt=""
              />
              <h2 className="font-[font2] whitespace-nowrap text-[7vw] leading-[1] pt-3 uppercase">
                Pour Tout voir
              </h2>
              <img
                className="h-24 w-60 rounded-full"
                src="/Images/nav2.jpg"
                alt=""
              />
            </div>
            <div className="flex w-max flex-nowrap  items-center gap-5">
              <h2 className="font-[font2] whitespace-nowrap text-[7vw] leading-[1] pt-3 uppercase">
                Pour Tout voir
              </h2>
              <img
                className="h-24 w-60 rounded-full"
                src="/Images/nav1.jpg"
                alt=""
              />
              <h2 className="font-[font2] whitespace-nowrap text-[7vw] leading-[1] pt-3 uppercase">
                Pour Tout voir
              </h2>
              <img
                className="h-24 w-60 rounded-full"
                src="/Images/nav2.jpg"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FullScreenNav;
