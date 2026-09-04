package br.ueg.trindade.shinayder_projeto_fullstack;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class Api {

	@Autowired
	private UsuarioRepository usuarioRepository;

	@Autowired
	private PermissaoRepository permissaoRepository;

	@Autowired
	private JogoRepository jogoRepository;

	@GetMapping("/api/usuarios")
	public List<Usuario> usuarios() {
		return usuarioRepository.findAll();
	}

	@PostMapping("/api/usuarios")
	public Usuario criarUsuario(@RequestBody Usuario usuario) {
		return usuarioRepository.save(usuario);
	}

	@GetMapping("/permissoes")
	public List<Permissao> permissoes() {
		return permissaoRepository.findAll();
	}

	@PostMapping("/permissoes")
	public Permissao criarPermissao(@RequestBody Permissao permissao) {
		return permissaoRepository.save(permissao);
	}

	@GetMapping("/permissoes/{id}")
	public Permissao permissaoPorId(@PathVariable Long id) {
		return permissaoRepository.findById(id)
				.orElseThrow(() -> new RuntimeException("Permissao nao encontrada"));
	}

	@GetMapping("/jogos")
	public List<Jogo> jogos() {
		return jogoRepository.findAll();
	}

	@PostMapping("/jogos")
	public Jogo criarJogo(@RequestBody Jogo jogo) {
		return jogoRepository.save(jogo);
	}

	@GetMapping("/jogos/{id}")
	public Jogo jogoPorId(@PathVariable Long id) {
		return jogoRepository.findById(id)
				.orElseThrow(() -> new RuntimeException("Jogo nao encontrado"));
	}

}
