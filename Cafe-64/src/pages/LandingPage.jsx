import React, { useEffect } from "react";

{/*Hero Background image */}
import bgimg from "../assets/home.jpg";

{/* About us Background image */}
import about from "../assets/about.jpg";

{/* Food card images */}
import pizza from "../assets/Pizza.jpg";
import Sandwich from "../assets/Sandwich.jpeg";
import Biriyani from "../assets/Biriyani.webp";
import Lasagna from "../assets/Lasagna.jpg";
import IceCream from "../assets/Ice Cream.jpg";
import pasta from "../assets/Pasta.webp";
import cart from "../assets/shopping-cart.png";

{/* Components */}
import FoodCard from "../components/FoodCard";
import Navbar from "../components/Navbar";

{/* Footer */}
import facebookIcon from "../assets/facebook.png";
import whatsapp from "../assets/whatsapp.png";
import youtube from "../assets/youtube.png";
import call from "../assets/call.png";
import email from "../assets/email.png";
import location from "../assets/location.png";

{/* AOS Animation */}
import AOS from "aos";
import "aos/dist/aos.css";

const foodItems = [
  {
    image: pizza,
    title: "Cheese Pizza",
    description: "Hand-tossed dough with tomato sauce & mozzarella.",
    price: "Rs.1500.00",
    cartImage: cart,
  },
  {
    image: pasta,
    title: "Pasta",
    description:
      "Fresh pasta tossed in creamy sauce with garlic, herbs, and parmesan cheese.",
    price: "Rs.800.00",
    cartImage: cart,
  },
  {
    image: Lasagna,
    title: "Lasagna",
    description: "Layered pasta sheets with seasoned meat, tomato sauce.",
    price: "Rs.1200.00",
    cartImage: cart,
  },
  {
    image: IceCream,
    title: "Ice Cream",
    description:
      "A rich and creamy blend of fresh milk and premium cocoa, topped  for your light dress.",
    price: "Rs.550.00",
    cartImage: cart,
  },
  {
    image: Biriyani,
    title: "Biriyani",
    description:
      "Fragrant basmati rice cooked with aromatic spices, tender meat, and herbs.",
    price: "Rs.1600.00",
    cartImage: cart,
  },
  {
    image: Sandwich,
    title: "Sandwich",
    description:
      "Toasted bread filled with fresh vegetables, cheese, and a light dressing ",
    price: "Rs.600.00",
    cartImage: cart,
  },
];

function LandingPage() {

  useEffect(() => { 
    AOS.init({ duration: 1000 });
  })


  return (
    <div>
      {/* HERO SECTION */}
      <section
        id="home"
        style={{ backgroundImage: `url(${bgimg})` }}
        className="bg-cover bg-center bg-no-repeat relative h-200"
      >
        
        <Navbar />
        <div className="max-w-7xl  mx-auto flex flex-col md:flex-row items-center px-6 py-15 gap-10  "  data-aos="fade-up">
          <div className="flex-1  md:mt-2 text-center md:text-left">
            <p className="text-2xl mb-4 text-amber-600 font-bold ">
              Welcome to
            </p>
            <h1 className="text-6xl font-bold mb-4 text-white md:text-7xl">
              Cafe 64
              <br /> Restaurant and
              <br /> Enjoy <span className="text-amber-600">The Food</span>
            </h1>
            <p className="text-xl mt-10 text-white text-center md:text-left md:text-2xl">
              Cafe 64, your cozy spot for great food, warm <br />
              drinks, and unforgettable moments. Located in
              <br /> the heart of our community.{" "}
            </p>
            <div className="mt-10 flex justify-center md:justify-start md:mt-8 gap-4">
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

      {/* FOOD CARD SECTION */}

      <section
        id="gallery"
        className="bg-[#8c4f2b] bg-cover bg-center bg-no-repeat py-20 px-6 sm:px-40 " 
      >
        <h2 className="text-5xl font-bold text-center text-white mb-10">
          <span className="text-amber-500">Food</span> Gallery
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 justify-items-center gap-8" data-aos="fade-up">
          {foodItems.map((food, index) => (
            <FoodCard
              key={index}
              image={food.image}
              title={food.title}
              description={food.description}
              price={food.price}
              cart={food.cartImage}
            />
          ))}
        </div>
      </section>

      {/* ABOUT SECTION */}
      <section
        id="about"
        style={{ backgroundImage: `url(${about})` }}
        className="bg-cover bg-center bg-no-repeat px-6 py-20 backdrop-brightness-90 "
      >
        <h2 className="text-5xl font-bold text-center text-white mb-10 md:ml-130 "  data-aos="fade-up">
          <span className="text-amber-500">About</span> Us
        </h2>

        <p className="text-white text-center max-w-2xl mx-auto text-lg md:text-2xl md:ml-160 "  data-aos="fade-up">
          Welcome to Cafe 64, your cozy spot for great coffee, delicious food,
          and relaxing moments. We focus on serving fresh ingredients,
          handcrafted drinks, and dishes made with care. <br />
          <br />
          Whether you're meeting friends, studying with a latte, or enjoying a
          quiet meal, Cafe 64 offers a warm and welcoming atmosphere.
          <br />
          <br />
          Our goal is simple — to bring people together through good food, good
          coffee, and a comfortable space. <br />
          <br />
          Visit Cafe 64 and experience the flavors and friendliness that make
          every visit special
        </p>
      </section>

      {/* FOOTER SECTION */}
      <section className="bg-[#2F231A] text-white">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-start gap-10 px-6 py-12 md:px-20 md:ml-15" >
          {/* BRAND + SOCIAL */}
          <div className="w-full md:w-1/4">
            <img src="logo.png" alt="Cafe 64 Logo" className="h-12 w-auto" />

            <p className="text-lg mt-3">
              Cafe 64 is one of the most popular restaurants, with a special
              menu created by our passionate chefs.
            </p>

            {/* Social Icons */}
            <div className="flex space-x-4 mt-4">
              <img
                src={facebookIcon}
                alt="Facebook"
                className="h-6 w-6 mt-0.5 cursor-pointer hover:scale-110 transition"
              />
              <img
                src={whatsapp}
                alt="WhatsApp"
                className="h-7.5 w-7.5  cursor-pointer hover:scale-110 transition"
              />
              <img
                src={youtube}
                alt="YouTube"
                className="h-6 w-6 mt-0.5 cursor-pointer hover:scale-110 transition"
              />
            </div>
          </div>

          {/* OUR MENU */}
          <div className="w-full md:w-1/5">
            <h3 className="text-xl font-bold text-amber-500">Our Menu</h3>
            <div className="flex flex-col text-lg mt-3 space-y-2">
              <a href="#gallery" className="hover: transition hover:scale-105">
                Cheese Pizza
              </a>
              <a href="#gallery" className="hover: transition hover:scale-105 ">
                Pasta
              </a>
              <a href="#gallery" className="hover: transition hover:scale-105 ">
                Lasagna
              </a>
              <a href="#gallery" className="hover: transition hover:scale-105 ">
                Sandwiches
              </a>
            </div>
          </div>

          {/* USEFUL LINKS */}
          <div className="w-full md:w-1/5">
            <h3 className="text-xl font-bold text-amber-500">Useful Links</h3>
            <div className="flex flex-col text-lg mt-3 space-y-2">
              <a
                href="#privacy-policy"
                className="hover:transition hover:scale-105"
              >
                Privacy Policy
              </a>
              <a
                href="#terms-of-service"
                className="hover:transition hover:scale-105"
              >
                Terms of Service
              </a>
              <a
                href="#contact-us"
                className="hover:transition hover:scale-105"
              >
                Contact Us
              </a>
              <a href="#faq" className="hover:transition hover:scale-105">
                FAQ
              </a>
            </div>
          </div>

          {/* CONTACT US */}
          <div id="contact" className="w-full md:w-1/4">
            <h3 className="text-xl font-bold text-amber-500">Contact Us</h3>

            <div className="flex flex-col gap-3 mt-3 text-lg">
              <div className="flex items-center gap-3 hover:scale-105 transition">
                <div className="w-8 h-8 rounded-2xl bg-amber-600 flex items-center justify-center">
                  <img src={call} alt="Phone" className="w-4 h-4" />
                </div>
                +94 766433200
              </div>

              <div className="flex items-center gap-3 hover:scale-105 transition">
                <div className="w-8 h-8 rounded-2xl bg-amber-600 flex items-center justify-center">
                  <img src={email} alt="Email" className="w-4 h-4" />
                </div>
                info@cafe64.com
              </div>

              <div className="flex items-center gap-3 hover:scale-105 transition">
                <div className="w-8 h-8 rounded-2xl bg-amber-600 flex items-center justify-center">
                  <img src={location} alt="Location" className="w-4 h-4" />
                </div>
                25 Cafe St, Food City, Kandy
              </div>
            </div>
          </div>
        </div>

        {/* BOTTOM COPYRIGHT BAR */}
        <div className="bg-[#412D1E] py-4 text-center text-sm md:text-lg">
          &copy; {new Date().getFullYear()} Cafe 64. All rights reserved.
        </div>
      </section>
    </div>
  );
}

export default LandingPage;
