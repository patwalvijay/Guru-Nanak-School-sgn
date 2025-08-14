import React, { useState } from "react";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";
import { galleryImages } from "../gallerydata";

const Gallery = () => {
  const [data, setData] = useState(galleryImages || []);
  const chunkSize = Math.ceil(data.length / 4);
  const imageChunks = [];
  for (let i = 0; i < data.length; i += chunkSize) {
    imageChunks.push(data.slice(i, i + chunkSize));
  }

  const [open, setOpen] = React.useState(false);

  function handleOpen(ele) {
    setOpen(!open);
    setCurrent(ele);
  }
  const [current, setCurrent] = useState(0);

  function nextSlide() {
    setCurrent(current === data.length - 1 ? 0 : current + 1);
  }

  function prevSlide() {
    setCurrent(current === 0 ? data.length - 1 : current - 1);
  }

  return (
    <>
      <div className="w-[95%] md:w-8/12 mx-auto  font-serif">
        <div className="mt-16">
          <div className="">
            {/* <p className="text-3xl font-bold text-gray-900 md:text-5xl text-center">
              Photo Tour
            </p> */}
            <p className="max-w-4xl text-base text-gray-700 md:text-xl"></p>
            <div></div>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 mt-12">
          {data.map((imageLink, index) => (
            <div
              key={index}
              className="cursor-pointer hover:shadow-md hover:scale-105 transition-all duration-200 ease-linear"
            >
              <img
                className="h-40 w-full max-w-full rounded-lg object-cover object-center"
                src={imageLink}
                alt="gallery-photo"
                onClick={() => handleOpen(index)}
              />
            </div>
          ))}
        </div>
        <div className=" grid-cols-2 gap-4 md:grid-cols-4 hidden">
          {imageChunks.map((chunk, chunkIndex) => (
            <div className="grid gap-4">
              {chunk.map((image, imageIndex) => (
                <div
                  key={imageIndex}
                  className="cursor-pointer hover:shadow-md hover:scale-105 transition-all duration-200 ease-linear"
                  onClick={() =>
                    handleOpen(chunkIndex * chunkSize + imageIndex)
                  }
                >
                  <img
                    className="h-auto max-w-full rounded-lg object-cover object-center"
                    src={image}
                    alt="gallery-photo"
                  />
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
      <Dialog open={open} handler={handleOpen} size={"md"}>
        <DialogBody>
          <div>
            <div
              id="default-carousel"
              className="relative w-full"
              data-carousel="slide"
            >
              {/* Carousel wrapper */}
              <div className="relative h-56 overflow-hidden rounded-lg md:h-96">
                {/* Item 1 */}
                <div
                  className=" duration-700 ease-in-out w-full"
                  data-carousel-item=""
                >
                  {data.map(
                    (imageLink, index) =>
                      current === index && (
                        <img
                          src={imageLink}
                          key={index}
                          className="absolute block w-full h-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 object-cover"
                          alt="..."
                        />
                      )
                  )}
                </div>
              </div>
              {/* Slider controls */}
              <button
                onClick={prevSlide}
                type="button"
                className="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
                data-carousel-prev=""
              >
                <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                  <svg
                    className="w-4 h-4 text-white dark:text-gray-800"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 6 10"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 1 1 5l4 4"
                    />
                  </svg>
                  <span className="sr-only">Previous</span>
                </span>
              </button>
              <button
                onClick={nextSlide}
                type="button"
                className="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
                data-carousel-next=""
              >
                <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                  <svg
                    className="w-4 h-4 text-white dark:text-gray-800"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 6 10"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="m1 9 4-4-4-4"
                    />
                  </svg>
                  <span className="sr-only">Next</span>
                </span>
              </button>
            </div>
          </div>
        </DialogBody>
      </Dialog>
    </>
  );
};

export default Gallery;
