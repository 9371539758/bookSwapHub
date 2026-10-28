import { createBrowserRouter } from "react-router-dom";
import Register from "../features/auth/pages/Register";
import { Login } from "../features/auth/pages/Login";
import GoogleLoginSuccess from "../pages/GoogleLoginSuccess.jsx"
const router = createBrowserRouter([
  {
    path: "/",
    element:<GoogleLoginSuccess/>
  },
  {
    path: "/register",
    element:<Register/>
  },
  {
    path:"/login",
    element:<Login/>
  }
]);

export default router;