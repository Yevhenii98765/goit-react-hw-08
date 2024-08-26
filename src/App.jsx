import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import HomePage from "./pages/HomePage/HomePage";
import Taskc from "./pages/Taskc/Taskc";
import Login from "./pages/Login/Login";
import Signup from "./pages/Signup/Signup";
import NoteFound from "./pages/NotFound/NotFound";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="taskc" element={<Taskc />} />
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<Signup />} />
        </Route>
        <Route path="*" element={<NoteFound />} />
      </Routes>
    </>
  );
};

export default App;
