// src/components/UsuarioList.tsx
import type { Usuario } from "../types/Usuario";
import UsuarioItem from "./UsuarioItem";
interface Props { usuarios: Usuario[]; onEditar: (usuario: Usuario) => void; onExcluir: (id: number) => void; }
function UsuarioList({ usuarios, onEditar, onExcluir }: Props) {
  return <ul className="divide-y divide-gray-200 rounded-lg bg-white shadow">{usuarios.map(usuario => <UsuarioItem key={usuario.id} usuario={usuario} onEditar={onEditar} onExcluir={onExcluir} />)}</ul>;
}
export default UsuarioList;
