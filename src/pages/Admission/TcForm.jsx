import React from "react";
import Hero from "../../components/Global/Hero";
import DownloadButton from "../../components/Global/DownloadButton";
import Layout from "../../components/Layout";

const TcForm = () => {
  return (
    <>
      <Layout>
        <div>
          <Hero title={"TC Form"} icon={""} />
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            {/* Message Content */}
            <div className="prose prose-lg max-w-none">
              <div className="space-y-12 text-gray-700 leading-relaxed">
                <h1 className="title-font sm:text-4xl text-3xl  font-bold text-gray-900 uppercase mb-5">
                  ABOUT THE
                  <span className="text-[#990000]"> TC Form</span>
                </h1>
                <div className="md:float-right md:w-3/6 md:ml-24 mb-2">
                  <img
                    src="img/school_hor-5.JPG"
                    alt="Director"
                    className="rounded-xl shadow-lg object-cover aspect-square w-full h-auto"
                  />
                </div>
                <p className="max-w-2xl mb-6 text-black lg:mb-8 md:text-lg lg:text-[16px] dark:text-gray-400 text-justify">
                  Shri Guru Nanak Doon Vale School requires that a written
                  notice of withdrawal be submitted at least one month in
                  advance; if this advance notice is not received, a month’s
                  tuition fee will be charged instead sgnpsdehradun.com . The
                  Transfer Certificate (TC) will be issued only after all dues
                  are fully settled sgnpsdehradun.com . Please note that
                  admission and annual fees are non-refundable, and tuition fees
                  will not be refunded once the term has begun. In the event of
                  a mid-term withdrawal, parents are required to make full
                  payment for the current term. The school also reserves the
                  right to initiate withdrawal, and withhold issuance of the TC,
                  in cases of fee default, repeated disciplinary issues, or
                  other valid reasons. All withdrawal requests must be made in
                  writing—verbal, telephonic, or email requests will not be
                  accepted.
                </p>
                <div className="pt-4 hidden">
                  <DownloadButton buttonText="TC Form" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default TcForm;
