import { NavLink } from "react-router-dom";
import {
  HiOutlineCalendarDays,
  HiOutlineCog6Tooth,
  HiOutlineHome,
  HiOutlineHomeModern,
  HiOutlineUsers,
} from "react-icons/hi2";
function MainNav() {
  const natLinkStyle =
    "visited:text-stone-800  hover:bg-stone-200 hover:rounded-xl flex items-center gap-2 text-stone-600 text-2xl font-semibold px-2  transition-all";
  return (
    <nav>
      <ul className="flex flex-col gap-3">
        <li>
          <NavLink
            to="/dashboard"
            className={({ isActive }) =>
              isActive ? natLinkStyle + " bg-stone-200" : natLinkStyle
            }
          >
            <HiOutlineHome />
            <span>Home</span>
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/bookings"
            className={({ isActive }) =>
              isActive ? natLinkStyle + " bg-stone-200" : natLinkStyle
            }
          >
            <HiOutlineCalendarDays />
            <span>Bookins</span>
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/cabins"
            className={({ isActive }) =>
              isActive ? natLinkStyle + " bg-stone-200" : natLinkStyle
            }
          >
            <HiOutlineHomeModern />
            <span>Cabins</span>
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/users"
            className={({ isActive }) =>
              isActive ? natLinkStyle + " bg-stone-200" : natLinkStyle
            }
          >
            <HiOutlineUsers />
            <span>User</span>
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/settings"
            className={({ isActive }) =>
              isActive ? natLinkStyle + " bg-stone-200" : natLinkStyle
            }
          >
            <HiOutlineCog6Tooth />
            <span>Settings</span>
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default MainNav;
