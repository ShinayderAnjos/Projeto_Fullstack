import type { Jogo } from "../types/Jogo";
interface Props { jogo: Jogo; onEditar: (item: Jogo) => void; onExcluir: (id: number) => void; }
export default function JogoItem({ jogo, onEditar, onExcluir }: Props) { return <li><div><strong>{jogo.nome}</strong><span>{jogo.descricao}</span></div><div className="acoes"><button onClick={() => onEditar(jogo)}>Editar</button><button className="excluir" onClick={() => onExcluir(jogo.id!)}>Excluir</button></div></li>; }
