import { useEffect, useState } from "react";
import type { Usuario } from "../types/Usuario";
import Botao from "./Botao";

interface Props { usuario: Usuario | null; onSalvar: (usuario: Usuario) => void; onCancelar: () => void; }
const vazio = { nome: "", username: "", senha: "", email: "" };
export default function UsuarioForm({ usuario, onSalvar, onCancelar }: Props) {
  const [form, setForm] = useState<Usuario>(vazio);
  useEffect(() => setForm(usuario ? { ...usuario, senha: "" } : vazio), [usuario]);
  const campo = "rounded-md border border-gray-300 px-3 py-2 focus:border-orange-500 focus:outline-none";
  return <form className="mb-6 grid gap-3 rounded-lg bg-white p-4 shadow md:grid-cols-5" onSubmit={e => { e.preventDefault(); onSalvar(form); setForm(vazio); }}>
    <input className={campo} placeholder="Nome" value={form.nome} onChange={e => setForm({ ...form, nome: e.target.value })} required />
    <input className={campo} placeholder="Usuário" value={form.username} onChange={e => setForm({ ...form, username: e.target.value })} required />
    <input className={campo} type="email" placeholder="E-mail" value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} required />
    <input className={campo} type="password" placeholder={usuario ? "Nova senha (opcional)" : "Senha"} value={form.senha} onChange={e => setForm({ ...form, senha: e.target.value })} required={!usuario} />
    <div className="flex gap-2"><Botao type="submit">{usuario ? "Salvar" : "Cadastrar"}</Botao>{usuario && <Botao type="button" variante="neutro" onClick={onCancelar}>Cancelar</Botao>}</div>
  </form>;
}
