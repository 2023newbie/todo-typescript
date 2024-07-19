import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="absolute top-4 flex min-w-96 justify-between rounded-md border-2 border-slate-700 p-2">
      <NavLink
        className={({ isActive }) =>
          isActive
            ? "text-slate-400 hover:scale-105"
            : "hover:scale-105 hover:text-slate-400"
        }
        to="/"
      >
        Home
      </NavLink>
      <NavLink
        className={({ isActive }) =>
          isActive
            ? "text-slate-400 hover:scale-105"
            : "hover:scale-105 hover:text-slate-400"
        }
        to="/todo"
      >
        To Do
      </NavLink>
      <NavLink
        className={({ isActive }) =>
          isActive
            ? "text-slate-400 hover:scale-105"
            : "hover:scale-105 hover:text-slate-400"
        }
        to="/login"
      >
        Login
      </NavLink>
      <NavLink
        className={({ isActive }) =>
          isActive
            ? "text-slate-400 hover:scale-105"
            : "hover:scale-105 hover:text-slate-400"
        }
        to="/signup"
      >
        Signup
      </NavLink>
    </div>
  );
};

export default Navbar;
