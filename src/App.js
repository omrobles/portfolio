import "./App.css";
import Home from "./components/Home";
import HashPage from "./components/HashPage";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="row">
      <Routes>
        <Route path="/page" element={<HashPage />} />
      </Routes>
      <Home />
    </div>
  );
}

export default App;
