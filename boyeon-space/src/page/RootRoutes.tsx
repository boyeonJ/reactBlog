import { Route, Routes } from "react-router-dom";
import Blog from "./Blog";
import Book from "./Book";
import Resume from "./Resume";

const RootRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Blog />} />
      <Route path="/book" element={<Book />} />
      <Route path="/resume" element={<Resume />} />
    </Routes>
  );
};

export default RootRoutes;
