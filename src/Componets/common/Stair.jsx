import React, { Children, useRef } from 'react'
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { Link, useLocation } from 'react-router-dom';

const Stair = (props) => {

 const currentpath = useLocation().pathname

 
    
  const tl = gsap.timeline();
  const stairparentref = useRef(null)
  const pageRef = useRef(null)

  console.log(props);
  

  useGSAP(function () {
    tl.to(stairparentref.current, {
      display: "block",
    })
    
    tl.from(".stair", {
      height: 0,
      stagger: {
        amount: -0.3,
      },
    });
    tl.to(".stair", {
      y: "100%",
      stagger: {
        amount: -0.3,
      },
    });
    tl.to(stairparentref.current, {
      display: "none",
    })
    tl.to(".stair", {
      y: "0%",
    });

    gsap.from(pageRef.current, {
      opacity: 0,
      delay: 1.3,
      scale: 1.2,
    })
  },[currentpath]);


  return (
    <div>
      <div ref={stairparentref} className="h-screen  w-full top-0 fixed z-10">

        <div  className=" h-full flex w-full">
          <div className="stair h-full w-1/5 bg-black"></div>
          <div className="stair h-full w-1/5 bg-black"></div>
          <div className="stair h-full w-1/5 bg-black"></div>
          <div className="stair h-full w-1/5 bg-black"></div>
          <div className="stair h-full w-1/5 bg-black"></div>
        </div>
        
      </div>
      <div ref={pageRef}>
        {props.children}
      </div>
    </div>
  )
}

export default Stair