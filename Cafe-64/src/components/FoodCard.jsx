import React from "react";

function FoodCard(
  { image, title, description, price, cart, bgColor = "bg-[#B69060]" }
) {
  return (
    <div
      className={`${bgColor} text-white shadow-md rounded-lg p-5 hover:scale-105 transition duration-300 w-60 h-90 sm:w-80 sm:h-85`}
    >
      <img
        src={image}
        alt={title}
        className="rounded-md mb-4 h-40 w-70 object-cover mx-auto"
      />
      <h3 className="text-xl font-semibold">{title}</h3>
      <p className="text-sm text-white/90">{description}</p>
      {price && (
        <>
          <hr className="border-t border-gray-300 my-4" />
          <div className="flex justify-between items-center">
            <p className="font-semibold">{price}</p>

            <button className=" hover:bg-yellow-600 p-2 scale-90 cursor-pointer ">
              <img src={cart} alt="Cart" className="w-6 h-6" />
            </button>
          </div>
        </>
      )}
    </div>
  );
}

export default FoodCard;
