package br.ueg.trindade.shinayder_projeto_fullstack.service;

import java.util.List;
import org.springframework.stereotype.Service;
import br.ueg.trindade.shinayder_projeto_fullstack.model.Permissao;
import br.ueg.trindade.shinayder_projeto_fullstack.repository.PermissaoRepository;

@Service
public class PermissaoService {
	private final PermissaoRepository repository;
	public PermissaoService(PermissaoRepository repository) { this.repository = repository; }
	public List<Permissao> listar() { return repository.findAll(); }
	public Permissao salvar(Permissao permissao) { return repository.save(permissao); }
	public Permissao atualizar(Long id, Permissao permissao) {
		Permissao atual = repository.findById(id).orElseThrow(() -> new RuntimeException("Permissao nao encontrada"));
		atual.setNome(permissao.getNome()); atual.setDescricao(permissao.getDescricao());
		return repository.save(atual);
	}
	public void excluir(Long id) { repository.deleteById(id); }
}
