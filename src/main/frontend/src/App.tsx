import "./App.css";
import JogosPage from "./pages/JogosPage";
import PermissoesPage from "./pages/PermissoesPage";
import UsuariosPage from "./pages/UsuariosPage";
function App() {
  return (
    <main>
      <header><span>Projeto Fullstack</span><h1>Cassino Virtual</h1><p>Gerenciamento de usuários, permissões e jogos</p></header>
      <div className="grade"><UsuariosPage /><PermissoesPage /><JogosPage /></div>
    </main>
  );
}
export default App;
