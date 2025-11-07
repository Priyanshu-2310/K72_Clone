import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import React, { useRef } from "react";

const Agence = () => {
  
  const imageDivref = useRef(null)
  const imageRef = useRef(null)

  const imageArray = [
  '/Images/1.jpg',
  '/Images/2.jpg',
  '/Images/3.jpg',
  '/Images/4.jpg',
  '/Images/5.jpg',
  '/Images/6.jpg',
  '/Images/7.jpg',
  '/Images/8.jpg',
  '/Images/9.jpg',
  '/Images/10.jpg',
  '/Images/7.jpg',
  '/Images/8.jpg',
  '/Images/9.jpg',
  '/Images/10.jpg',
  '/Images/8.jpg',
  '/Images/9.jpg',
  '/Images/1.jpg',
];



  gsap.registerPlugin(ScrollTrigger)

  useGSAP(function(){
    gsap.to(imageDivref.current,{
      scrollTrigger:{
        trigger: imageDivref.current,
        start: 'top 25%',
        end: 'top -120%',
        scrub: true,
        pin: true,
        pinSpacing: true,
        pinReparent: true,
        pinType: 'transform',
        anticipatePin: 1,
        invalidateOnRefresh: true,
        onUpdate: function(elem){
          let ImageIndex;
          if(elem.progress <1){
           ImageIndex = Math.round(elem.progress * imageArray.length)
          }
          else{
            ImageIndex = imageArray.length - 1
          }
           
          imageRef.current.src = imageArray[ImageIndex]
        }
      }
    })
  })
  return (
    <div>
      <div className="section1 relative py-1">
        <div ref={imageDivref} className="absolute h-[18vw] w-[14vw] rounded-3xl overflow-hidden  top-28 left-[68vh]">
          <img
            ref={imageRef}
            className="h-full w-full object-cover"
            src="/Images/1.jpg"
            alt=""
          />
        </div>
        <div className="relative font-[font2] text-black">
          <div className="mt-[55vh]">
            <h1 className="text-[19vw] text-center uppercase leading-[17vw]">
              SEVEN7Y <br />
              TWO
            </h1>
          </div>
          <div className="pl-[40%]  mt-2 pr-[2%]">
            <p className="text-5xl">
              &nbsp;
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              We’re inquisitive and open-minded, and we make sure creativity
              crowds out ego from every corner. A brand is a living thing, with
              values, a personality and a story. If we ignore that, we can
              achieve short-term success, but not influence that goes the
              distance. We bring that perspective to every brand story we help
              tell.
            </p>
          </div>
        </div>
      </div>
      <div className="section2 h-screen"></div>
    </div>
  );
};

export default Agence;
