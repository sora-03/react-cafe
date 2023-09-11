import { Route, Routes } from "react-router-dom";
import { Home } from "../page/home";
import { About } from "../page/about";
import { Page404 } from "../page/404";

export const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="*" element={<Page404 />} />
    </Routes>
  );
};
