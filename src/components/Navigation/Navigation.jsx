import clsx from "clsx";
import { NavLink } from "react-router-dom";
import s from "./Navigation.module.css";
export const Navigation = () => {
  const buildLinkClass = ({ isActive }) => {
    return clsx(isActive && "activeNavLink");
  };

  return (
    <div>
      <ul className={s.iner}>
        <li>
          <NavLink className={buildLinkClass} to="/taskc">
            Taskc
          </NavLink>
        </li>
      </ul>
    </div>
  );
};
export default Navigation;
