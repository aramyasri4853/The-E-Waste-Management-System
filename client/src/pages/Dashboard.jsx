import { useState, useEffect } from "react";
import axios from "axios";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Dashboard() {

  const [formData, setFormData] = useState({
    deviceName: "",
    category: "Mobile",
    condition: "Working",
    address: "",
  });

  const [ewastes, setEwastes] = useState([]);

  const [editId, setEditId] = useState(null);

  // ================= FETCH =================

  const fetchEwastes = async () => {

    try {

      const response = await axios.get(
        "http://localhost:5000/api/ewaste"
      );

      setEwastes(response.data);

    } catch {

      alert("Server Error");
    }
  };

  useEffect(() => {

    fetchEwastes();

  }, []);

  // ================= HANDLE INPUT =================

  const handleChange = (e) => {

    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // ================= SUBMIT / UPDATE =================

  const handleSubmit = async (e) => {

    e.preventDefault();

    try {

      // UPDATE
      if (editId) {

        await axios.put(
          "http://localhost:5000/api/ewaste/" + editId,
          formData
        );

        alert("Item updated successfully");

        setEditId(null);

      } else {

        // CREATE
        await axios.post(
          "http://localhost:5000/api/ewaste",
          formData
        );

        alert("E-Waste submitted successfully");
      }

      fetchEwastes();

      setFormData({
        deviceName: "",
        category: "Mobile",
        condition: "Working",
        address: "",
      });

    } catch {

      alert("Server Error");
    }
  };

  // ================= DELETE =================

  const deleteEwaste = async (id) => {

    try {

      await axios.delete(
        "http://localhost:5000/api/ewaste/" + id
      );

      alert("Item deleted successfully");

      fetchEwastes();

    } catch {

      alert("Server Error");
    }
  };

  // ================= EDIT =================

  const editEwaste = (item) => {

    setFormData({
      deviceName: item.deviceName,
      category: item.category,
      condition: item.condition,
      address: item.address,
    });

    setEditId(item._id);
  };

  return (

    <div className="min-h-screen bg-gray-100">

      <Navbar />

      <div className="py-16 px-4">

        <h1 className="text-6xl font-bold text-center text-green-700 mb-16">
          E-Waste Dashboard ♻️
        </h1>

        {/* FORM */}

        <div className="max-w-4xl mx-auto bg-white p-10 rounded-3xl shadow-2xl">

          <h2 className="text-5xl font-bold text-center text-green-700 mb-10">

            {editId ? "Update E-Waste" : "Submit E-Waste"}

          </h2>

          <form onSubmit={handleSubmit} className="space-y-8">

            <input
              type="text"
              name="deviceName"
              placeholder="Device Name"
              value={formData.deviceName}
              onChange={handleChange}
              required
              className="w-full p-5 border-2 rounded-xl"
            />

            <select
              name="category"
              value={formData.category}
              onChange={handleChange}
              className="w-full p-5 border-2 rounded-xl"
            >
              <option>Mobile</option>
              <option>Laptop</option>
              <option>TV</option>
              <option>Battery</option>
            </select>

            <select
              name="condition"
              value={formData.condition}
              onChange={handleChange}
              className="w-full p-5 border-2 rounded-xl"
            >
              <option>Working</option>
              <option>Damaged</option>
              <option>Scrap</option>
            </select>

            <textarea
              name="address"
              placeholder="Address"
              value={formData.address}
              onChange={handleChange}
              required
              rows="4"
              className="w-full p-5 border-2 rounded-xl"
            ></textarea>

            <button
              type="submit"
              className="w-full bg-green-600 hover:bg-green-700 text-white text-2xl font-bold py-5 rounded-xl"
            >

              {editId ? "Update E-Waste" : "Submit E-Waste"}

            </button>

          </form>
        </div>

        {/* ITEMS */}

        <div className="max-w-6xl mx-auto mt-20">

          <h2 className="text-5xl font-bold text-center text-green-700 mb-12">
            Submitted Items
          </h2>

          <div className="grid md:grid-cols-2 gap-10">

            {ewastes.map((item) => (

              <div
                key={item._id}
                className="bg-white p-8 rounded-3xl shadow-xl"
              >

                <h3 className="text-3xl font-bold text-green-700 mb-5">
                  {item.deviceName}
                </h3>

                <p className="text-xl mb-3">
                  <strong>Category:</strong> {item.category}
                </p>

                <p className="text-xl mb-3">
                  <strong>Condition:</strong> {item.condition}
                </p>

                <p className="text-xl mb-3">
                  <strong>Address:</strong> {item.address}
                </p>

                <p className="text-xl mb-3">
                  <strong>Status:</strong> {item.status}
                </p>

                {/* BUTTONS */}

                <div className="flex gap-4 mt-5">

                  <button
                    onClick={() => editEwaste(item)}
                    className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl text-lg font-semibold"
                  >
                    Edit
                  </button>

                  <button
                    onClick={() => deleteEwaste(item._id)}
                    className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-xl text-lg font-semibold"
                  >
                    Delete
                  </button>

                </div>

              </div>
            ))}

          </div>
        </div>
      </div>

      <Footer />

    </div>
  );
}

export default Dashboard;