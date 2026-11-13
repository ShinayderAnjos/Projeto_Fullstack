package br.ueg.trindade.shinayder_projeto_fullstack.controller;

import java.util.List;
import org.springframework.web.bind.annotation.*;
import br.ueg.trindade.shinayder_projeto_fullstack.model.Inscricao;
import br.ueg.trindade.shinayder_projeto_fullstack.service.InscricaoService;

@RestController
@RequestMapping("/api/inscricoes")
@CrossOrigin(origins = "http://localhost:5173")
public class InscricaoController {
	private final InscricaoService service;
	public InscricaoController(InscricaoService service) { this.service = service; }
	@GetMapping public List<Inscricao> listar() { return service.listar(); }
	@GetMapping("/{id}") public Inscricao buscar(@PathVariable Long id) { return service.buscar(id); }
	@PostMapping public Inscricao salvar(@RequestBody Inscricao inscricao) { return service.salvar(inscricao); }
	@PutMapping("/{id}") public Inscricao atualizar(@PathVariable Long id, @RequestBody Inscricao inscricao) { return service.atualizar(id, inscricao); }
	@DeleteMapping("/{id}") public void excluir(@PathVariable Long id) { service.excluir(id); }
}
