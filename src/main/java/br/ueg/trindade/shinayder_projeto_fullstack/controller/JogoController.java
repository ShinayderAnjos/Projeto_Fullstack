package br.ueg.trindade.shinayder_projeto_fullstack.controller;

import java.util.List;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;
import br.ueg.trindade.shinayder_projeto_fullstack.model.Jogo;
import br.ueg.trindade.shinayder_projeto_fullstack.service.JogoService;

@RestController
@RequestMapping("/api/jogos")
@CrossOrigin(origins = "http://localhost:5173")
public class JogoController {
	private final JogoService service;
	public JogoController(JogoService service) { this.service = service; }
	@GetMapping
	@PreAuthorize("hasAnyRole('ADMIN', 'USER')")
	public List<Jogo> listar() { return service.listar(); }
	@PostMapping
	@PreAuthorize("hasRole('ADMIN')")
	public Jogo salvar(@RequestBody Jogo jogo) { return service.salvar(jogo); }
	@PutMapping("/{id}")
	@PreAuthorize("hasRole('ADMIN')")
	public Jogo atualizar(@PathVariable Long id, @RequestBody Jogo jogo) { return service.atualizar(id, jogo); }
	@DeleteMapping("/{id}")
	@PreAuthorize("hasRole('ADMIN')")
	public void excluir(@PathVariable Long id) { service.excluir(id); }
}
