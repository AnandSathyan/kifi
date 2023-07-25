import { ChevronLeft, ChevronRight } from "react-feather";
import React, { useState } from "react";

export default function Carousel({ slides }: any) {
  // const slide = { ...slides };
  const [curr, setCurr] = useState(0);

  const prev = () =>
    setCurr((curr) => (curr === 0 ? slides?.length - 1 : curr - 1));

  const next = () =>
    setCurr((curr) => (curr === slides?.length - 1 ? 0 : curr + 1));

  console.log(
    "slides",
    // slides.map((props: any) => props.props.src)
    slides.map((slides: any) => slides.url)
  );
  return (
    <div className="overflow-hidden relative">
      <div
        className="flex transition-transform ease-out duration-500"
        style={{ transform: `translateX(-${curr * 100}%)` }}
      >
        {slides.map((s: any) => (
          <img className="min-w-full h-[32rem]" src={s.url} />
        ))}
      </div>
      <div className="absolute inset-0 flex items-center justify-between p-4 ">
        <button
          onClick={prev}
          className="p-1 rounded-full shadow bg-white-80 text-gray-800 hover:bg-white "
        >
          <ChevronLeft size={40} />
        </button>
        <button
          onClick={next}
          className="p-1 rounded-full shadow bg-[white-80] text-gray-800 hover:bg-white"
        >
          <ChevronRight size={40} />
        </button>
      </div>
    </div>
  );
}
