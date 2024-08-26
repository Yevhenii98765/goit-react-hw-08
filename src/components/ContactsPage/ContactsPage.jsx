import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchDataThunk } from "../../redux/contactsOps";
import Container from "../../components/Container/Container";
import SearchBox from "../../components/SearchBox/SearchBox";
import ContactsForm from "../../components/ContactsForm/ContactsForm";
import ContactList from "../../components/ContactList/ContactList";
import {
  selectIsError,
  selectIsLoading,
} from "../../redux/Contacts/contactsSlice";

export const ContactsPage = () => {
  const dispatch = useDispatch();

  const isLoading = useSelector(selectIsLoading);
  const isError = useSelector(selectIsError);

  useEffect(() => {
    dispatch(fetchDataThunk());
  }, [dispatch]);

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
