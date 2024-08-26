import AuthNav from "../AuthNav/AuthNav";
import Navigation from "../Navigation/Navigation";
import s from "./AppBar.module.css";

export const AppBar = () => {
  return (
    <div>
      <header className={s.header}>
        <div>
          <h2>Auth</h2>
        </div>
        <div style={{ display: "flex", gap: "5px" }}>
          <Navigation />
          <AuthNav />
        </div>
      </header>
    </div>
  );
};
export default AppBar;
