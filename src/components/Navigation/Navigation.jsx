import clsx from "clsx";
import { NavLink } from "react-router-dom";
import s from "./Navigation.module.css";
import { selectIsLoggedIn } from "../../redux/auth/selectors";
import { useSelector } from "react-redux";
export const Navigation = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  const buildLinkClass = ({ isActive }) => {
    return clsx(isActive && "activeNavLink");
  };

  return (
    <div>
      <ul className={s.iner}>
        <li>
          <NavLink className={buildLinkClass} to="/">
            Home
          </NavLink>
        </li>
        <li>
          {isLoggedIn && (
            <NavLink className={buildLinkClass} to="/contacts">
              Contact
            </NavLink>
          )}
        </li>
      </ul>
    </div>
  );
};
export default Navigation;
