package br.ueg.trindade.shinayder_projeto_fullstack;

import java.util.List;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class Api {

	@GetMapping("/permissoes")
	public List<Permissao> permissoes() {
		return List.of();
	}

	@GetMapping("/jogos")
	public List<Jogo> jogos() {
		return List.of();
	}

}
