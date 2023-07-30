// import React from "react";
// import Carousel from "./Carousel";
// function ImageSlider() {
//   const slides = [
//     {
//       url: "https://upload.wikimedia.org/wikipedia/commons/4/4e/Sashimi_-_Maguro_Restaurant%2C_Bangna%2C_Bangkok_(44856596864).jpg",
//     },
//     {
//       url: "https://www.foodiesfeed.com/wp-content/uploads/2023/04/plate-of-delicious-beef-tacos.jpg",
//     },
//     {
//       url: "https://www.foodiesfeed.com/wp-content/uploads/2023/04/delicious-fried-salmon-fillet-with-herbs.jpg",
//     },
//     {
//       url: "https://www.foodiesfeed.com/wp-content/uploads/2023/04/salmon-nigiri.jpg",
//     },
//     {
//       url: "https://www.foodiesfeed.com/wp-content/uploads/2023/05/freshly-prepared-beef-steak-with-vegetables.jpg",
//     },
//   ];
//   return (
//     <div className="  m-auto py-16 px-4 relative">
//       <Carousel
//       // style={{ backgroundImage: `url(${slides[1].url})` }}
//       // className="w-full h-full rounded-2x bg-center bg-cover duration-500"
//       >
//         {slides.map((s) => (
//           <img
//             style={{ width: "1400px", height: "700px" }}
//             className="w-[1400px] h-[600px] object-contain flex-1"
//             src={s.url}
//           />
//         ))}
//       </Carousel>
//     </div>
//   );
// }

// export default ImageSlider;

import React from "react";
import Carousel from "./Carousel";

function ImageSlider() {
  const slides = [
    {
      url: "./assets/images/banner-fish.jpeg",
    },
    {
      url: "./assets/images/banner-fish1.avif",
    },
    {
      url: "./assets/images/banner-fish5.jpeg",
    },
  ];
  console.log(
    "imageslider",
    slides.map((data: any) => data.url)
  );

  return (
    <div className="banner">
      <div className="container">
        <div className="slider-container has-scrollbar">
          <div className="slider-item">
            {/* <div
              id="carouselDarkVariant"
              className="relative"
              data-te-carousel-init
              data-te-carousel-slide
            > */}
            {/* <!-- Carousel indicators --> */}
            <div
              // className="absolute inset-x-0 bottom-0 z-[2] mx-[15%] mb-4 flex list-none justify-center p-0"
              data-te-carousel-indicators
            >
              {/*                 
                <button
                  data-te-target="#carouselDarkVariant"
                  data-te-slide-to="0"
                  data-te-carousel-active
                  className="mx-[3px] box-content h-[3px] w-[30px] flex-initial cursor-pointer border-0 border-y-[10px] border-solid border-transparent bg-black bg-clip-padding p-0 -indent-[999px] opacity-50 transition-opacity duration-[600ms] ease-[cubic-bezier(0.25,0.1,0.25,1.0)] motion-reduce:transition-none"
                  aria-current="true"
                  aria-label="Slide 1"
                ></button>
                <button
                  data-te-target="#carouselDarkVariant"
                  className="mx-[3px] box-content h-[3px] w-[30px] flex-initial cursor-pointer border-0 border-y-[10px] border-solid border-transparent bg-black bg-clip-padding p-0 -indent-[999px] opacity-50 transition-opacity duration-[600ms] ease-[cubic-bezier(0.25,0.1,0.25,1.0)] motion-reduce:transition-none"
                  data-te-slide-to="1"
                  aria-label="Slide 1"
                ></button>
                <button
                  data-te-target="#carouselDarkVariant"
                  className="mx-[3px] box-content h-[3px] w-[30px] flex-initial cursor-pointer border-0 border-y-[10px] border-solid border-transparent bg-black bg-clip-padding p-0 -indent-[999px] opacity-50 transition-opacity duration-[600ms] ease-[cubic-bezier(0.25,0.1,0.25,1.0)] motion-reduce:transition-none"
                  data-te-slide-to="2"
                  aria-label="Slide 1"
                ></button> */}
            </div>

            {/* <!-- Carousel items --> */}
            {/* <div className="relative w-full overflow-hidden after:clear-both after:block after:content-['']"> */}
            {/* <!-- First item --> */}
            <div
              data-te-carousel-fade
              data-te-carousel-item
              data-te-carousel-active
            >
              <Carousel slides={slides} />

              {/* <div className="absolute inset-x-[15%] bottom-5 hidden py-5 text-center text-black md:block">
            <h5 className="text-xl">First slide label</h5>
            <p>Some representative placeholder content for the first slide.</p>
          </div> */}
            </div>
            {/* <!-- Second item --> */}
            {/* <div
          className="relative float-left -mr-[100%] hidden w-full !transform-none opacity-0 transition-opacity duration-[600ms] ease-in-out motion-reduce:transition-none"
          data-te-carousel-fade
          data-te-carousel-item
        >
          <img
            src="https://mdbcdn.b-cdn.net/img/Photos/Slides/img%20(35).webp"
            className="block w-full"
            alt="Mountaintop"
          />
          <div className="absolute inset-x-[15%] bottom-5 hidden py-5 text-center text-black md:block">
            <h5 className="text-xl">Second slide label</h5>
            <p>Some representative placeholder content for the second slide.</p>
          </div>
        </div> */}
            {/* <!-- Third item --> */}
            {/* <div
          className="relative float-left -mr-[100%] hidden w-full !transform-none opacity-0 transition-opacity duration-[600ms] ease-in-out motion-reduce:transition-none"
          data-te-carousel-fade
          data-te-carousel-item
        >
          <img
            src="https://mdbcdn.b-cdn.net/img/Photos/Slides/img%20(40).webp"
            className="block w-full"
            alt="Woman Reading a Book"
          />
          <div className="absolute inset-x-[15%] bottom-5 hidden py-5 text-center text-black md:block">
            <h5 className="text-xl">Third slide label</h5>
            <p>Some representative placeholder content for the third slide.</p>
          </div>
        </div> */}
          </div>

          {/* <!-- Carousel controls - prev item--> */}
          {/* <button
        className="absolute bottom-0 left-0 top-0 z-[1] flex w-[15%] items-center justify-center border-0 bg-none p-0 text-center text-black opacity-50 transition-opacity duration-150 ease-[cubic-bezier(0.25,0.1,0.25,1.0)] hover:text-black hover:no-underline hover:opacity-90 hover:outline-none focus:text-black focus:no-underline focus:opacity-90 focus:outline-none motion-reduce:transition-none"
        type="button"
        data-te-target="#carouselDarkVariant"
        data-te-slide="prev"
      >
        <span className="inline-block h-8 w-8 dark:grayscale">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            className="h-6 w-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M15.75 19.5L8.25 12l7.5-7.5"
            />
          </svg>
        </span>
        <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
          Previous
        </span>
      </button> */}
          {/* <!-- Carousel controls - next item--> */}
          {/* <button
        className="absolute bottom-0 right-0 top-0 z-[1] flex w-[15%] items-center justify-center border-0 bg-none p-0 text-center text-black opacity-50 transition-opacity duration-150 ease-[cubic-bezier(0.25,0.1,0.25,1.0)] hover:text-black hover:no-underline hover:opacity-90 hover:outline-none focus:text-black focus:no-underline focus:opacity-90 focus:outline-none motion-reduce:transition-none"
        type="button"
        data-te-target="#carouselDarkVariant"
        data-te-slide="next"
      >
        <span className="inline-block h-8 w-8 dark:grayscale">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            className="h-6 w-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M8.25 4.5l7.5 7.5-7.5 7.5"
            />
          </svg>
        </span>
        <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
          Next
        </span>
      </button> */}
          {/* </div> */}
          {/* </div> */}
        </div>
      </div>
    </div>
  );
}

export default ImageSlider;

// import React, { useState } from "react";

// const images = [
//   "https://images.unsplash.com/photo-1506501139174-099022df5260?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1351&q=80",
//   "https://images.unsplash.com/photo-1523438097201-512ae7d59c44?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1350&q=80",
//   "https://images.unsplash.com/photo-1513026705753-bc3fffca8bf4?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1350&q=80",
// ];
// // images must be an array of urls , if using Next JS this could something like
// // const images = ['/img/img1.png', '/img/img2.png', '/img/img3.png']
// // images must be an array of urls , if using Next JS this could something like
// // const images = ['/img/img1.png', '/img/img2.png', '/img/img3.png']

// const Carousel = () => {
//   // We will start by storing the index of the current image in the state.
//   const [currentImage, setCurrentImage] = useState(0);

//   // We are using react ref to 'tag' each of the images. Below will create an array of
//   // objects with numbered keys. We will use those numbers (i) later to access a ref of a
//   // specific image in this array.
//   const refs = images.reduce((acc: any, val, i) => {
//     acc[i] = React.createRef();
//     return acc;
//   }, {});

//   const scrollToImage = (i: any) => {
//     // First let's set the index of the image we want to see next
//     setCurrentImage(i);
//     // Now, this is where the magic happens. We 'tagged' each one of the images with a ref,
//     // we can then use built-in scrollIntoView API to do eaxactly what it says on the box - scroll it into
//     // your current view! To do so we pass an index of the image, which is then use to identify our current
//     // image's ref in 'refs' array above.
//     refs[i].current.scrollIntoView({
//       //     Defines the transition animation.
//       behavior: "smooth",
//       //      Defines vertical alignment.
//       block: "nearest",
//       //      Defines horizontal alignment.
//       inline: "start",
//     });
//   };

//   // Some validation for checking the array length could be added if needed
//   const totalImages = images.length;

//   // Below functions will assure that after last image we'll scroll back to the start,
//   // or another way round - first to last in previousImage method.
//   const nextImage = () => {
//     if (currentImage >= totalImages - 1) {
//       scrollToImage(0);
//     } else {
//       scrollToImage(currentImage + 1);
//     }
//   };

//   const previousImage = () => {
//     if (currentImage === 0) {
//       scrollToImage(totalImages - 1);
//     } else {
//       scrollToImage(currentImage - 1);
//     }
//   };

//   // Tailwind styles. Most importantly notice position absolute, this will sit relative to the carousel's outer div.
//   const arrowStyle =
//     "absolute text-white text-2xl z-10 bg-black h-10 w-10 rounded-full opacity-75 flex items-center justify-center";

//   // Let's create dynamic buttons. It can be either left or right. Using
//   // isLeft boolean we can determine which side we'll be rendering our button
//   // as well as change its position and content.
//   const sliderControl = (isLeft: any) => (
//     <button
//       type="button"
//       onClick={isLeft ? previousImage : nextImage}
//       className={`${arrowStyle} ${isLeft ? "left-2" : "right-2"}`}
//       style={{ top: "40%" }}
//     >
//       <span role="img" aria-label={`Arrow ${isLeft ? "left" : "right"}`}>
//         {isLeft ? "◀" : "▶"}
//       </span>
//     </button>
//   );

//   return (
//     // Images are placed using inline flex. We then wrap an image in a div
//     // with flex-shrink-0 to stop it from 'shrinking' to fit the outer div.
//     // Finally the image itself will be 100% of a parent div. Outer div is
//     // set with position relative, so we can place our cotrol buttons using
//     // absolute positioning on each side of the image.
//     <div className="p-12 flex justify-center w-screen md:w-1/2 items-center">
//       <div className="relative w-full">
//         <div className="carousel">
//           {sliderControl(true)}

//           {images.map((img, i) => (
//             <div className="w-full flex-shrink-0" key={img} ref={refs[i]}>
//               <img src={img} className="w-full object-contain" />
//             </div>
//           ))}
//           {sliderControl(false)}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Carousel;
