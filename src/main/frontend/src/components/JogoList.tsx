import type { Jogo } from "../types/Jogo";
import JogoItem from "./JogoItem";
interface Props { jogos: Jogo[]; podeEditar: boolean; onEditar: (item: Jogo) => void; onExcluir: (id: number) => void; }
export default function JogoList({ jogos, podeEditar, onEditar, onExcluir }: Props) { return <ul className="divide-y divide-gray-200 rounded-lg bg-white shadow">{jogos.map(item => <JogoItem key={item.id} jogo={item} podeEditar={podeEditar} onEditar={onEditar} onExcluir={onExcluir} />)}</ul>; }
