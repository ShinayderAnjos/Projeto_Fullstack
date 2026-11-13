package br.ueg.trindade.shinayder_projeto_fullstack.controller;

import java.util.List;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;
import br.ueg.trindade.shinayder_projeto_fullstack.model.Torneio;
import br.ueg.trindade.shinayder_projeto_fullstack.service.TorneioService;

@RestController
@RequestMapping("/api/torneios")
@CrossOrigin(origins = "http://localhost:5173")
public class TorneioController {
	private final TorneioService service;
	public TorneioController(TorneioService service) { this.service = service; }
	@GetMapping
	@PreAuthorize("hasAnyRole('ADMIN', 'USER')")
	public List<Torneio> listar() { return service.listar(); }
	@GetMapping("/{id}")
	@PreAuthorize("hasAnyRole('ADMIN', 'USER')")
	public Torneio buscar(@PathVariable Long id) { return service.buscar(id); }
	@PostMapping
	@PreAuthorize("hasRole('ADMIN')")
	public Torneio salvar(@RequestBody Torneio torneio) { return service.salvar(torneio); }
	@PutMapping("/{id}")
	@PreAuthorize("hasRole('ADMIN')")
	public Torneio atualizar(@PathVariable Long id, @RequestBody Torneio torneio) { return service.atualizar(id, torneio); }
	@DeleteMapping("/{id}")
	@PreAuthorize("hasRole('ADMIN')")
	public void excluir(@PathVariable Long id) { service.excluir(id); }
}
