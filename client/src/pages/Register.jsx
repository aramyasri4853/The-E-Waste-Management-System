import { useState } from "react";
import axios from "axios";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Register() {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {

    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

  };

  const handleSubmit = async (e) => {

    e.preventDefault();

    try {

      const response = await axios.post(
        "http://localhost:5000/api/auth/register",
        formData
      );

      alert(response.data.message);

      setFormData({
        name: "",
        email: "",
        password: "",
      });

    } catch (error) {

      alert(error.response.data.message);

    }

  };

  return (
    <div className="min-h-screen bg-gray-100">

      <Navbar />

      <div className="flex justify-center items-center py-20 px-4">

        <div className="bg-white p-10 rounded-2xl shadow-2xl w-full max-w-md">

          <h1 className="text-4xl font-bold text-center text-green-700 mb-8">
            Register 📝
          </h1>

          <form onSubmit={handleSubmit} className="space-y-6">

            <div>

              <label className="block text-lg font-semibold mb-2">
                Full Name
              </label>

              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your name"
                className="w-full border p-4 rounded-xl outline-none focus:ring-2 focus:ring-green-500"
                required
              />

            </div>

            <div>

              <label className="block text-lg font-semibold mb-2">
                Email
              </label>

              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email"
                className="w-full border p-4 rounded-xl outline-none focus:ring-2 focus:ring-green-500"
                required
              />

            </div>

            <div>

              <label className="block text-lg font-semibold mb-2">
                Password
              </label>

              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Enter your password"
                className="w-full border p-4 rounded-xl outline-none focus:ring-2 focus:ring-green-500"
                required
              />

            </div>

            <button className="w-full bg-green-600 hover:bg-green-700 text-white py-4 rounded-xl text-lg font-semibold hover:scale-105 duration-300">

              Register

            </button>

          </form>

        </div>

      </div>

      <Footer />

    </div>
  );
}

export default Register;