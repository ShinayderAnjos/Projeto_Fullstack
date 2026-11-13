import { useEffect, useState } from "react";
import type { Inscricao } from "../types/Inscricao";
import type { Torneio } from "../types/Torneio";
import Botao from "./Botao";

interface Props { inscricao: Inscricao | null; torneios: Torneio[]; onSalvar: (item: Inscricao) => void; onCancelar: () => void; }
const vazio: Inscricao = { nomeParticipante: "", email: "", torneio: { id: 0, nome: "", descricao: "" } };
function InscricaoForm({ inscricao, torneios, onSalvar, onCancelar }: Props) {
  const [form, setForm] = useState<Inscricao>(vazio);
  useEffect(() => setForm(inscricao || vazio), [inscricao]);
  const campo = "rounded-md border border-gray-300 px-3 py-2";
  return <form className="mb-6 grid gap-3 rounded-lg bg-white p-4 shadow md:grid-cols-4" onSubmit={(e) => { e.preventDefault(); onSalvar(form); setForm(vazio); }}>
    <input className={campo} placeholder="Nome do participante" value={form.nomeParticipante} onChange={(e) => setForm({...form, nomeParticipante: e.target.value})} required />
    <input className={campo} type="email" placeholder="E-mail" value={form.email} onChange={(e) => setForm({...form, email: e.target.value})} required />
    <select className={campo} value={form.torneio.id || ""} onChange={(e) => setForm({...form, torneio: { id: Number(e.target.value), nome: "", descricao: "" }})} required>
      <option value="">Selecione o torneio</option>{torneios.map((t) => <option key={t.id} value={t.id}>{t.nome}</option>)}
    </select>
    <div className="flex gap-2"><Botao type="submit">{inscricao ? "Salvar" : "Cadastrar"}</Botao>{inscricao && <Botao type="button" variante="neutro" onClick={onCancelar}>Cancelar</Botao>}</div>
  </form>;
}
export default InscricaoForm;
