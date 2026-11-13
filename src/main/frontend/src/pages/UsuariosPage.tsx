import { useEffect, useState } from "react";
import api from "../services/api";
import UsuarioForm from "../components/UsuarioForm";
import UsuarioList from "../components/UsuarioList";
import type { Usuario } from "../types/Usuario";

export default function UsuariosPage() {
  const [itens, setItens] = useState<Usuario[]>([]); const [edicao, setEdicao] = useState<Usuario | null>(null);
  const carregar = () => api.get<Usuario[]>("/usuarios").then(r => setItens(r.data));
  useEffect(() => { carregar(); }, []);
  const salvar = async (item: Usuario) => { if (item.id) await api.put(`/usuarios/${item.id}`, item); else await api.post("/usuarios", item); setEdicao(null); carregar(); };
  const excluir = async (id: number) => {
    if (window.confirm("Deseja realmente excluir este usuário?")) {
      await api.delete(`/usuarios/${id}`);
      carregar();
    }
  };
  return <section><h1 className="mb-4 text-2xl font-bold text-gray-800">Usuários</h1><UsuarioForm usuario={edicao} onSalvar={salvar} onCancelar={() => setEdicao(null)} /><UsuarioList usuarios={itens} onEditar={setEdicao} onExcluir={excluir} /></section>;
}
