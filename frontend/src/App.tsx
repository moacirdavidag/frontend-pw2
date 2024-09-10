import React from "react";
import { ChakraProvider, Box } from "@chakra-ui/react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate,
} from "react-router-dom";
import BoasVindas from "./pages/BoasVindas/BoasVindas";
import LoginScreen from "./pages/BoasVindas/LoginScreen";

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
          <Route path="/" element={<WelcomeScreen />} /> {/* Página inicial */}
          <Route path="/login" element={<LoginScreen />} />{" "}
          {/* Página de Login */}
        </Routes>
      </Router>
    </ChakraProvider>
  );
}

export default App;
