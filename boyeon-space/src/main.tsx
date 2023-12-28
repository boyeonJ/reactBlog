import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import Blog from "./page/Blog";
import Resume from "./page/Resume";
import Book from "./page/Book";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "blog", element: <Blog /> },
      { path: "resume", element: <Resume /> },
      { path: "book", element: <Book /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
