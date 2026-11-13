import type { Jogo } from "../types/Jogo";
import Botao from "./Botao";
interface Props { jogo: Jogo; podeEditar: boolean; onEditar: (item: Jogo) => void; onExcluir: (id: number) => void; }
export default function JogoItem({ jogo, podeEditar, onEditar, onExcluir }: Props) { return <li className="flex items-center justify-between p-4"><div><strong>{jogo.nome}</strong><span className="ml-2 text-gray-500">{jogo.descricao}</span></div>{podeEditar && <div className="flex gap-2"><Botao variante="neutro" onClick={() => onEditar(jogo)}>Editar</Botao><Botao variante="perigo" onClick={() => onExcluir(jogo.id!)}>Excluir</Botao></div>}</li>; }
