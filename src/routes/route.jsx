import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/home/index";

import SignUp from "../pages/signup";
import NotSignUp from "../pages/notsignup";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/kayitol",
    element: <SignUp />,
  },
  {
    path: "kayitolmadan",
    element: <NotSignUp />,
  },
]);

export default routes;
