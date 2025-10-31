import { Route, Routes } from "react-router";
import "./App.css";
import Home from "./pages/index-page";
import CounterPage from "./pages/counter-page";
import TodoListPage from "./pages/todo-list-page";
import TodoDetailPage from "./pages/todo-detail-page";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/counter" element={<CounterPage />} />
      <Route path="/todolist" element={<TodoListPage />} />
      <Route path="/todolist/:id" element={<TodoDetailPage />} />
    </Routes>
  );
}

export default App;
