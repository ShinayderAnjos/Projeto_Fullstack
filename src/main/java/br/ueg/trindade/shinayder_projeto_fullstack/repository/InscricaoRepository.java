package br.ueg.trindade.shinayder_projeto_fullstack.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import br.ueg.trindade.shinayder_projeto_fullstack.model.Inscricao;

public interface InscricaoRepository extends JpaRepository<Inscricao, Long> {
	boolean existsByTorneioId(Long torneioId);
	boolean existsByEmailAndTorneioId(String email, Long torneioId);
	boolean existsByEmailAndTorneioIdAndIdNot(String email, Long torneioId, Long id);
	boolean existsByUsernameAndTorneioId(String username, Long torneioId);
}
