import { useEffect, useState } from "react";
import type { Jogo } from "../types/Jogo";
interface Props { jogo: Jogo | null; onSalvar: (item: Jogo) => void; onCancelar: () => void; }
const vazio = { nome: "", descricao: "" };
export default function JogoForm({ jogo, onSalvar, onCancelar }: Props) {
  const [form, setForm] = useState<Jogo>(vazio);
  useEffect(() => setForm(jogo || vazio), [jogo]);
  return <form onSubmit={e => { e.preventDefault(); onSalvar(form); setForm(vazio); }}><input placeholder="Nome" value={form.nome} onChange={e => setForm({...form, nome:e.target.value})} required/><input placeholder="Descrição" value={form.descricao} onChange={e => setForm({...form, descricao:e.target.value})} required/><div><button type="submit">{jogo ? "Salvar" : "Cadastrar"}</button>{jogo && <button type="button" className="secundario" onClick={onCancelar}>Cancelar</button>}</div></form>;
}
