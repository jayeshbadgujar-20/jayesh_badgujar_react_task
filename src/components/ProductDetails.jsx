import React, { useState } from "react";
import "../App.css";

import { useParams } from "react-router-dom";
import { cardData } from "../product";

function ProductDetails() {
  let { productId } = useParams();
  const FilteredData = cardData?.find((res) => res.id == productId);
  console.log(FilteredData);
  const [view, setView] = useState("overview");
  const [numberOfProducts, setNumberOfProducts] = useState(1);

  const handleButtonClick = (viewName) => {
    setView(viewName);
  };

  return (
    <div className="bg-gray-100">
      <div className="container mx-auto py-8 px-4">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
          <div className="md:col-span-3">
            <div className="flex flex-col items-center max-sm:flex-row gap-4">
              <img className="w-full max-w-48 max-sm:max-w-20 mb-4 md:mb-0" src={FilteredData?.imgSrc} alt="Example" />
              <img className="w-full max-w-48 max-sm:max-w-20 mb-4 md:mb-0" src={FilteredData?.imgSrc} alt="Example" />
              <img className="w-full max-w-48 max-sm:max-w-20 mb-4 md:mb-0" src={FilteredData?.imgSrc} alt="Example" />
            </div>
          </div>
          <div className="md:col-span-6 max-sm:-order-1">
            <img
              className="w-full mx-auto"
              src={FilteredData?.imgSrc}
              alt="Example"
            />
          </div>
          <div className="md:col-span-3 md:pl-12">
            <div className="text">
              <h3 className="text-3xl font-bold uppercase">
                {FilteredData?.name}
              </h3>
              <p className="text-sm my-2">SKUCTI265</p>
              <b className="block">{FilteredData?.descripction}</b>
              <div className="prize flex justify-between items-start my-4">
                <p className="text-sm ">
                  10 notes / 10 regency lined envelopes
                  <br />
                  <b>${FilteredData?.price * numberOfProducts}/box</b>
                </p>
                <div className="flex items-center gap-5 border px-4">
                  <label className="text-lg font-bold">
                    {numberOfProducts}
                  </label>
                  <span
                    className="cursor-pointer text-lg font-bold"
                    onClick={() => setNumberOfProducts((prev) => prev + 1)}
                  >
                    +
                  </span>
                </div>
              </div>

              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded uppercase mt-3">
                Add to Cart
              </button>
              <div className="mt-3">
                <div className="flex gap-3">
                  <span
                    className={`cursor-pointer ${
                      view === "overview" ? "underline" : ""
                    }`}
                    onClick={() => handleButtonClick("overview")}
                  >
                    Overview
                  </span>
                  <span
                    className={`cursor-pointer ${
                      view === "materials" ? "underline" : ""
                    }`}
                    onClick={() => handleButtonClick("materials")}
                  >
                    Materials
                  </span>
                  <span
                    className={`cursor-pointer ${
                      view === "shopping" ? "underline" : ""
                    }`}
                    onClick={() => handleButtonClick("shopping")}
                  >
                    Shopping
                  </span>
                </div>

                {view === "overview" && (
                  <ul className="mt-2 font-bold">
                    <li>Folded Note</li>
                    <li>10 notes / 10 regency lined envelopes</li>
                    <li>3 13/16 * 5 3/16</li>
                    <li>Printing Process-Engraved</li>
                    <li>Processing time 2-3 business days</li>
                  </ul>
                )}

                {view === "materials" && (
                  <ul className="mt-2 font-bold">
                    <li>Paper</li>
                    <li>Color</li>
                    <li>Brand</li>
                    <li>Name</li>
                    <li>Quality</li>
                  </ul>
                )}

                {view === "shopping" && (
                  <ul className="mt-2 font-bold">
                    <li>1st Card</li>
                    <li>2nd Card</li>
                    <li>3rd Card</li>
                    <li>4th Card</li>
                    <li>5th Card</li>
                  </ul>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
