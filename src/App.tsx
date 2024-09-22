import React from "react";
import { ChakraProvider, Box } from "@chakra-ui/react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import BoasVindas from "./pages/BoasVindas/BoasVindas";
import LoginScreen from "./pages/Login/LoginScreen";
import ForgotPasswordScreen from "./pages/ForgotPassword/ForgotPasswordScreen";
import RegisterScreen from "./pages/Register/RegisterScreen";
import Home from "./pages/Home/Home";


function App() {
  return (
    <ChakraProvider>
      <Router>
        <Routes>
          <Route path="/" element={<BoasVindas />} />
          <Route path="/login" element={<LoginScreen />} />{" "}
          <Route path="/forgot-password" element={<ForgotPasswordScreen />} />
          <Route path="/register" element={<RegisterScreen />} />
          <Route path="/home" element={<Home />} />
        </Routes>
      </Router>
    </ChakraProvider>
  );
}

export default App;
