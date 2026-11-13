// src/components/UsuarioItem.tsx
import type { Usuario } from "../types/Usuario";
import { Link } from "react-router-dom";
import Botao from "./Botao";
interface UsuarioItemProps {
  usuario: Usuario;
  onEditar: (usuario: Usuario) => void;
  onExcluir: (id: number) => void;
}
function UsuarioItem({ usuario, onEditar, onExcluir }: UsuarioItemProps) {
  return <li className="flex items-center justify-between p-4"><div><Link className="font-medium text-orange-600 hover:underline" to={`/usuarios/${usuario.id}`}>{usuario.nome}</Link><span className="ml-2 text-gray-500">{usuario.username} · {usuario.email}</span></div><div className="flex gap-2"><Botao variante="neutro" onClick={() => onEditar(usuario)}>Editar</Botao><Botao variante="perigo" onClick={() => onExcluir(usuario.id!)}>Excluir</Botao></div></li>;
}
export default UsuarioItem;
