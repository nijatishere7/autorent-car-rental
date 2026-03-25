// React Router
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Components
import Home from "./components/Home";
import Layout from "./components/Layout";

// Pages
import Login from "./pages/Login";
import Register from "./pages/Register";

const App = () => {
  return (
    <Router>
      <Layout />
      <Routes>
        <Route path="/" index element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </Router>
  );
};

export default App;
