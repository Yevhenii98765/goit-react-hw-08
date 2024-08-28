import { useDispatch, useSelector } from "react-redux";
import { logoutThunk } from "../../redux/auth/operation";
import { selectIsLoggedIn, selectUser } from "../../redux/auth/selectors";
import s from "./UserMenu.module.css";

export const UserMenu = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <div className={s.iner}>
      {isLoggedIn && <p>Welcome, {user.email} </p>}
      <button onClick={() => dispatch(logoutThunk())}>Exit</button>
    </div>
  );
};
export default UserMenu;
