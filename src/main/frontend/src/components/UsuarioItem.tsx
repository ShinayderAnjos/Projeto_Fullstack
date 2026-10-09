// src/components/UsuarioItem.tsx
import type { Usuario } from "../types/Usuario";
interface UsuarioItemProps {
  usuario: Usuario;
  onEditar: (usuario: Usuario) => void;
  onExcluir: (id: number) => void;
}
function UsuarioItem({ usuario, onEditar, onExcluir }: UsuarioItemProps) {
  return <li><div><strong>{usuario.nome}</strong><span>{usuario.username} · {usuario.email}</span></div><div className="acoes"><button onClick={() => onEditar(usuario)}>Editar</button><button className="excluir" onClick={() => onExcluir(usuario.id!)}>Excluir</button></div></li>;
}
export default UsuarioItem;
