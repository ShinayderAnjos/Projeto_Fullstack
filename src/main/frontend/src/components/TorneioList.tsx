import type { Torneio } from "../types/Torneio";
import TorneioItem from "./TorneioItem";
interface Props { torneios: Torneio[]; podeEditar: boolean; onEditar: (item: Torneio) => void; onExcluir: (id: number) => void; }
function TorneioList({ torneios, podeEditar, onEditar, onExcluir }: Props) {
  return <ul className="divide-y divide-gray-200 rounded-lg bg-white shadow">{torneios.map((item) => <TorneioItem key={item.id} torneio={item} podeEditar={podeEditar} onEditar={onEditar} onExcluir={onExcluir} />)}</ul>;
}
export default TorneioList;
