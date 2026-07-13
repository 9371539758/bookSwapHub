import { createBrowserRouter } from "react-router-dom";
import Register from "../features/auth/pages/Register";
import { Login } from "../features/auth/pages/Login";
const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <h1
        style={{
          textAlign: "center",
          marginTop: "100px",
          color: "#2563eb",
          fontSize: "3rem",
          fontFamily: "Arial, sans-serif",
        }}
      >
        Hello
      </h1>
    ),
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