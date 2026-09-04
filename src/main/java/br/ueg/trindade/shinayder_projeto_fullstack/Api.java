package br.ueg.trindade.shinayder_projeto_fullstack;

import java.util.List;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class Api {

	@GetMapping("/permissoes")
	public List<Permissao> permissoes() {
		return List.of(
				new Permissao(1L, "Administrador", "Acesso completo ao sistema"),
				new Permissao(2L, "Usuario", "Acesso basico ao sistema"));
	}

	@GetMapping("/jogos")
	public List<Jogo> jogos() {
		return List.of(
				new Jogo(1L, "Roleta", "Jogo de roleta com fichas virtuais"),
				new Jogo(2L, "Caca-niquel", "Jogo de caca-niquel com fichas virtuais"));
	}

}
