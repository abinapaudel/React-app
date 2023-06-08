import {Navigate, Route, Routes} from "react-router-dom";
import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/RegisterPage";

const Navigation = () => {
  return (
    <Routes>
    <Route element={<Navigate to="sign-in" />} />
    <Route path="/sign-in" element={<LoginPage />} />
    <Route path="/sign-up" element={<RegisterPage />} />
  </Routes>
  )
}

export default Navigation