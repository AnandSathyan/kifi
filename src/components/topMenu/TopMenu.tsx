import React, { useState } from "react";
import { Dialog, Disclosure, Popover, Transition } from "@headlessui/react";
import {
  ArrowPathIcon,
  Bars3Icon,
  ChartPieIcon,
  CursorArrowRaysIcon,
  FingerPrintIcon,
  SquaresPlusIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import {
  ChevronDownIcon,
  PhoneIcon,
  PlayCircleIcon,
} from "@heroicons/react/20/solid";
import Dropdown from "./dropdown/dropdown";
const callsToAction = [
  { name: "Watch demo", href: "#", icon: PlayCircleIcon },
  { name: "Contact sales", href: "#", icon: PhoneIcon },
];

function classNames(...classes: any) {
  return classes.filter(Boolean).join(" ");
}
function TopMenu() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div>
      <header className="bg-white w-screen h-full ">
        <nav
          className="mx-auto w-full flex max-w-7xl items-center justify-between w-full border-b-2 border-gray-200 border-t-2 border-gray-200 p-8 mt-0"
          aria-label="Global"
        >
          {/* <div className="flex lg:flex-1">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <img
                className="h-8 w-auto"
                src="http://kifi.zbeanztech.in/frondend/assets/imgs/theme/logo1.png"
                alt=""
              />
            </a>
          </div> */}
          <div className="flex lg:hidden">
            {/* <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
              //   onClick={() => setMobileMenuOpen(true)}
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            </button> */}
          </div>
          {/* <div className="w-[42em]"><Search /></div> */}

          <Popover.Group className="hidden lg:flex lg:gap-x-12">
            <div className="relative w-full lg:max-w-sm">
              <select className="w-full p-2.5 text-gray-500 bg-white border rounded-md shadow-sm outline-none appearance-none focus:border-indigo-600">
                <option>Farmed Fish</option>
                <option>Marine Fish</option>
                <option>Shell Fish</option>
                {/* <option>React With Headless UI</option> */}
              </select>
            </div>
            <a
              href="#"
              className="text-sm font-semibold leading-6 text-gray-900 flex "
            >
              Home
            </a>
            <a
              href="#"
              className="text-sm font-semibold leading-6 text-gray-900 flex"
            >
              Product
            </a>
            <a
              href="#"
              className="text-sm font-semibold leading-6 text-gray-900 flex"
            >
              Blog
            </a>
            <a
              href="#"
              className="text-sm font-semibold leading-6 text-gray-900 flex"
            >
              About
            </a>{" "}
            <a
              href="#"
              className="text-sm font-semibold leading-6 text-gray-900 flex"
            >
              Contact
            </a>
          </Popover.Group>
          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
            <a
              href="#"
              className="text-sm font-semibold leading-6 text-gray-900 flex"
            >
              <span aria-hidden="true">+93456789567</span>
            </a>
          </div>
        </nav>
      </header>
    </div>
  );
}

export default TopMenu;
