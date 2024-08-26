import { useSelector } from "react-redux";
import AuthNav from "../AuthNav/AuthNav";
import Navigation from "../Navigation/Navigation";
import s from "./AppBar.module.css";
import { selectIsLoggedIn, selectUser } from "../../redux/auth/selectors";
import UserMenu from "../UserMenu/UserMenu";
import { NavLink } from "react-router-dom";
import clsx from "clsx";

export const AppBar = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const user = useSelector(selectUser);

  const buildLinkClass = ({ isActive }) => {
    return clsx(isActive && "activeNavLink");
  };

  return (
    <div style={{ margin: "0, 10px" }}>
      <header className={s.header}>
        <div style={{ display: "flex", gap: "5px" }}>
          <NavLink className={buildLinkClass} to="/">
            Home
          </NavLink>
          {isLoggedIn && <Navigation />}
        </div>
        <div style={{ display: "flex", gap: "5px" }}>
          {isLoggedIn && <p>Welcome, {user.email} </p>}

          {isLoggedIn ? <UserMenu /> : <AuthNav />}
        </div>
      </header>
    </div>
  );
};
export default AppBar;
