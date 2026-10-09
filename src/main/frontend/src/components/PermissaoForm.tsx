import { useEffect, useState } from "react";
import type { Permissao } from "../types/Permissao";
interface Props { permissao: Permissao | null; onSalvar: (item: Permissao) => void; onCancelar: () => void; }
const vazio = { nome: "", descricao: "" };
export default function PermissaoForm({ permissao, onSalvar, onCancelar }: Props) {
  const [form, setForm] = useState<Permissao>(vazio);
  useEffect(() => setForm(permissao || vazio), [permissao]);
  return <form onSubmit={e => { e.preventDefault(); onSalvar(form); setForm(vazio); }}><input placeholder="Nome" value={form.nome} onChange={e => setForm({...form, nome:e.target.value})} required/><input placeholder="Descrição" value={form.descricao} onChange={e => setForm({...form, descricao:e.target.value})} required/><div><button type="submit">{permissao ? "Salvar" : "Cadastrar"}</button>{permissao && <button type="button" className="secundario" onClick={onCancelar}>Cancelar</button>}</div></form>;
}
