import { useEffect, useState } from "react";
import InscricaoForm from "../components/InscricaoForm";
import InscricaoList from "../components/InscricaoList";
import api from "../services/api";
import type { Inscricao } from "../types/Inscricao";
import type { Torneio } from "../types/Torneio";

function InscricoesPage() {
  const [itens, setItens] = useState<Inscricao[]>([]);
  const [torneios, setTorneios] = useState<Torneio[]>([]);
  const [edicao, setEdicao] = useState<Inscricao | null>(null);
  const carregar = () => api.get<Inscricao[]>("/inscricoes").then((r) => setItens(r.data));
  useEffect(() => { carregar(); api.get<Torneio[]>("/torneios").then((r) => setTorneios(r.data)); }, []);
  async function salvar(item: Inscricao) {
    try {
      if (item.id) await api.put(`/inscricoes/${item.id}`, item); else await api.post("/inscricoes", item);
      setEdicao(null); carregar();
    } catch { alert("Este e-mail já está inscrito no torneio."); }
  }
  async function excluir(id: number) {
    if (window.confirm("Deseja realmente excluir esta inscrição?")) { await api.delete(`/inscricoes/${id}`); carregar(); }
  }
  return <section><h1 className="mb-4 text-2xl font-bold text-gray-800">Inscrições</h1><InscricaoForm inscricao={edicao} torneios={torneios} onSalvar={salvar} onCancelar={() => setEdicao(null)} /><InscricaoList inscricoes={itens} onEditar={setEdicao} onExcluir={excluir} /></section>;
}
export default InscricoesPage;
