package br.ueg.trindade.shinayder_projeto_fullstack.service;

import java.util.List;

import org.springframework.stereotype.Service;
import org.springframework.http.HttpStatus;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.server.ResponseStatusException;

import br.ueg.trindade.shinayder_projeto_fullstack.model.Inscricao;
import br.ueg.trindade.shinayder_projeto_fullstack.model.Torneio;
import br.ueg.trindade.shinayder_projeto_fullstack.repository.InscricaoRepository;

@Service
public class InscricaoService {
	private final InscricaoRepository repository;
	private final TorneioService torneioService;
	public InscricaoService(InscricaoRepository repository, TorneioService torneioService) {
		this.repository = repository; this.torneioService = torneioService;
	}
	public List<Inscricao> listar() { return repository.findAll(); }
	public Inscricao buscar(Long id) { return repository.findById(id).orElseThrow(() -> new RuntimeException("Inscrição não encontrada")); }
	public Inscricao salvar(Inscricao inscricao) {
		Long torneioId = inscricao.getTorneio().getId();
		String username = SecurityContextHolder.getContext().getAuthentication().getName();
		boolean administrador = SecurityContextHolder.getContext().getAuthentication().getAuthorities().stream()
				.anyMatch(a -> a.getAuthority().equals("ROLE_ADMIN"));
		inscricao.setEmail(inscricao.getEmail().trim().toLowerCase());
		if (!administrador && repository.existsByUsernameAndTorneioId(username, torneioId))
			throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "Usuário já inscrito neste torneio");
		if (repository.existsByEmailAndTorneioId(inscricao.getEmail(), torneioId))
			throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "E-mail já inscrito neste torneio");
		if (!administrador) inscricao.setUsername(username);
		inscricao.setTorneio(torneioService.buscar(torneioId));
		return repository.save(inscricao);
	}
	public Inscricao atualizar(Long id, Inscricao inscricao) {
		Long torneioId = inscricao.getTorneio().getId();
		inscricao.setEmail(inscricao.getEmail().trim().toLowerCase());
		if (repository.existsByEmailAndTorneioIdAndIdNot(inscricao.getEmail(), torneioId, id))
			throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "E-mail já inscrito neste torneio");
		Inscricao atual = buscar(id); Torneio torneio = torneioService.buscar(torneioId);
		atual.setNomeParticipante(inscricao.getNomeParticipante()); atual.setEmail(inscricao.getEmail()); atual.setTorneio(torneio);
		return repository.save(atual);
	}
	public void excluir(Long id) { repository.deleteById(id); }
}
