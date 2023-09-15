import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import routes from "./routes/route";
document.title = 'Selçuk Üniversitesi Tıp Fakültesi Randevu Al'
ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={routes} />
);
