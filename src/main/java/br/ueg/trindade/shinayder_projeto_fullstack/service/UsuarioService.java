package br.ueg.trindade.shinayder_projeto_fullstack.service;

import java.util.HashSet;
import java.util.List;
import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import br.ueg.trindade.shinayder_projeto_fullstack.model.Permissao;
import br.ueg.trindade.shinayder_projeto_fullstack.model.Usuario;
import br.ueg.trindade.shinayder_projeto_fullstack.repository.PermissaoRepository;
import br.ueg.trindade.shinayder_projeto_fullstack.repository.UsuarioRepository;

@Service
public class UsuarioService {
	@Autowired
	private UsuarioRepository usuarioRepository;

	@Autowired
	private PermissaoRepository permissaoRepository;

	public List<Usuario> listar() { return usuarioRepository.findAll(); }
	public Usuario salvar(Usuario usuario) { return usuarioRepository.save(usuario); }
	public Usuario atualizar(Long id, Usuario usuario) {
		Usuario atual = buscarPorId(id);
		atual.setNome(usuario.getNome()); atual.setUsername(usuario.getUsername()); atual.setEmail(usuario.getEmail());
		if (usuario.getSenha() != null && !usuario.getSenha().isBlank()) atual.setSenha(usuario.getSenha());
		return usuarioRepository.save(atual);
	}
	public void excluir(Long id) { usuarioRepository.deleteById(id); }

	public Usuario buscarPorId(Long id) {
		return usuarioRepository.findById(id)
				.orElseThrow(() -> new RuntimeException("Usuário não encontrado"));
	}

	@Transactional
	public Usuario atribuirPermissoes(Long usuarioId, List<Long> idsPermissoes) {
		Usuario usuario = buscarPorId(usuarioId);
		Set<Permissao> permissoes = new HashSet<>(
				permissaoRepository.findAllById(idsPermissoes));
		usuario.setPermissoes(permissoes);
		return usuarioRepository.save(usuario);
	}
}
