package br.ueg.trindade.shinayder_projeto_fullstack.controller;

import java.util.List;
import org.springframework.web.bind.annotation.*;
import br.ueg.trindade.shinayder_projeto_fullstack.model.Usuario;
import br.ueg.trindade.shinayder_projeto_fullstack.service.UsuarioService;

@RestController
@RequestMapping("/api/usuarios")
@CrossOrigin(origins = "http://localhost:5173")
public class UsuarioController {
	private final UsuarioService service;
	public UsuarioController(UsuarioService service) { this.service = service; }
	@GetMapping public List<Usuario> listar() { return service.listar(); }
	@PostMapping public Usuario salvar(@RequestBody Usuario usuario) { return service.salvar(usuario); }
	@PutMapping("/{id}") public Usuario atualizar(@PathVariable Long id, @RequestBody Usuario usuario) { return service.atualizar(id, usuario); }
	@DeleteMapping("/{id}") public void excluir(@PathVariable Long id) { service.excluir(id); }
}
