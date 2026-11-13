import type { ReactNode } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import LoginPage from "./pages/LoginPage";
import TorneiosPage from "./pages/TorneiosPage";
import InscricoesPage from "./pages/InscricoesPage";
import JogosPage from "./pages/JogosPage";
import PermissoesPage from "./pages/PermissoesPage";
import UsuarioDetailPage from "./pages/UsuarioDetailPage";
import UsuarioPermissoesPage from "./pages/UsuarioPermissoesPage";
import UsuariosPage from "./pages/UsuariosPage";
import { obterToken } from "./services/auth";

function RequireAuth({ children }: { children: ReactNode }) {
  return obterToken() ? children : <Navigate to="/login" replace />;
}

function App() {
  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} />
      <Route element={<RequireAuth><Layout /></RequireAuth>}>
        <Route path="/" element={<Home />} />
        <Route path="/usuarios" element={<UsuariosPage />} />
        <Route path="/usuarios/:id" element={<UsuarioDetailPage />} />
        <Route path="/permissoes" element={<PermissoesPage />} />
        <Route path="/jogos" element={<JogosPage />} />
        <Route path="/torneios" element={<TorneiosPage />} />
        <Route path="/inscricoes" element={<InscricoesPage />} />
        <Route path="/atribuir-permissoes" element={<UsuarioPermissoesPage />} />
        <Route path="*" element={<h1>Página não encontrada</h1>} />
      </Route>
    </Routes>
  );
}
export default App;
