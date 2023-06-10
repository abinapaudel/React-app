import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import Comments from "./pages/admin/comments/Comments";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import Post from "./pages/admin/post/Post";
import UserList from "./pages/users/UserList";
import SideNavbar from "./pages/admin/navbar/SideNavbar";
import { useSelector } from "react-redux";

const AuthRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/sign-in" />} />
      <Route path="/sign-in" element={<LoginPage />} />
      <Route path="/sign-up" element={<RegisterPage />} />
    </Routes>
  );
};
const MainRoutes = () => {
  return (
    <SideNavbar>
      <Routes>
        <Route path="/" element={<Navigate to="/dashboard" />} />
        <Route path="/dashboard" element={<UserList />} />
        <Route path="/users" element={<UserList />} />
        <Route path="/comments" element={<Comments />} />
        <Route path="/post" element={<Post />} />
      </Routes>
    </SideNavbar>
  );
};
const App = () => {
  const isAuthenticated = useSelector((state) => state.isAuthenticated);
  const location = useLocation();

  if (location.pathname === "/" && !isAuthenticated) {
    return <Navigate to="/sign-in" />;
  }
  console.log(isAuthenticated);
  return <div>{isAuthenticated ? <AuthRoutes /> : <MainRoutes />}</div>;
};

export default App;
