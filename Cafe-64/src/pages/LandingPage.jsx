import React from "react";
import bgimg from "../assets/home.jpg";
import about from "../assets/about.jpg";
import pizza from "../assets/pizza.jpg";
import Sandwich from "../assets/Sandwich.jpeg";
import Biriyani from "../assets/Biriyani.webp";
import Lasagna from "../assets/Lasagna.jpg";
import IceCream from "../assets/Ice Cream.jpg";
import pasta from "../assets/pasta.webp";
import FoodCard from "../components/FoodCard";
import cart from "../assets/shopping-cart.png";

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
  return (
    <div>
      {/* HERO SECTION */}
      <section
        id="home"
        style={{ backgroundImage: `url(${bgimg})` }}
        className="bg-cover bg-center bg-no-repeat relative h-200"
      >
        <div className="max-w-7xl  mx-auto flex flex-col md:flex-row items-center px-6 py-32 gap-10  ">
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

      {/* FOOD CARD SECTION */}

      <section
        id="gallery"
        className="bg-[#8c4f2b] bg-cover bg-center bg-no-repeat py-20 px-6 sm:px-40"
      >
        <h2 className="text-5xl font-bold text-center text-white mb-10">
          <span className="text-amber-500">Food</span> Gallery
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 justify-items-center gap-8">
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
        <h2 className="text-5xl font-bold text-center text-white mb-10 md:ml-130 ">
          <span className="text-amber-500">About</span> Us
        </h2>

        <p className="text-white text-center max-w-2xl mx-auto text-lg md:text-2xl md:ml-160 ">
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
    </div>
  );
}

export default LandingPage;
