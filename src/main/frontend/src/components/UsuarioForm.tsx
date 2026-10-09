import { useEffect, useState } from "react";
import type { Usuario } from "../types/Usuario";

interface Props { usuario: Usuario | null; onSalvar: (usuario: Usuario) => void; onCancelar: () => void; }
const vazio = { nome: "", username: "", senha: "", email: "" };
export default function UsuarioForm({ usuario, onSalvar, onCancelar }: Props) {
  const [form, setForm] = useState<Usuario>(vazio);
  useEffect(() => setForm(usuario ? { ...usuario, senha: "" } : vazio), [usuario]);
  return <form onSubmit={e => { e.preventDefault(); onSalvar(form); setForm(vazio); }}>
    <input placeholder="Nome" value={form.nome} onChange={e => setForm({ ...form, nome: e.target.value })} required />
    <input placeholder="Usuário" value={form.username} onChange={e => setForm({ ...form, username: e.target.value })} required />
    <input type="email" placeholder="E-mail" value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} required />
    <input type="password" placeholder={usuario ? "Nova senha (opcional)" : "Senha"} value={form.senha} onChange={e => setForm({ ...form, senha: e.target.value })} required={!usuario} />
    <div><button type="submit">{usuario ? "Salvar" : "Cadastrar"}</button>{usuario && <button type="button" className="secundario" onClick={onCancelar}>Cancelar</button>}</div>
  </form>;
}
