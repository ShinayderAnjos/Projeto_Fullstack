import type { Torneio } from "../types/Torneio";
import Botao from "./Botao";
interface Props { torneio: Torneio; onEditar: (item: Torneio) => void; onExcluir: (id: number) => void; }
function TorneioItem({ torneio, onEditar, onExcluir }: Props) {
  return <li className="flex items-center justify-between p-4"><div><strong>{torneio.nome}</strong><span className="ml-2 text-gray-500">{torneio.descricao}</span></div><div className="flex gap-2"><Botao variante="neutro" onClick={() => onEditar(torneio)}>Editar</Botao><Botao variante="perigo" onClick={() => onExcluir(torneio.id!)}>Excluir</Botao></div></li>;
}
export default TorneioItem;
