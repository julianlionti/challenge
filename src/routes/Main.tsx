import { Route, Routes } from "react-router-dom";
import Dashboard from "../pages/Dashboard/Dashboard";
import UserCreation from "../pages/UserCreation/UserCreation";

const Main = () => {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/user_creation" element={<UserCreation />} />
    </Routes>
  );
};

export default Main;
