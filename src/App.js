import "./App.css";
import { Route, Routes } from "react-router-dom";
import LoginPage from "./pages/Login/LoginPage";
import MyCourse from "./pages/MyCourse";

function App() {
  // const profile = localStorage.getItem("profile");

  return (
    <Routes>
      <Route path="/" exact element={<LoginPage />} />
      <Route path="/home" exact element={<MyCourse />} />
    </Routes>
  );
}

export default App;
