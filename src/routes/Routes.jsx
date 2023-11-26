import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../pages/Home/Home";
import UserRoute from "./UserRoute";
import PrivateRoute from "./PrivateRoute";
import LoginPage from "../pages/Auth/LoginPage";
import Errorpage from "../pages/Errorpage/Errorpage";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: (
      <PrivateRoute
        allowedRoles={["Admin", "User"]}
        path={"/login"}
      >
        <Main />
      </PrivateRoute>
    ),
    children: [
      {
        path: "/",
        element: <Home />,
      }
    ],
  },
  {
    path: "/login",
    element: (
      <UserRoute path={"/"}>
        <LoginPage />
      </UserRoute>
    ),
  },
  {
    path: "*",
    element: <Errorpage />,
  },
]);
