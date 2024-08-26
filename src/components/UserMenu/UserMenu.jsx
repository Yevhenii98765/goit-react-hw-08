import { useDispatch } from "react-redux";
import { logoutThunk } from "../../redux/auth/operation";

export const UserMenu = () => {
  const dispatch = useDispatch();

  return (
    <div>
      <button onClick={() => dispatch(logoutThunk())}>Exit</button>
    </div>
  );
};
export default UserMenu;
