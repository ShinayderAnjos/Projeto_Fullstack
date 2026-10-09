package br.ueg.trindade.shinayder_projeto_fullstack.service;

import java.util.List;
import org.springframework.stereotype.Service;
import br.ueg.trindade.shinayder_projeto_fullstack.model.Jogo;
import br.ueg.trindade.shinayder_projeto_fullstack.repository.JogoRepository;

@Service
public class JogoService {
	private final JogoRepository repository;
	public JogoService(JogoRepository repository) { this.repository = repository; }
	public List<Jogo> listar() { return repository.findAll(); }
	public Jogo salvar(Jogo jogo) { return repository.save(jogo); }
	public Jogo atualizar(Long id, Jogo jogo) {
		Jogo atual = repository.findById(id).orElseThrow(() -> new RuntimeException("Jogo nao encontrado"));
		atual.setNome(jogo.getNome()); atual.setDescricao(jogo.getDescricao());
		return repository.save(atual);
	}
	public void excluir(Long id) { repository.deleteById(id); }
}
