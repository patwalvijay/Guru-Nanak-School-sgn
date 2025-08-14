import Layout from "../components/Layout";

const PrincipleMessage = () => {
  return (
    <div>
      <Layout>
        <div className="min-h-screen bg-white">
          {/* Header */}
          <section className="relative h-[60vh] w-full">
            <img
              src="img/moreabout.jpg"
              alt="Director Message Background"
              className="object-cover w-full h-full"
            />
            <div className="absolute inset-0 bg-black/50 flex flex-col justify-center items-center px-4 mt-12">
              <h1 className="text-white text-4xl md:text-5xl font-bold mb-3 text-center">
                Principle's Message
              </h1>
              <p className="text-white hidden text-lg md:text-xl text-center max-w-2xl">
                “True education nurtures both the intellect and the soul.”
              </p>
            </div>
          </section>

          {/* Content */}
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            {/* Quote */}
            {/* <div className="text-center mb-12">
              <Quote className="w-12 h-12 text-[#990000] mx-auto mb-4" />
              <blockquote className="text-2xl sm:text-3xl font-semibold text-gray-800 italic">
                "True education nurtures both the intellect and the soul."
              </blockquote>
            </div> */}

            {/* Message Content */}
            <div className="prose prose-lg max-w-none">
              <div className="space-y-6 text-gray-700 leading-relaxed">
                <div className="md:float-right md:w-3/6 md:ml-8 mb-6">
                  <img
                    src="img/"
                    alt="Director"
                    className="rounded-xl shadow-lg object-cover aspect-square w-full h-auto"
                  />
                </div>
                <p>
                  Education is the most powerful gift we can offer the next
                  generation—a gift that shapes intellect, builds character, and
                  instills resilience and purpose. At Shri Guru Nanak Doon Vale
                  School, we are deeply committed to nurturing young minds in a
                  way that equips them not only for academic success but also
                  for the responsibilities and challenges of life.
                </p>

                <p>
                  Our vision is to create a learning environment that is
                  inclusive, forward-thinking, and firmly rooted in values such
                  as integrity, empathy, respect, and discipline. From the
                  moment a child steps into our school, we strive to provide
                  them with every opportunity to grow intellectually,
                  emotionally, and socially. Our academic framework encourages
                  curiosity, creativity, and critical thinking, while our
                  co-curricular and extracurricular programs help students
                  explore their passions and build confidence.
                </p>

                <p>
                  We take immense pride in the culture of collaboration and
                  trust that defines our school community. Our dedicated team of
                  educators works tirelessly to ensure every student feels safe,
                  inspired, and empowered to achieve their full potential.
                </p>

                <p>
                  We take pride in the culture of collaboration and trust that
                  defines our school. Our dedicated team of educators and staff
                  work tirelessly to ensure that every student feels safe,
                  inspired, and empowered to achieve their full potential.
                </p>

                <p>
                  As we progress in this ever-evolving world, our mission
                  remains clear—to shape thoughtful, responsible individuals who
                  are not only well-educated but also compassionate, courageous,
                  and ready to make meaningful contributions to society.
                </p>

                <p>Together, let us continue building bright futures.</p>
              </div>

              {/* Signature */}
              <div className="mt-12 pt-8 border-t border-gray-200">
                <div className="text-right">
                  <p className="font-bold text-[#0f0505] text-lg mt-2">
                    Susmita Singh
                  </p>
                  <p className="font-semibold underline text-gray-800">
                    – Principal
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </div>
  );
};

export default PrincipleMessage;
