import { Route, Routes } from "react-router-dom";
import Blog from "./blog";
import Book from "./book";
import Resume from "./resume";

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
