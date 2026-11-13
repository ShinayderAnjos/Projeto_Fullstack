import type { Jogo } from "../types/Jogo";
import JogoItem from "./JogoItem";
interface Props { jogos: Jogo[]; onEditar: (item: Jogo) => void; onExcluir: (id: number) => void; }
export default function JogoList({ jogos, onEditar, onExcluir }: Props) { return <ul className="divide-y divide-gray-200 rounded-lg bg-white shadow">{jogos.map(item => <JogoItem key={item.id} jogo={item} onEditar={onEditar} onExcluir={onExcluir} />)}</ul>; }
