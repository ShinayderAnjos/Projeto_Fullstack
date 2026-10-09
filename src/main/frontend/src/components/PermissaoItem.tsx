import type { Permissao } from "../types/Permissao";
interface Props { permissao: Permissao; onEditar: (item: Permissao) => void; onExcluir: (id: number) => void; }
export default function PermissaoItem({ permissao, onEditar, onExcluir }: Props) {
  return <li><div><strong>{permissao.nome}</strong><span>{permissao.descricao}</span></div><div className="acoes"><button onClick={() => onEditar(permissao)}>Editar</button><button className="excluir" onClick={() => onExcluir(permissao.id!)}>Excluir</button></div></li>;
}
