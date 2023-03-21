import React from "react";
// import { Link } from "react-router-dom";
import DragDrop from '../../assets/Vectors/DragDrop.png'
import time from '../../assets/Vectors/time.png'
import together from '../../assets/Vectors/together.png'
const LandingPage = ({ user }) => {
  return (
    <>
        <section className="">
          <div>
             <img src="/Landing.jpg" className="w-full" alt="" />
             <div className="text-[#EFD1C6] font-serif absolute lg:top-1/2 left-20">
              <h1 className="lg:text-6xl text-xl font-medium">Boost Hardware <br /> When Needed</h1>
              <p className="py-2">Zero2 is empowering developers & animators <br /> to keep innovating for the next decade</p>
              <button className="bg-[#BB254A] rounded-full shadow-2xl px-8 py-2">Get Started</button>
             </div>
          </div>
        </section>
        <section className="bg-[#351228] text-[#EFD1C6]">
          <div className="text-center py-20 lg:py-36">
            <h1  className="text-3xl font-medium">Reduce &gt; 95% of your render time</h1>
            <p>Prioritize your work and leave boring rendering time to us</p>
          </div>
          <div className="max-w-[1240px] mx-auto grid md:grid-cols-2">
          <img src={DragDrop} alt="" />
            <div className="flex flex-col justify-center">
              <h1 className="md:text-4xl sm:text-2xl text-2xl font-bold py-2">Drag, Drop & Magic!</h1>
              <p>Just Drag and drop your file and leave all the rendering part to us</p>
            </div>
          </div>
          <div className="max-w-[1240px] mx-auto grid md:grid-cols-2">
            <div className="flex flex-col justify-center">
              <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold py-2">Time is important</h1>
              <p>Complete 3 months of project in just 1 month with fast rendering</p>
            </div>
            <img className="w-[450px] mx-auto my-5" src={time} alt="no internet"/>
          </div>
          <div className="max-w-[1240px] mx-auto grid md:grid-cols-2">
            <img className="w-[450px] mx-auto my-5" src={together} alt="no internet"/>
            <div className="flex flex-col justify-center">
              <h1 className="md:text-4xl sm:text-2xl text-2xl font-bold py-2">Together we are complete</h1>
              <p>Do all your work in your very own PC. When it comes for rendering or exporting file there we came in!</p>
            </div>
          </div>
        </section>
    </>
  );
};

export default LandingPage;
