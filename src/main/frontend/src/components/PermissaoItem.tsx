import type { Permissao } from "../types/Permissao";
import Botao from "./Botao";
interface Props { permissao: Permissao; onEditar: (item: Permissao) => void; onExcluir: (id: number) => void; }
export default function PermissaoItem({ permissao, onEditar, onExcluir }: Props) {
  return <li className="flex items-center justify-between p-4"><div><strong>{permissao.nome}</strong><span className="ml-2 text-gray-500">{permissao.descricao}</span></div><div className="flex gap-2"><Botao variante="neutro" onClick={() => onEditar(permissao)}>Editar</Botao><Botao variante="perigo" onClick={() => onExcluir(permissao.id!)}>Excluir</Botao></div></li>;
}
