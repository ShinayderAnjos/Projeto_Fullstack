package br.ueg.trindade.shinayder_projeto_fullstack.service;

import java.util.List;
import org.springframework.stereotype.Service;
import br.ueg.trindade.shinayder_projeto_fullstack.model.Usuario;
import br.ueg.trindade.shinayder_projeto_fullstack.repository.UsuarioRepository;

@Service
public class UsuarioService {
	private final UsuarioRepository repository;
	public UsuarioService(UsuarioRepository repository) { this.repository = repository; }
	public List<Usuario> listar() { return repository.findAll(); }
	public Usuario salvar(Usuario usuario) { return repository.save(usuario); }
	public Usuario atualizar(Long id, Usuario usuario) {
		Usuario atual = repository.findById(id).orElseThrow(() -> new RuntimeException("Usuario nao encontrado"));
		atual.setNome(usuario.getNome()); atual.setUsername(usuario.getUsername()); atual.setEmail(usuario.getEmail());
		if (usuario.getSenha() != null && !usuario.getSenha().isBlank()) atual.setSenha(usuario.getSenha());
		return repository.save(atual);
	}
	public void excluir(Long id) { repository.deleteById(id); }
}
