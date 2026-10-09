package br.ueg.trindade.shinayder_projeto_fullstack.controller;

import java.util.List;
import org.springframework.web.bind.annotation.*;
import br.ueg.trindade.shinayder_projeto_fullstack.model.Permissao;
import br.ueg.trindade.shinayder_projeto_fullstack.service.PermissaoService;

@RestController
@RequestMapping("/api/permissoes")
@CrossOrigin(origins = "http://localhost:5173")
public class PermissaoController {
	private final PermissaoService service;
	public PermissaoController(PermissaoService service) { this.service = service; }
	@GetMapping public List<Permissao> listar() { return service.listar(); }
	@PostMapping public Permissao salvar(@RequestBody Permissao permissao) { return service.salvar(permissao); }
	@PutMapping("/{id}") public Permissao atualizar(@PathVariable Long id, @RequestBody Permissao permissao) { return service.atualizar(id, permissao); }
	@DeleteMapping("/{id}") public void excluir(@PathVariable Long id) { service.excluir(id); }
}
