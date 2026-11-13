import { useEffect, useState } from "react";
import type { Permissao } from "../types/Permissao";
import Botao from "./Botao";
interface Props { permissao: Permissao | null; onSalvar: (item: Permissao) => void; onCancelar: () => void; }
const vazio = { nome: "", descricao: "" };
export default function PermissaoForm({ permissao, onSalvar, onCancelar }: Props) {
  const [form, setForm] = useState<Permissao>(vazio);
  useEffect(() => setForm(permissao || vazio), [permissao]);
  const campo = "rounded-md border border-gray-300 px-3 py-2 focus:border-orange-500 focus:outline-none";
  return <form className="mb-6 grid gap-3 rounded-lg bg-white p-4 shadow md:grid-cols-3" onSubmit={e => { e.preventDefault(); onSalvar(form); setForm(vazio); }}><input className={campo} placeholder="Nome" value={form.nome} onChange={e => setForm({...form, nome:e.target.value})} required/><input className={campo} placeholder="Descrição" value={form.descricao} onChange={e => setForm({...form, descricao:e.target.value})} required/><div className="flex gap-2"><Botao type="submit">{permissao ? "Salvar" : "Cadastrar"}</Botao>{permissao && <Botao type="button" variante="neutro" onClick={onCancelar}>Cancelar</Botao>}</div></form>;
}
