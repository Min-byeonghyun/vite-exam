import { Route, Routes } from "react-router";
import "./App.css";
import Home from "./pages/index-page";
import CounterPage from "./pages/counter-page";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/counter" element={<CounterPage />} />
    </Routes>
  );
}

export default App;
