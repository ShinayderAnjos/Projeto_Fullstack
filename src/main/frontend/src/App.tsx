import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import JogosPage from "./pages/JogosPage";
import PermissoesPage from "./pages/PermissoesPage";
import UsuarioDetailPage from "./pages/UsuarioDetailPage";
import UsuarioPermissoesPage from "./pages/UsuarioPermissoesPage";
import UsuariosPage from "./pages/UsuariosPage";

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/usuarios" element={<UsuariosPage />} />
        <Route path="/usuarios/:id" element={<UsuarioDetailPage />} />
        <Route path="/permissoes" element={<PermissoesPage />} />
        <Route path="/jogos" element={<JogosPage />} />
        <Route path="/atribuir-permissoes" element={<UsuarioPermissoesPage />} />
        <Route path="*" element={<h1>Página não encontrada</h1>} />
      </Route>
    </Routes>
  );
}
export default App;
