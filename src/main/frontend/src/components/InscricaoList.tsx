import type { Inscricao } from "../types/Inscricao";
import InscricaoItem from "./InscricaoItem";
interface Props { inscricoes: Inscricao[]; onEditar: (item: Inscricao) => void; onExcluir: (id: number) => void; }
function InscricaoList({ inscricoes, onEditar, onExcluir }: Props) {
  return <ul className="divide-y divide-gray-200 rounded-lg bg-white shadow">{inscricoes.map((item) => <InscricaoItem key={item.id} inscricao={item} onEditar={onEditar} onExcluir={onExcluir} />)}</ul>;
}
export default InscricaoList;
