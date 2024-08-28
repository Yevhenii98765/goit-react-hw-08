import { useSelector } from "react-redux";
import AuthNav from "../AuthNav/AuthNav";
import Navigation from "../Navigation/Navigation";
import s from "./AppBar.module.css";
import { selectIsLoggedIn } from "../../redux/auth/selectors";
import UserMenu from "../UserMenu/UserMenu";

export const AppBar = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <div style={{ margin: "0, 10px" }}>
      <header className={s.header}>
        <div style={{ display: "flex", gap: "5px" }}>
          <Navigation />
        </div>
        <div style={{ display: "flex", gap: "5px" }}>
          {isLoggedIn ? <UserMenu /> : <AuthNav />}
        </div>
      </header>
    </div>
  );
};
export default AppBar;
