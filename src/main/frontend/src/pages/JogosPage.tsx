import { useEffect, useState } from "react";
import api from "../services/api";
import JogoForm from "../components/JogoForm";
import JogoList from "../components/JogoList";
import type { Jogo } from "../types/Jogo";

export default function JogosPage() {
  const [itens, setItens] = useState<Jogo[]>([]); const [edicao, setEdicao] = useState<Jogo | null>(null);
  const carregar = () => api.get<Jogo[]>("/jogos").then(r => setItens(r.data));
  useEffect(() => { carregar(); }, []);
  const salvar = async (item: Jogo) => { if (item.id) await api.put(`/jogos/${item.id}`, item); else await api.post("/jogos", item); setEdicao(null); carregar(); };
  const excluir = async (id: number) => { await api.delete(`/jogos/${id}`); carregar(); };
  return <section><h2>Jogos</h2><JogoForm jogo={edicao} onSalvar={salvar} onCancelar={() => setEdicao(null)} /><JogoList jogos={itens} onEditar={setEdicao} onExcluir={excluir} /></section>;
}
