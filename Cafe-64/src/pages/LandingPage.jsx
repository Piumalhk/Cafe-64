import React from "react";
import bgimg from "../assets/home.jpg";
import about from "../assets/about.jpg";

function LandingPage() {
  return (
    <div >
      {/* HERO SECTION */}
      <section
        id="home"
        style={{ backgroundImage: `url(${bgimg})` }}
        className="bg-cover bg-center bg-no-repeat relative h-200"
      >
        <div className="max-w-7xl  mx-auto flex flex-col md:flex-row items-center px-6 py-32 gap-10  ">
          <div className="flex-1  md:mt-8 text-center md:text-left">
            <p className="text-2xl mb-4 text-amber-600 font-bold ">Welcome to</p>
            <h1 className="text-6xl font-bold mb-4 text-white md:text-7xl">Cafe 64<br /> Restaurant and<br/> Enjoy <span className="text-amber-600">The Food</span></h1>
            <p className="text-xl mt-10 text-white text-center md:text-left md:text-2xl">Cafe 64, your cozy spot for great food, warm <br />drinks, and unforgettable moments. Located in<br/> the heart of our community. </p>
            <div className="mt-20 flex justify-center md:justify-start md:mt-8 gap-4">
              <button className="bg-yellow-500 hover:bg-yellow-600 text-white px-6 py-3 rounded-lg shadow-md">
                Explore Menu
              </button>
              <button className="bg-no-repeat border-2 hover:bg-yellow-600 text-white px-6 py-3 rounded-lg shadow-md">
                Online Order
              </button>
            </div>
          </div>
        </div>
      </section>

  
    </div>
  );
}

export default LandingPage;
