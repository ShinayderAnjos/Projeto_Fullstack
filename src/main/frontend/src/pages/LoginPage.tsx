import { useState, type FormEvent } from "react";
import { useNavigate } from "react-router-dom";
import api from "../services/api";
import { salvarSessao, type Sessao } from "../services/auth";

function LoginPage() {
  const [username, setUsername] = useState("");
  const [senha, setSenha] = useState("");
  const [erro, setErro] = useState("");
  const navigate = useNavigate();

  async function entrar(evento: FormEvent) {
    evento.preventDefault();
    try {
      const resposta = await api.post<Sessao>("/login", { username, senha });
      salvarSessao(resposta.data);
      navigate("/");
    } catch {
      setErro("Usuário ou senha inválidos");
    }
  }

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <form onSubmit={entrar} className="mx-auto mt-16 max-w-sm rounded-lg bg-white p-6 shadow">
        <h1 className="mb-4 text-2xl font-bold text-orange-600">Entrar</h1>
        <input value={username} onChange={(e) => setUsername(e.target.value)} placeholder="Usuário" className="mb-3 w-full rounded-md border p-2" required />
        <input type="password" value={senha} onChange={(e) => setSenha(e.target.value)} placeholder="Senha" className="mb-3 w-full rounded-md border p-2" required />
        {erro && <p className="mb-3 text-red-600">{erro}</p>}
        <button className="w-full rounded-md bg-orange-600 py-2 text-white hover:bg-orange-700">Entrar</button>
        <p className="mt-4 text-sm text-gray-500">Administrador: admin / admin123</p>
      </form>
    </div>
  );
}

export default LoginPage;
