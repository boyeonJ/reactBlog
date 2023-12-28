import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootRoutes from "./page/RootRoutes";

function App() {
  const router = createBrowserRouter([{ path: "*", Component: RootRoutes }]);
  return <RouterProvider router={router} />;
}

export default App;
