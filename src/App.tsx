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
import NotificationsScreen from "./pages/Notifications/NotificationsScreen";
import Pedidos from "./pages/Pedidos/Pedidos";
import AuthRoute from "./components/AuthRoute/AuthRoute";
import { AuthProvider } from "./context/AuthContext";
import PedidosDashboard from "./pages/Dashboard/PedidosDashboard/PedidosDashboard";
import AdminRoute from "./components/AdminRoute/AdminRoute";
import ProdutoDashboard from "./pages/Dashboard/ProdutoDashboard/ProdutoDashboard";

function App() {
  return (
    <ChakraProvider>
      <AuthProvider>
        <Router>
          <Routes>
            <Route path="/" element={<WelcomeScreen />} />
            <Route path="/login" element={<LoginScreen />} />
            <Route path="/forgot-password" element={<ForgotPasswordScreen />} />
            <Route path="/register" element={<RegisterScreen />} />
            <Route path="/sobre" element={<Sobre />} />
            <Route path="/contato" element={<Contato />} />
            <Route path="/equipe" element={<Equipe />} />
            {/* Rotas privadas */}
            <Route path="/home" element={<AuthRoute element={<Home />} />} />
            <Route
              path="/perfil"
              element={<AuthRoute element={<Perfil />} />}
            />
            
            <Route
              path="/produto/:id"
              element={<AuthRoute element={<DetalhesProduto />} />}
            />
            <Route
              path="/notificacoes"
              element={<AuthRoute element={<NotificationsScreen />} />}
            />
            <Route
              path="/pedidos"
              element={<AuthRoute element={<Pedidos />} />}
            />
            <Route
              path="/pedidos"
              element={<AuthRoute element={<Pedidos />} />}
            />
            {/* Rotas de Admin */}
            <Route
              path="/dashboard"
              element={<AdminRoute element={<Dashboard />} />}
            />
            <Route
              path="/dashboard/pedidos"
              element={<AdminRoute element={<Dashboard children={<PedidosDashboard />} />} />}
            />
            <Route
              path="/dashboard/produtos"
              element={<AdminRoute element={<Dashboard children={<ProdutoDashboard />} />} />}
            />
          </Routes>
        </Router>
      </AuthProvider>
    </ChakraProvider>
  );
}
export default App;
