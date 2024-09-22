import React from "react";
import { ChakraProvider, Box } from "@chakra-ui/react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import BoasVindas from "./pages/BoasVindas/BoasVindas";
import LoginScreen from "./pages/Login/LoginScreen";
import ForgotPasswordScreen from "./pages/ForgotPassword/ForgotPasswordScreen";
import RegisterScreen from "./pages/Register/RegisterScreen";
import Sobre from "./pages/Sobre/SobreScreen";


// Componente de Boas-Vindas
const WelcomeScreen: React.FC = () => {
  return (
    <Box>
      <BoasVindas />
    </Box>
  );
};

// Componente principal que define as rotas
function App() {
  return (
    <ChakraProvider>
      <Router>
        <Routes>
          <Route path="/" element={<WelcomeScreen />} />
          <Route path="/login" element={<LoginScreen />} />
          <Route path="/forgot-password" element={<ForgotPasswordScreen />} />
          <Route path="/register" element={<RegisterScreen />} />
          <Route path="/Sobre" element={<Sobre/>} /> 
        </Routes>
      </Router>
    </ChakraProvider>
  );
}
export default App;
