import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import HomePage from "./pages/HomePage/HomePage";
import Taskc from "./pages/Taskc/Taskc";
import RegistrationPage from "./pages/RegistrationPage/RegistrationPage";
import NoteFound from "./pages/NotFound/NotFound";
import LoginPage from "./pages/LoginPage.jsx/LoginPage";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="taskc" element={<Taskc />} />
          <Route path="login" element={<LoginPage />} />
          <Route path="register" element={<RegistrationPage />} />
        </Route>
        <Route path="*" element={<NoteFound />} />
      </Routes>
    </>
  );
};

export default App;
