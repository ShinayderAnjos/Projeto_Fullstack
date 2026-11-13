package br.ueg.trindade.shinayder_projeto_fullstack.repository;

import java.util.Optional;
import org.springframework.data.jpa.repository.JpaRepository;
import br.ueg.trindade.shinayder_projeto_fullstack.model.Permissao;

public interface PermissaoRepository extends JpaRepository<Permissao, Long> {
	Optional<Permissao> findByNome(String nome);
}
