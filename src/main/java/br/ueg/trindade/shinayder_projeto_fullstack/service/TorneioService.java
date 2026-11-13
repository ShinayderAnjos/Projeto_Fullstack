package br.ueg.trindade.shinayder_projeto_fullstack.service;

import java.util.List;

import org.springframework.stereotype.Service;

import br.ueg.trindade.shinayder_projeto_fullstack.model.Torneio;
import br.ueg.trindade.shinayder_projeto_fullstack.repository.InscricaoRepository;
import br.ueg.trindade.shinayder_projeto_fullstack.repository.TorneioRepository;

@Service
public class TorneioService {
	private final TorneioRepository repository;
	private final InscricaoRepository inscricaoRepository;
	public TorneioService(TorneioRepository repository, InscricaoRepository inscricaoRepository) {
		this.repository = repository; this.inscricaoRepository = inscricaoRepository;
	}
	public List<Torneio> listar() { return repository.findAll(); }
	public Torneio buscar(Long id) { return repository.findById(id).orElseThrow(() -> new RuntimeException("Torneio não encontrado")); }
	public Torneio salvar(Torneio torneio) { return repository.save(torneio); }
	public Torneio atualizar(Long id, Torneio torneio) {
		Torneio atual = buscar(id); atual.setNome(torneio.getNome()); atual.setDescricao(torneio.getDescricao());
		return repository.save(atual);
	}
	public void excluir(Long id) {
		if (inscricaoRepository.existsByTorneioId(id)) throw new RuntimeException("Não é possível excluir um torneio com inscrições");
		repository.deleteById(id);
	}
}
