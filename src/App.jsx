import { useDispatch, useSelector } from "react-redux";
import ContactList from "./components/ContactList/ContactList";
import ContactsForm from "./components/ContactsForm/ContactsForm";
import Container from "./components/Container/Container";
import SearchBox from "./components/SearchBox/SearchBox";
import { useEffect } from "react";
import { fetchDataThunk } from "./redux/contactsOps";
import { selectIsError, selectIsLoading } from "./redux/Contacts/contactsSlice";

const App = () => {
  const dispatch = useDispatch();

  const isLoading = useSelector(selectIsLoading);
  const isError = useSelector(selectIsError);

  useEffect(() => {
    dispatch(fetchDataThunk());
  }, [dispatch]);

  return (
    <>
      <Container>
        <SearchBox />
        <ContactsForm />
        {isLoading && (
          <span className="loading loading-spinner text-primary"></span>
        )}
        {isError && <h1>Error</h1>}
        <ContactList />
      </Container>
    </>
  );
};

export default App;
