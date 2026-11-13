import { useEffect, useState } from "react";
import TorneioForm from "../components/TorneioForm";
import TorneioList from "../components/TorneioList";
import api from "../services/api";
import type { Torneio } from "../types/Torneio";

function TorneiosPage() {
  const [itens, setItens] = useState<Torneio[]>([]);
  const [edicao, setEdicao] = useState<Torneio | null>(null);
  const carregar = () => api.get<Torneio[]>("/torneios").then((r) => setItens(r.data));
  useEffect(() => { carregar(); }, []);
  async function salvar(item: Torneio) {
    if (item.id) await api.put(`/torneios/${item.id}`, item); else await api.post("/torneios", item);
    setEdicao(null); carregar();
  }
  async function excluir(id: number) {
    if (!window.confirm("Deseja realmente excluir este torneio?")) return;
    try { await api.delete(`/torneios/${id}`); carregar(); }
    catch { alert("Não é possível excluir um torneio com inscrições."); }
  }
  return <section><h1 className="mb-4 text-2xl font-bold text-gray-800">Torneios</h1><TorneioForm torneio={edicao} onSalvar={salvar} onCancelar={() => setEdicao(null)} /><TorneioList torneios={itens} onEditar={setEdicao} onExcluir={excluir} /></section>;
}
export default TorneiosPage;
