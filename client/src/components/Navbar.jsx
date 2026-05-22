import { FaRecycle } from "react-icons/fa";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-green-600 text-white px-8 py-4 flex justify-between items-center shadow-lg sticky top-0 z-50">

      {/* Logo */}
      <div className="flex items-center gap-2 text-2xl font-bold">
        <FaRecycle />
        <h1>E-Waste</h1>
      </div>

      {/* Navigation */}
      <ul className="flex gap-6 text-lg">

        <li>
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? "text-yellow-300 font-bold"
                : "hover:text-yellow-300 duration-300"
            }
          >
            Home
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive
                ? "text-yellow-300 font-bold"
                : "hover:text-yellow-300 duration-300"
            }
          >
            About
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              isActive
                ? "text-yellow-300 font-bold"
                : "hover:text-yellow-300 duration-300"
            }
          >
            Contact
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/login"
            className={({ isActive }) =>
              isActive
                ? "text-yellow-300 font-bold"
                : "hover:text-yellow-300 duration-300"
            }
          >
            Login
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/register"
            className={({ isActive }) =>
              isActive
                ? "text-yellow-300 font-bold"
                : "hover:text-yellow-300 duration-300"
            }
          >
            Register
          </NavLink>
        </li>

      </ul>

    </nav>
  );
}

export default Navbar;