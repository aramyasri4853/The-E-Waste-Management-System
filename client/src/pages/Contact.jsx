import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Contact() {
  return (
    <div className="min-h-screen bg-gray-100">

      <Navbar />

      <section className="py-20 px-8">

        <h1 className="text-5xl font-bold text-center text-green-700 mb-12">
          Contact Us 📞
        </h1>

        <div className="max-w-3xl mx-auto bg-white p-10 rounded-2xl shadow-lg">

          <form className="space-y-6">

            <div>
              <label className="block text-lg font-semibold mb-2">
                Name
              </label>

              <input
                type="text"
                placeholder="Enter your name"
                className="w-full border p-4 rounded-xl outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>

            <div>
              <label className="block text-lg font-semibold mb-2">
                Email
              </label>

              <input
                type="email"
                placeholder="Enter your email"
                className="w-full border p-4 rounded-xl outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>

            <div>
              <label className="block text-lg font-semibold mb-2">
                Message
              </label>

              <textarea
                rows="5"
                placeholder="Enter your message"
                className="w-full border p-4 rounded-xl outline-none focus:ring-2 focus:ring-green-500"
              ></textarea>
            </div>

            <button className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-xl text-lg hover:scale-105 duration-300">

              Send Message

            </button>

          </form>

        </div>

      </section>

      <Footer />

    </div>
  );
}

export default Contact;