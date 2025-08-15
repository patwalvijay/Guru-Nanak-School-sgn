import React, { useState } from "react";
import { Dialog, DialogBody } from "@material-tailwind/react";

const Gallery = ({images}) => {
  const [data] = useState(images || []);
  const [open, setOpen] = useState(false);
  const [current, setCurrent] = useState(0);

  const openImage = (index) => {
    setCurrent(index);
    setOpen(true);
  };

  const closeImage = () => {
    setOpen(false);
  };

  const nextImage = () => {
    setCurrent((prev) => (prev + 1) % data.length);
  };

  const prevImage = () => {
    setCurrent((prev) => (prev - 1 + data.length) % data.length);
  };

  return (
    <>
      {/* Gallery Grid */}
      <div className="w-full mx-auto font-serif">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 mt-12">
          {data.map((img, index) => (
            <div
              key={index}
              className="cursor-pointer hover:shadow-md hover:scale-105 transition-all duration-200 ease-linear"
              onClick={() => openImage(index)}
            >
              <img
                className="h-40 w-full rounded-lg object-cover object-center"
                src={img}
                alt={`gallery-photo-${index}`}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Dialog Modal */}
      <div
        className={`${
          open ? "fixed" : "hidden"
        } flex items-center justify-center w-screen h-screen z-50 top-0 left-0 bg-black/70`}
        onClick={() => setOpen(false)} // closes when outer is clicked
      >
        <div
          className="relative p-0 w-full max-w-4xl aspect-video overflow-hidden rounded-md bg-white"
          onClick={(e) => e.stopPropagation()} // stops closing on inner click
        >
          <button
      onClick={() => setOpen(false)}
      className="absolute top-3 right-3 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full z-10"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-5 w-5"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
      </svg>
    </button>
          {/* Current Image */}
          {data.length > 0 && (
            <img
              src={data[current]}
              alt={`gallery-slide-${current}`}
              loading="lazy"
              className="w-full h-full object-cover"
            />
          )}

          {/* Prev Button */}
          <button
            onClick={prevImage}
            className="absolute top-1/2 left-4 -translate-y-1/2 bg-white/40 hover:bg-white/60 rounded-full p-2"
          >
            <svg
              className="w-6 h-6 text-black"
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
          </button>

          {/* Next Button */}
          <button
            onClick={nextImage}
            className="absolute top-1/2 right-4 -translate-y-1/2 bg-white/40 hover:bg-white/60 rounded-full p-2"
          >
            <svg
              className="w-6 h-6 text-black"
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
          </button>
        </div>
      </div>
    </>
  );
};

export default Gallery;
