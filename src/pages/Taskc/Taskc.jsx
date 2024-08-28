import { useSelector } from "react-redux";
import ContactsPage from "../../components/ContactsPage/ContactsPage";
import { selectIsLoggedIn } from "../../redux/auth/selectors";
import { Navigate } from "react-router-dom";

export const Taskc = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  if (!isLoggedIn) {
    return <Navigate to="/login" />;
  }

  return (
    <div>
      <ContactsPage />
    </div>
  );
};
export default Taskc;
