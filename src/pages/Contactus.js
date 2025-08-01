import { useEffect } from "react";
import Layout from "../components/Layout";

function Contactus() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <Layout>
      <section className="text-gray-600 body-font relative">
        <div className="w-full mt-24">
          <iframe
            className="w-full h-96"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d360.49103475639237!2d78.04565483467218!3d30.30761847693226!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390929a28a66cfdd%3A0xdeb2b41b885fc0ed!2sShri%20Guru%20Nanak%20Doon%20Valley%20School!5e0!3m2!1sen!2sin!4v1753962757624!5m2!1sen!2sin"
          ></iframe>
        </div>
        <div className="flex-row-reverse">
          <div className=" mt-100">
            <div className="p-3 flex justify-center">
              <div className="w-full lg:w-[700px] border-2 border-[#0D6880] p-4 mt-10 ">
                <h2 className="flex items-center gap-3">
                  <span className="w-40 font-bold">Address : </span>
                  <span>
                    825W+28W, East Rest Camp, Guru Nanak Vihar, Race Course,
                    Dehradun, Uttarakhand 248001
                  </span>
                </h2>
                <a
                  href="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d360.49103475639237!2d78.04565483467218!3d30.30761847693226!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390929a28a66cfdd%3A0xdeb2b41b885fc0ed!2sShri%20Guru%20Nanak%20Doon%20Valley%20School!5e0!3m2!1sen!2sin!4v1753962757624!5m2!1sen!2sin"
                  target="blank"
                >
                  <button className="bg-[#0D6880] text-white px-5 py-2 rounded-md  mx-center mt-8">
                    VISIT OUR SCHOOL
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
        {/* <div className="p-2 flex justify-center">
            <div className="w-60">
              <h2 className="text-gray-900 text-lg mb-1 font-medium title-font">
                Contact us
              </h2>

              <div className="relative mb-4">
                <label
                  htmlFor="email"
                  className="leading-7 text-sm text-gray-600"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
              <div className="relative mb-4">
                <label
                  htmlFor="message"
                  className="leading-7 text-sm text-gray-600"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                  defaultValue={""}
                />
              </div>
              <button className="text-white bg-[#FFA700] border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                Send
              </button>
            </div>
          </div> */}
      </section>
    </Layout>
  );
}

export default Contactus;
