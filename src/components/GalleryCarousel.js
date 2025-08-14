import Gallery from "./Gallery";

function GalleryCarousel() {
  // const images = [
  //   "/images/gallery1.jpg",
  //   "/images/gallery2.jpg",
  //   "/images/gallery3.jpg",
  //   "/images/gallery4.jpg",
  //   "/images/gallery5.jpg",
  //   "/images/gallery6.jpg",
  //   "/images/gallery7.jpg",
  //   "/images/gallery8.jpg",
  //   "/images/gallery9.jpg",
  //   "/images/gallery10.jpg",
  //   "/images/gallery11.jpg",
  //   "/images/gallery12.jpg",
  // ];

  return (
    <div className=" ">
      <section className=" ">
        <div className=" mx-auto px-5 max-w-full h-max  ">
          <h2 className="text-4xl font-bold text-center text-[#03001B] mb-10">
            School Gallery
          </h2>

          <Gallery />
          {/* <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-4 gap-2">
            {images.map((img, index) => (
              <div key={index} className="p-2">
                <img
                  src={img}
                  alt={`Gallery ${index + 1}`}
                  className="rounded-2xl border-4 border-white shadow-lg w-full h-60 object-cover"
                />
              </div>
            ))}
          </div> */}
        </div>
      </section>
    </div>
  );
}

export default GalleryCarousel;
