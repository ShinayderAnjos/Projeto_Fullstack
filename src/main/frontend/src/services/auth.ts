const TOKEN = "token";
const USUARIO = "usuario";

export interface Sessao {
  token: string;
  nome: string;
  permissoes: string[];
}

export function salvarSessao(sessao: Sessao) {
  localStorage.setItem(TOKEN, sessao.token);
  localStorage.setItem(USUARIO, JSON.stringify(sessao));
}

export function obterToken() { return localStorage.getItem(TOKEN); }
export function temPapel(papel: string) {
  const usuario = localStorage.getItem(USUARIO);
  return usuario ? (JSON.parse(usuario) as Sessao).permissoes.includes(papel) : false;
}
export function obterUsuario() {
  const usuario = localStorage.getItem(USUARIO);
  return usuario ? JSON.parse(usuario) as Sessao : null;
}
export function sair() {
  localStorage.removeItem(TOKEN);
  localStorage.removeItem(USUARIO);
}
