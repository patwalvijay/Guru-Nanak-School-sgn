import React from "react";
import Layout from "../components/Layout";
import Hero from "../components/Global/Hero";
import Gallery from "../components/Gallery";
import { mainGalleryImages } from "../gallerydata";

const GallaryPage = () => {
  return (
    <>
      <Layout>
        <div>
          <Hero title={"Gallery"} icon={""} />
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <Gallery images={mainGalleryImages}/>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default GallaryPage;
