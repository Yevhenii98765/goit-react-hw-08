import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import HomePage from "./pages/HomePage/HomePage";
import RegistrationPage from "./pages/RegistrationPage/RegistrationPage";
import NoteFound from "./pages/NotFound/NotFound";
import LoginPage from "./pages/LoginPage.jsx/LoginPage";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { refrechUserThunk } from "./redux/auth/operations";
import { selectIsRefreshing } from "./redux/auth/selectors";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import RestrictedRoute from "./components/RestrictedRoute/RestrictedRoute";
import ContactsPage from "./pages/ContactsPage/ContactsPage";

const App = () => {
  const isRefrech = useSelector(selectIsRefreshing);
  const dispath = useDispatch();
  useEffect(() => {
    dispath(refrechUserThunk());
  }, [dispath]);
  return isRefrech ? null : (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route
            path="contacts"
            element={
              <PrivateRoute>
                <ContactsPage />
              </PrivateRoute>
            }
          />
          <Route
            path="login"
            element={
              <RestrictedRoute>
                <LoginPage />
              </RestrictedRoute>
            }
          />
          <Route
            path="register"
            element={
              <RestrictedRoute>
                <RegistrationPage />
              </RestrictedRoute>
            }
          />
        </Route>
        <Route path="*" element={<NoteFound />} />
      </Routes>
    </>
  );
};

export default App;
