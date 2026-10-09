package br.ueg.trindade.shinayder_projeto_fullstack.controller;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import br.ueg.trindade.shinayder_projeto_fullstack.model.Usuario;
import br.ueg.trindade.shinayder_projeto_fullstack.service.UsuarioService;

@RestController
@RequestMapping("/api/usuarios")
@CrossOrigin(origins = "http://localhost:5173")
public class UsuarioController {
	@Autowired
	private UsuarioService usuarioService;

	@GetMapping public List<Usuario> listar() { return usuarioService.listar(); }
	@PostMapping public Usuario salvar(@RequestBody Usuario usuario) { return usuarioService.salvar(usuario); }
	@PutMapping("/{id}") public Usuario atualizar(@PathVariable Long id, @RequestBody Usuario usuario) { return usuarioService.atualizar(id, usuario); }
	@DeleteMapping("/{id}") public void excluir(@PathVariable Long id) { usuarioService.excluir(id); }

	@GetMapping("/{id}/permissoes")
	public Usuario getPermissoes(@PathVariable Long id) {
		return usuarioService.buscarPorId(id);
	}

	@PutMapping("/{id}/permissoes")
	public Usuario atualizarPermissoes(
			@PathVariable Long id,
			@RequestBody List<Long> idsPermissoes) {
		return usuarioService.atribuirPermissoes(id, idsPermissoes);
	}
}
