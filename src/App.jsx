import { Route, Routes } from "react-router-dom";
import "./App.css";
import LoginPage from "./components/pages/login/LoginPage";
import OrderPage from "./Order/OrderPage";
import ErrorPage from "./components/pages/Error/ErrorPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />}/>
      <Route path="/order/:username" element={<OrderPage/>}/>
      <Route path="*" element={<ErrorPage/>}/>
    </Routes>
  );
}

export default App;
