import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import WelcomeScreen from "./pages/BoasVindas/BoasVindas";
import LoginScreen from "./pages/Login/LoginScreen";
import ForgotPasswordScreen from "./pages/ForgotPassword/ForgotPasswordScreen";
import RegisterScreen from "./pages/Register/RegisterScreen";
import Sobre from "./pages/Sobre/SobreScreen";
import Contato from "./pages/Contato/ContatoScreen";
import Equipe from "./pages/Equipe/EquipeScreen";
import Perfil from "./pages/Perfil/PerfilScreen";

import Home from "./pages/Home/Home";
import Dashboard from "./pages/Dashboard/DashboardScreen";
import DetalhesProduto from "./pages/DetalhesProduto/DetalhesProduto";

function App() {
  return (
    <ChakraProvider>
      <Router>
        <Routes>
          <Route path="/" element={<WelcomeScreen />} />
          <Route path="/login" element={<LoginScreen />} />
          <Route path="/forgot-password" element={<ForgotPasswordScreen />} />
          <Route path="/register" element={<RegisterScreen />} />
          <Route path="/sobre" element={<Sobre />} />
          <Route path="/contato" element={<Contato />} />
          <Route path="/equipe" element={<Equipe />} />
          <Route path="/home" element={<Home />} />
          <Route path="/perfil" element={<Perfil/>} /> 
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/produto/:id" element={<DetalhesProduto />} />
        </Routes>
      </Router>
    </ChakraProvider>
  );
}
export default App;
