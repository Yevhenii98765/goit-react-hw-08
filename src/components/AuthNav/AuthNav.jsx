import { NavLink } from "react-router-dom";
import s from "./AuthNav.module.css";
import clsx from "clsx";

export const AuthNav = () => {
  const buildLinkClass = ({ isActive }) => {
    return clsx(isActive && "activeNavLink");
  };
  return (
    <div>
      <ul className={s.iner}>
        <li>
          <NavLink className={buildLinkClass} to="/register">
            Register
          </NavLink>
        </li>
        <li>
          <NavLink className={buildLinkClass} to="/login">
            Log In
          </NavLink>
        </li>
      </ul>
    </div>
  );
};
export default AuthNav;
