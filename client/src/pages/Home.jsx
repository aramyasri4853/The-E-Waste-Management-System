import { motion } from "framer-motion";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Home() {
  return (
    <div className="min-h-screen bg-gray-100">

      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="flex flex-col justify-center items-center text-center h-[80vh] px-4 bg-gradient-to-b from-green-50 to-gray-100"
      >

        <h1 className="text-5xl font-bold text-green-700 mb-6">
          Recycle E-Waste Responsibly ♻️
        </h1>

        <p className="text-xl text-gray-700 max-w-2xl mb-8">
          Join us in creating a cleaner and greener future by properly
          recycling electronic waste and protecting the environment.
        </p>

        <button className="bg-green-600 hover:bg-green-700 hover:scale-105 duration-300 text-white px-8 py-3 rounded-xl text-lg shadow-lg transition">
          Get Started
        </button>

      </motion.section>

      {/* Services Section */}
      <section className="py-20 px-8 bg-white">

        <h2 className="text-4xl font-bold text-center text-green-700 mb-14">
          Our Services
        </h2>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="grid md:grid-cols-3 gap-10"
        >

          {/* Card 1 */}
          <div className="bg-gray-100 p-8 rounded-2xl shadow-lg hover:scale-105 duration-300">

            <h3 className="text-2xl font-bold text-green-600 mb-4">
              E-Waste Collection
            </h3>

            <p className="text-gray-700">
              We collect unused electronic devices safely and responsibly
              from homes and industries.
            </p>

          </div>

          {/* Card 2 */}
          <div className="bg-gray-100 p-8 rounded-2xl shadow-lg hover:scale-105 duration-300">

            <h3 className="text-2xl font-bold text-green-600 mb-4">
              Recycling Process
            </h3>

            <p className="text-gray-700">
              Proper recycling methods help reduce pollution and recover
              valuable materials.
            </p>

          </div>

          {/* Card 3 */}
          <div className="bg-gray-100 p-8 rounded-2xl shadow-lg hover:scale-105 duration-300">

            <h3 className="text-2xl font-bold text-green-600 mb-4">
              Environmental Awareness
            </h3>

            <p className="text-gray-700">
              Educating people about responsible disposal and sustainable
              environmental practices.
            </p>

          </div>

        </motion.div>

      </section>

      {/* Footer */}
      <Footer />

    </div>
  );
}

export default Home;