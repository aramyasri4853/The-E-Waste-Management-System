import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function About() {
  return (
    <div className="min-h-screen bg-gray-100">

      <Navbar />

      <section className="py-20 px-8 text-center">

        <h1 className="text-5xl font-bold text-green-700 mb-8">
          About Our Project ♻️
        </h1>

        <p className="text-xl text-gray-700 max-w-4xl mx-auto leading-10">

          E-Waste Management System is designed to help people safely
          dispose of electronic waste and promote environmental sustainability.

          Our platform encourages responsible recycling practices,
          reduces pollution, and creates awareness about the importance
          of managing electronic waste properly.

        </p>

      </section>

      {/* Mission Cards */}
      <section className="grid md:grid-cols-3 gap-8 px-10 pb-20">

        <div className="bg-white p-8 rounded-2xl shadow-lg hover:scale-105 duration-300">

          <h2 className="text-2xl font-bold text-green-600 mb-4">
            Our Mission
          </h2>

          <p className="text-gray-700">
            To create a cleaner and greener environment through
            responsible e-waste recycling.
          </p>

        </div>

        <div className="bg-white p-8 rounded-2xl shadow-lg hover:scale-105 duration-300">

          <h2 className="text-2xl font-bold text-green-600 mb-4">
            Our Vision
          </h2>

          <p className="text-gray-700">
            Building a sustainable future by reducing electronic pollution.
          </p>

        </div>

        <div className="bg-white p-8 rounded-2xl shadow-lg hover:scale-105 duration-300">

          <h2 className="text-2xl font-bold text-green-600 mb-4">
            Our Goal
          </h2>

          <p className="text-gray-700">
            Encourage communities to recycle electronic waste safely.
          </p>

        </div>

      </section>

      <Footer />

    </div>
  );
}

export default About;