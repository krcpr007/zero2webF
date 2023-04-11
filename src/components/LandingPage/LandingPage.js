import React from "react";
// import { Link } from "react-router-dom";
import DragDrop from '../../assets/Vectors/DragDrop.png'
import time from '../../assets/Vectors/time.png'
import together from '../../assets/Vectors/together.png'
const LandingPage = ({ user }) => {
  return (
    <>
      <section className="">
        <div className="bg-image">
          <img src="/Landing1.png" className="w-full" alt="" />
          <div className="text-[#EFD1C6] font-serif absolute lg:top-1/3 lg:left-20 left-5 top-24">
            <h1 className="lg:text-7xl text-3xl font-medium py-2">Boost Hardware <br /> When Needed</h1>
            <p className="md:py-3 font-medium text-xs sm:text-base">Zero2 is empowering developers & animators <br /> to keep innovating for the next decade</p>
            <button className="bg-[#BB254A] rounded-full shadow-2xl lg:px-9 lg:py-3 py-1.5 px-2 mt-2 text-sm">Get Started</button>
          </div>
        </div>
      </section>
      <section className="bg-[#351228] text-[#EFD1C6]">
        <div className="text-center py-16 lg:py-36 px-2.5">
          <h1 className="lg:text-3xl text-xl font-medium">Reduce &gt; 95% of your render time</h1>
          <p className="md:text-bs text-sm">Prioritize your work and leave boring rendering time to us</p>
        </div>
        <div className="max-w-[1240px] mx-auto grid md:grid-cols-2 px-2.5 py-5" data-aos="fade-up">
          <img className="lg:w-[400px] w-[200px] mx-auto my-5" src={DragDrop} alt="" />
          <div className="flex flex-col justify-center  text-center ">
            <h1 className="md:text-4xl sm:text-2xl text-2xl font-bold py-2">Drag, Drop & Magic!</h1>
            <p className="md:text-bs text-sm">Just Drag and drop your file and leave all the rendering part to us</p>
          </div>
        </div>
        <div className="max-w-[1240px] mx-auto grid md:grid-cols-2 px-2.5 py-5" data-aos="fade-left">
          <div className="flex flex-col justify-center text-center ">
            <h1 className="md:text-4xl sm:text-2xl text-2xl font-bold py-2">Time is important</h1>
            <p className="md:text-bs text-sm">Complete 3 months of project in just 1 month with fast rendering</p>
          </div>
          <img className="lg:w-[400px] w-[200px] mx-auto my-5" src={time} alt="no internet" />
        </div>
        <div className="max-w-[1240px] mx-auto grid md:grid-cols-2 px-2.5 py-5" data-aos="fade-right">
          <img className="lg:w-[400px] w-[200px] mx-auto my-5" src={together} alt="no internet" />
          <div className="flex flex-col justify-center text-center">
            <h1 className="md:text-4xl sm:text-2xl text-2xl font-bold py-2">Together we are complete</h1>
            <p className="md:text-bs text-sm">Do all your work in your very own PC. When it comes for rendering or exporting file there we came in!</p>
          </div>
        </div>
      </section>
    </>
  );
};

export default LandingPage;
