import { useEffect, useState } from "react";
import type { Jogo } from "../types/Jogo";
import Botao from "./Botao";
interface Props { jogo: Jogo | null; onSalvar: (item: Jogo) => void; onCancelar: () => void; }
const vazio = { nome: "", descricao: "" };
export default function JogoForm({ jogo, onSalvar, onCancelar }: Props) {
  const [form, setForm] = useState<Jogo>(vazio);
  useEffect(() => setForm(jogo || vazio), [jogo]);
  const campo = "rounded-md border border-gray-300 px-3 py-2 focus:border-orange-500 focus:outline-none";
  return <form className="mb-6 grid gap-3 rounded-lg bg-white p-4 shadow md:grid-cols-3" onSubmit={e => { e.preventDefault(); onSalvar(form); setForm(vazio); }}><input className={campo} placeholder="Nome" value={form.nome} onChange={e => setForm({...form, nome:e.target.value})} required/><input className={campo} placeholder="Descrição" value={form.descricao} onChange={e => setForm({...form, descricao:e.target.value})} required/><div className="flex gap-2"><Botao type="submit">{jogo ? "Salvar" : "Cadastrar"}</Botao>{jogo && <Botao type="button" variante="neutro" onClick={onCancelar}>Cancelar</Botao>}</div></form>;
}
