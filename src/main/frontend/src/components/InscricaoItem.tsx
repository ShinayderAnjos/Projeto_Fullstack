import type { Inscricao } from "../types/Inscricao";
import Botao from "./Botao";
interface Props { inscricao: Inscricao; onEditar: (item: Inscricao) => void; onExcluir: (id: number) => void; }
function InscricaoItem({ inscricao, onEditar, onExcluir }: Props) {
  return <li className="flex items-center justify-between p-4"><div><strong>{inscricao.nomeParticipante}</strong><span className="ml-2 text-gray-500">{inscricao.email} · {inscricao.torneio.nome}</span></div><div className="flex gap-2"><Botao variante="neutro" onClick={() => onEditar(inscricao)}>Editar</Botao><Botao variante="perigo" onClick={() => onExcluir(inscricao.id!)}>Excluir</Botao></div></li>;
}
export default InscricaoItem;
