import { useSelector } from "react-redux";
import ContactsPage from "../../components/ContactsPage/ContactsPage";
import { selectIsLoggedIn } from "../../redux/auth/selectors";
import { Navigate } from "react-router-dom";
import toast from "react-hot-toast";

export const Taskc = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  if (!isLoggedIn) {
    toast.error("Sorry but this resource is private. Please login !😥");
    return <Navigate to="/login" />;
  }

  return (
    <div>
      <ContactsPage />
    </div>
  );
};
export default Taskc;
