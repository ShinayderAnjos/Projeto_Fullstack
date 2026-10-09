import type { Permissao } from "../types/Permissao";
import PermissaoItem from "./PermissaoItem";
interface Props { permissoes: Permissao[]; onEditar: (item: Permissao) => void; onExcluir: (id: number) => void; }
export default function PermissaoList({ permissoes, onEditar, onExcluir }: Props) { return <ul>{permissoes.map(item => <PermissaoItem key={item.id} permissao={item} onEditar={onEditar} onExcluir={onExcluir} />)}</ul>; }
