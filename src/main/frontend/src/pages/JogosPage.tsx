import { useEffect, useState } from "react";
import api from "../services/api";
import JogoForm from "../components/JogoForm";
import JogoList from "../components/JogoList";
import type { Jogo } from "../types/Jogo";
import { temPapel } from "../services/auth";

export default function JogosPage() {
  const administrador = temPapel("ADMIN");
  const [itens, setItens] = useState<Jogo[]>([]); const [edicao, setEdicao] = useState<Jogo | null>(null);
  const carregar = () => api.get<Jogo[]>("/jogos").then(r => setItens(r.data));
  useEffect(() => { carregar(); }, []);
  const salvar = async (item: Jogo) => { if (item.id) await api.put(`/jogos/${item.id}`, item); else await api.post("/jogos", item); setEdicao(null); carregar(); };
  const excluir = async (id: number) => {
    if (window.confirm("Deseja realmente excluir este jogo?")) {
      await api.delete(`/jogos/${id}`);
      carregar();
    }
  };
  return <section><h1 className="mb-4 text-2xl font-bold text-gray-800">Jogos</h1>{administrador && <JogoForm jogo={edicao} onSalvar={salvar} onCancelar={() => setEdicao(null)} />}<JogoList jogos={itens} podeEditar={administrador} onEditar={setEdicao} onExcluir={excluir} /></section>;
}
