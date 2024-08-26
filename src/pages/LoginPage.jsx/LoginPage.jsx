import { useSelector } from "react-redux";
import LoginForm from "../../components/LoginForm/LoginForm";
import { selectIsLoggedIn } from "../../redux/auth/selectors";
import { Navigate } from "react-router-dom";

export const LoginPage = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  if (isLoggedIn) {
    return <Navigate to="/taskc" />;
  }
  return <LoginForm />;
};
export default LoginPage;
