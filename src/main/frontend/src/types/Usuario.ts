import type { Permissao } from "./Permissao";

export interface Usuario {
	id?: number;
	nome: string;
	username: string;
	email: string;
	senha?: string;
	permissoes?: Permissao[];
}
