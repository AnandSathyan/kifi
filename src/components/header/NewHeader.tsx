import React from "react";

function NewHeader() {
  return (
    <div className="flex flex-row">
      <div className="flex lg:flex-1">
        <a href="#" className="-m-1.5 p-1.5">
          <span className="sr-only">Your Company</span>
          <img
            className="h-8 w-auto"
            src="http://kifi.zbeanztech.in/frondend/assets/imgs/theme/logo1.png"
            alt=""
          />
        </a>
      </div>
      <div>
        <button
          id="dropdown-button"
          data-dropdown-toggle="dropdown"
          className="flex-shrink-0 z-10 inline-flex items-center  text-sm font-medium text-center text-gray-900 bg-gray-100 border border-white-300 rounded-l-lg hover:bg-gray-200 focus:ring-1 focus:outline-none focus:ring-gray-100 dark:white dark:hover:gray dark:focus:ring-gray-700 dark:text-white dark:border-gray-600"
          type="button"
        >
          All categories{" "}
          <svg
            className="w-2.5 h-2.5 ml-2.5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 10 6"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="m1 1 4 4 4-4"
            />
          </svg>
          <div className="relative w-full h-full">
            <input
              type="search"
              id="search-dropdown"
              className="block p-2.5 w-full z-20 text-sm text-white bg-white rounded-r-lg  border-none"
              placeholder="Search Mockups, Logos, Design Templates..."
              required
            />
            <button
              type="submit"
              className="absolute top-0 right-0 p-2.5 text-sm font-medium h-full text-orange bg-[white] border-none rounded-r-lg "
            >
              <svg
                className="w-4 h-4"
                color="orange"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                />
              </svg>
              <span className="sr-only">Search</span>
            </button>
          </div>
        </button>
      </div>
    </div>
  );
}

export default NewHeader;
