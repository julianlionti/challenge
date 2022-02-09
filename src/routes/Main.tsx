import { Route, Routes } from "react-router-dom";
import Dashboard from "../pages/Dashboard/Dashboard";

const Main = () => {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      {/* <Route path="about" element={<About />} /> */}
    </Routes>
  );
};

export default Main;
