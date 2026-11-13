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
import { obterToken, temPapel } from "./services/auth";

function RequireAuth({ children }: { children: ReactNode }) {
  return obterToken() ? children : <Navigate to="/login" replace />;
}

function RequireAdmin({ children }: { children: ReactNode }) {
  return temPapel("ADMIN") ? children : <Navigate to="/" replace />;
}

function App() {
  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} />
      <Route element={<RequireAuth><Layout /></RequireAuth>}>
        <Route path="/" element={<Home />} />
        <Route path="/usuarios" element={<RequireAdmin><UsuariosPage /></RequireAdmin>} />
        <Route path="/usuarios/:id" element={<RequireAdmin><UsuarioDetailPage /></RequireAdmin>} />
        <Route path="/permissoes" element={<RequireAdmin><PermissoesPage /></RequireAdmin>} />
        <Route path="/jogos" element={<JogosPage />} />
        <Route path="/torneios" element={<TorneiosPage />} />
        <Route path="/inscricoes" element={<InscricoesPage />} />
        <Route path="/atribuir-permissoes" element={<RequireAdmin><UsuarioPermissoesPage /></RequireAdmin>} />
        <Route path="*" element={<h1>Página não encontrada</h1>} />
      </Route>
    </Routes>
  );
}
export default App;
