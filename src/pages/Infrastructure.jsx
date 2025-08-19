// import React from "react";
import Layout from "../components/Layout";
const Infrastructure = () => {
  return (
    <Layout>
      <div className="min-h-screen bg-white flex flex-col">
        {/* Header + Navbar */}
        <header className="flex justify-between items-center px-6 py-4 bg-gray-100 shadow">
          <h1 className="text-2xl font-bold">Header</h1>
          {/* <nav className="space-x-4">
            <a href="#" className="text-gray-700 hover:text-blue-600">
              Home
            </a>
            <a href="#" className="text-gray-700 hover:text-blue-600">
              About
            </a>
            <a href="#" className="text-gray-700 hover:text-blue-600">
              Contact
            </a>
          </nav> */}
        </header>

        {/* Hero Section */}
        <section className="relative h-[60vh] w-full">
          <img
            loading="lazy"
            src="img/moreabout.jpg"
            alt="Hero Background"
            className="object-cover w-full h-full"
          />
          <div className="absolute inset-0 bg-black/50 flex flex-col justify-center items-center px-4">
            <h2 className="text-white text-4xl md:text-5xl font-bold mb-4 text-center">
              Infrastructure
            </h2>
            <p className="text-white text-lg md:text-xl text-center max-w-2xl">
              “True education nurtures both the intellect and the soul.”
            </p>
          </div>
        </section>

        {/* Content Sections */}
        <main className="max-w-6xl mx-auto px-4 py-12 space-y-16 flex-1">
          {/* Text Left - Image Right */}
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="flex-1 text-gray-700 leading-relaxed">
              <p>
                The Computer Lab at our institution is a modern,
                technology-driven space designed to empower students with the
                skills and resources required in today’s digital era. Equipped
                with high-speed internet, advanced computer systems, and the
                latest software applications, the lab provides a conducive
                environment for learning, research, and innovation. Each
                workstation is ergonomically designed to ensure comfort during
                long hours of practice, while the arrangement of systems allows
                for collaborative as well as individual work. The lab is also
                supported by interactive teaching aids, printers, and multimedia
                tools to enhance the overall learning experience. Students have
                access to a variety of programming platforms, design tools, and
                subject-specific applications that cater to diverse academic
                needs—ranging from coding and web development to data analysis
                and graphic design. To ensure smooth functioning, the lab is
                managed by skilled technical staff who provide assistance,
                troubleshoot issues, and ensure that all systems remain updated
                and secure. Regular workshops, training sessions, and
                project-based learning activities are conducted in the lab to
                enhance students’ practical knowledge and problem-solving
                abilities.
              </p>
            </div>
            <div className="flex-1">
              <img
                loading="lazy"
                src="image/lab.jpg"
                alt="Sample 1"
                className="rounded-xl shadow-lg object-cover w-full aspect-video"
              />
            </div>
          </div>

          {/* Image Left - Text Right */}
          <div className="flex flex-col md:flex-row-reverse items-center gap-8">
            <div className="flex-1 text-gray-700 leading-relaxed">
              <p>
                The Library of our institution is a vibrant center of knowledge,
                learning, and intellectual growth. Spacious, well-lit, and
                thoughtfully organized, it offers students and faculty a quiet
                and comfortable environment for study and research. The library
                houses an extensive collection of books, journals, periodicals,
                reference materials, and digital resources covering a wide range
                of subjects to meet the academic and recreational reading needs
                of its users. In addition to physical resources, the library
                provides access to e-books, online journals, and research
                databases, enabling learners to explore information beyond the
                shelves. A dedicated reading area, equipped with comfortable
                seating and proper lighting, ensures a focused study
                environment, while separate reference and issue counters make
                book borrowing and assistance quick and efficient. The library
                is managed by trained staff who guide students in locating
                resources, using digital tools, and developing effective
                research skills. Regular book exhibitions, reading programs, and
                literary activities encourage a culture of reading and critical
                thinking among students. More than just a place to store books,
                our library is a hub of ideas and inspiration—nurturing
                curiosity, enhancing academic performance, and fostering a
                lifelong love for learning in every visitor.
              </p>
            </div>
            <div className="flex-1">
              <img
                loading="lazy"
                src="img/library_page-0001.jpg"
                alt="Sample 2"
                className="rounded-xl shadow-lg object-cover w-full"
              />
            </div>
          </div>

          {/* Text Left - Image Right */}
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="flex-1 text-gray-700 leading-relaxed">
              <p>
                The infrastructure of Shri Guru Nanak Doon Vale School is
                thoughtfully designed to create a safe, stimulating, and
                learner-friendly environment that supports holistic education.
                The campus is equipped with spacious, well-ventilated classrooms
                that encourage interactive learning, along with smart boards and
                modern teaching aids to integrate technology into education. The
                school boasts specialized facilities such as a fully equipped
                science laboratory, a modern computer lab with high-speed
                internet, a rich library stocked with a wide variety of books
                and digital resources, and dedicated rooms for art, music, and
                other creative pursuits. Sports facilities include a playground,
                indoor activity areas, and provisions for games that promote
                physical fitness and teamwork. The school also maintains a
                hygienic cafeteria, clean drinking water facilities, and
                well-maintained washrooms to ensure the health and comfort of
                students. Safety is a top priority, with secure entry points,
                CCTV surveillance, and trained staff to handle emergencies. Lush
                green surroundings and open spaces add to the campus’s appeal,
                creating an inspiring environment where students can grow
                academically, physically, and emotionally.
              </p>
            </div>
            <div className="flex-1">
              <img
                loading="lazy"
                src="image/infra.jpg"
                alt="Sample 3"
                className="rounded-xl shadow-lg object-cover w-full"
              />
            </div>
          </div>
          <div className="flex flex-col md:flex-row-reverse items-center gap-8">
            <div className="flex-1 text-gray-700 leading-relaxed">
              <p>
                The Science Laboratory at our institution is a dedicated space
                designed to ignite curiosity, encourage experimentation, and
                foster a hands-on understanding of scientific concepts.
                Well-ventilated and fully equipped with modern apparatus,
                instruments, and safety measures, the laboratory provides
                students with the ideal environment to explore the wonders of
                Physics, Chemistry, and Biology. Workbenches are spacious and
                organized, with dedicated sections for different branches of
                science, ensuring that practical sessions are systematic and
                productive. The lab is stocked with quality glassware,
                chemicals, and specialized models to aid in demonstrations and
                student experiments. Proper storage facilities and labeled
                cabinets ensure easy access to materials while maintaining
                cleanliness and order. Safety is a top priority — the lab is
                equipped with fire extinguishers, first-aid kits, exhaust fans,
                and clear safety guidelines displayed prominently for all
                students. Teachers and lab assistants work closely with
                students, guiding them through practical procedures, helping
                them record observations, and encouraging them to ask questions
                beyond the textbook. Regular science workshops, exhibitions, and
                hands-on projects are conducted to give students an opportunity
                to present their innovative ideas.
              </p>
            </div>
            <div className="flex-1">
              <img
                loading="lazy"
                src="img/science_labs.jpg"
                alt="Science Laboratory"
                className="rounded-xl shadow-lg object-cover w-full"
              />
            </div>
          </div>

          {/* NEW SECTION - Playground & Sports Facilities */}
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="flex-1 text-gray-700 leading-relaxed">
              <p>
                The Sports and Physical Education facilities at our school are
                designed to promote health, fitness, discipline, and team spirit
                among students. Our spacious playground provides ample space for
                outdoor games such as cricket, football, volleyball, and
                athletics, while dedicated indoor areas cater to badminton,
                table tennis, chess, and yoga. The school understands the
                importance of sports as an integral part of education, and
                therefore ensures that students have access to high-quality
                sports equipment, trained coaches, and structured practice
                sessions. Regular inter-house and inter-school tournaments
                foster a healthy competitive spirit, encouraging students to
                strive for excellence both on and off the field. Physical
                education classes are conducted systematically to improve
                stamina, flexibility, and coordination, while also teaching
                students about sportsmanship, resilience, and mutual respect.
                The school also organizes annual sports days, fun races, and
                fitness challenges where every student is encouraged to
                participate, regardless of skill level.
              </p>
            </div>
            <div className="flex-1">
              <img
                loading="lazy"
                src="image/sports.jpg"
                alt="Playground and Sports"
                className="rounded-xl shadow-lg object-cover w-full aspect-video"
              />
            </div>
          </div>
        </main>

        {/* Footer */}
        {/* <footer className="bg-gray-800 text-white text-center py-6">
          Footer
        </footer> */}
      </div>
    </Layout>
  );
};

export default Infrastructure;
