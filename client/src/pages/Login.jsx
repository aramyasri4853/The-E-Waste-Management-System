import { useState } from "react";
import axios from "axios";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Login() {

  const [formData, setFormData] = useState({
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
    "http://localhost:5000/api/auth/login",
    formData
  );

  alert(response.data.message);
  localStorage.setItem("user", JSON.stringify(response.data));

  window.location.href = "/dashboard";

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
            Login 🔐
          </h1>

          <form onSubmit={handleSubmit} className="space-y-6">

            {/* Email */}
            <div>

              <label className="block text-lg font-semibold mb-2">
                Email
              </label>

              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                className="w-full border p-4 rounded-xl outline-none"
                onChange={handleChange}
                required
              />

            </div>

            {/* Password */}
            <div>

              <label className="block text-lg font-semibold mb-2">
                Password
              </label>

              <input
                type="password"
                name="password"
                placeholder="Enter your password"
                className="w-full border p-4 rounded-xl outline-none"
                onChange={handleChange}
                required
              />

            </div>

            {/* Button */}
            <button
              type="submit"
              className="w-full bg-green-600 hover:bg-green-700 text-white py-4 rounded-xl text-xl font-semibold"
            >
              Login
            </button>

          </form>

          <p className="text-center text-gray-600 mt-6">
            Don’t have an account?
            <span className="text-green-600 font-semibold cursor-pointer ml-2">
              Register
            </span>
          </p>

        </div>

      </div>

      <Footer />

    </div>
  );
}

export default Login;