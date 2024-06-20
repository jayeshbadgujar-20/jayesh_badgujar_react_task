import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { cardData } from "../product";

const ProductsListing = () => {
  const navigate = useNavigate();
  const [selectedFilterName, setSelectedFilterName] = useState("");
  const [productDetails, setProductDetails] = useState([]);
  const [filterData, setFilterData] = useState([]);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false); // State for managing dropdown visibility

  const filterTitle = ["Low", "High", "Name", "Position", "Color"];

  const handleClick = (res) => {
    setSelectedFilterName(res);
    setIsDropdownOpen(false); // Close the dropdown when an option is selected
    if (res === "Low") {
      const lowData = [...productDetails].sort((a, b) => a.price - b.price);
      setFilterData(lowData);
    } else if (res === "High") {
      const highData = [...productDetails].sort((a, b) => b.price - a.price);
      setFilterData(highData);
    } else if (res === "Name") {
      const nameData = [...productDetails].sort((a, b) =>
        a.name.localeCompare(b.name)
      );
      setFilterData(nameData);
    }
  };

  useEffect(() => {
    setProductDetails(cardData);
    setFilterData(cardData);
  }, []);

  return (
    <div>
      <div className="flex justify-end gap-2 items-center mt-5 mx-4 md:mx-8 lg:mx-16">
        <div>SORT BY: </div>
        <div className="relative inline-block text-left">
          <button
            onClick={() => setIsDropdownOpen(!isDropdownOpen)} // Toggle dropdown visibility
            className="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none"
            id="dropdownMenuButton1"
            aria-haspopup="true"
            aria-expanded={isDropdownOpen}
          >
            {selectedFilterName || "Filter Options"}
            <svg
              className={`-mr-1 ml-2 h-5 w-5 ${
                isDropdownOpen ? "transform rotate-180" : ""
              }`} // Rotate arrow when dropdown is open
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </button>
          <ul
            className={`origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none ${
              isDropdownOpen ? "" : "hidden"
            }`} // Toggle visibility based on state
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="dropdownMenuButton1"
          >
            {filterTitle?.map((res, index) => (
              <li
                className="dropdown-item block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 cursor-pointer"
                key={index}
                onClick={() => handleClick(res)}
              >
                {res}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="flex flex-col md:flex-row gap-6 mx-4 md:mx-8 lg:mx-16 mt-5">
        <div className="flex flex-col gap-2 w-full md:w-1/4">
          <select className="form-select block w-full mt-1 border-gray-300 rounded-md shadow-sm">
            <option selected>BRAND</option>
            <option value="1">BRAND1</option>
            <option value="2">BRAND2</option>
            <option value="3">BRAND3</option>
          </select>
          <select className="form-select block w-full mt-1 border-gray-300 rounded-md shadow-sm">
            <option selected>DESIGN COLOR</option>
            <option value="1">RED</option>
            <option value="2">BLACK</option>
            <option value="3">GREEN</option>
          </select>
          <select className="form-select block w-full mt-1 border-gray-300 rounded-md shadow-sm">
            <option selected>DESIGN STYLE</option>
            <option value="1">GRAPHIC DESIGN</option>
            <option value="2">INTERIOR DESIGN</option>
            <option value="3">MODERN INTERIORS</option>
          </select>
          <select className="form-select block w-full mt-1 border-gray-300 rounded-md shadow-sm">
            <option selected>PAPER COLOR</option>
            <option value="1">ORANGE</option>
            <option value="2">PINK</option>
            <option value="3">PURPLE</option>
          </select>
          <select className="form-select block w-full mt-1 border-gray-300 rounded-md shadow-sm">
            <option selected>PAPER WEIGHT</option>
            <option value="1">100</option>
            <option value="2">200</option>
            <option value="3">300</option>
          </select>
        </div>
        <div className="flex-1">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {filterData.map((card, index) => (
              <div className="col mb-4" key={index} style={{ height: "100%" }}>
                <div
                  className="card hero_img"
                  style={{
                    width: "100%",
                    display: "flex",
                    flexDirection: "column",
                    height: "100%",
                  }}
                >
                  <img
                    src={card?.imgSrc}
                    className="card-img-top"
                    alt="..."
                    style={{ objectFit: "cover", height: "200px", width: "100%" }}
                  />
                  <div className="mt-2 card-body flex flex-col md:flex-row justify-between flex-grow">
                    <p className="card-title font-medium">{card?.name}</p>
                    <p className="card-text">
                      <b>${card?.price}</b>/box
                    </p>
                  </div>
                  <button
                    className="mx-2 mb-2 rounded-md bg-blue-500 text-white px-4 py-2 hover:bg-blue-700"
                    onClick={() => navigate(`/productDetails/${card.id}`)}
                  >
                    More Details
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductsListing;
