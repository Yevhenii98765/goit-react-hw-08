import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchDataThunk } from "../../redux/contacts/operations";
import Container from "../../components/Container/Container";
import SearchBox from "../../components/SearchBox/SearchBox";
import ContactsForm from "../../components/ContactsForm/ContactsForm";
import ContactList from "../../components/ContactList/ContactList";
import { selectIsError, selectIsLoading } from "../../redux/contacts/slice";
import { selectIsLoggedIn } from "../../redux/auth/selectors";
import { Navigate } from "react-router-dom";

export const ContactsPage = () => {
  const dispatch = useDispatch();

  const isLoggedIn = useSelector(selectIsLoggedIn);
  const isLoading = useSelector(selectIsLoading);
  const isError = useSelector(selectIsError);

  useEffect(() => {
    dispatch(fetchDataThunk());
  }, [dispatch]);

  if (!isLoggedIn) {
    return <Navigate to="/login" />;
  }

  return (
    <div>
      <Container>
        <SearchBox />
        <ContactsForm />
        {isLoading && (
          <span className="loading loading-spinner text-primary"></span>
        )}
        {isError && <h1>Error</h1>}
        <ContactList />
      </Container>
    </div>
  );
};
export default ContactsPage;
