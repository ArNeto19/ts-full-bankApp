import { Route, Routes } from "react-router-dom";
import { Conta } from "./pages/Conta";
import Home from "./pages/Home";
import { Login } from "./pages/Login";
import { SignUp } from "./pages/SignUp";

const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/conta/" element={<Conta />} />
    </Routes>
  );
};

export default MainRoutes;
