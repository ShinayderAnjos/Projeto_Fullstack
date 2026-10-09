import { useEffect, useState } from "react";
import api from "../services/api";
import PermissaoForm from "../components/PermissaoForm";
import PermissaoList from "../components/PermissaoList";
import type { Permissao } from "../types/Permissao";

export default function PermissoesPage() {
  const [itens, setItens] = useState<Permissao[]>([]); const [edicao, setEdicao] = useState<Permissao | null>(null);
  const carregar = () => api.get<Permissao[]>("/permissoes").then(r => setItens(r.data));
  useEffect(() => { carregar(); }, []);
  const salvar = async (item: Permissao) => { if (item.id) await api.put(`/permissoes/${item.id}`, item); else await api.post("/permissoes", item); setEdicao(null); carregar(); };
  const excluir = async (id: number) => {
    if (window.confirm("Deseja realmente excluir esta permissão?")) {
      await api.delete(`/permissoes/${id}`);
      carregar();
    }
  };
  return <section><h2>Permissões</h2><PermissaoForm permissao={edicao} onSalvar={salvar} onCancelar={() => setEdicao(null)} /><PermissaoList permissoes={itens} onEditar={setEdicao} onExcluir={excluir} /></section>;
}
