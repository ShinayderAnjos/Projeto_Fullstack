import { useState } from "react";
import JogosPage from "./pages/JogosPage";
import PermissoesPage from "./pages/PermissoesPage";
import UsuarioPermissoesPage from "./pages/UsuarioPermissoesPage";
import UsuariosPage from "./pages/UsuariosPage";

type Tela = "usuarios" | "permissoes" | "jogos" | "usuario-permissoes";

function App() {
  const [tela, setTela] = useState<Tela>("usuarios");

  return (
    <main>
      <header>
        <h1>BraullyBet</h1>
        <p>Venha jogar na BB, BraullyBet a melhor casa de apostas de Portugal (Não somos mais permitidos no Brasil)</p>
      </header>

      <nav>
        <button className={tela === "usuarios" ? "ativo" : ""} onClick={() => setTela("usuarios")}>Usuários</button>
        <button className={tela === "permissoes" ? "ativo" : ""} onClick={() => setTela("permissoes")}>Permissões</button>
        <button className={tela === "jogos" ? "ativo" : ""} onClick={() => setTela("jogos")}>Jogos</button>
        <button className={tela === "usuario-permissoes" ? "ativo" : ""} onClick={() => setTela("usuario-permissoes")}>Permissões do usuário</button>
      </nav>

      {tela === "usuarios" && <UsuariosPage />}
      {tela === "permissoes" && <PermissoesPage />}
      {tela === "jogos" && <JogosPage />}
      {tela === "usuario-permissoes" && <UsuarioPermissoesPage />}
    </main>
  );
}
export default App;
