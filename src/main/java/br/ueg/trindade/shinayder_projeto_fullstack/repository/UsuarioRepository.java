package br.ueg.trindade.shinayder_projeto_fullstack.repository;

import java.util.Optional;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.EntityGraph;
import br.ueg.trindade.shinayder_projeto_fullstack.model.Usuario;

public interface UsuarioRepository extends JpaRepository<Usuario, Long> {
	@EntityGraph(attributePaths = "permissoes")
	Optional<Usuario> findByUsername(String username);
}
