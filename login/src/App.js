import "./App.css";
import Login from "./presentation/Login";
import { Routes, Route } from "react-router-dom";
import Home from "./presentation/Home";
import PrivateRoute from "./presentation/PrivateRoute";

function App() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route element={<PrivateRoute />}>
        <Route path="/home" element={<Home />} />
      </Route>
    </Routes>
  );
}

export default App;
