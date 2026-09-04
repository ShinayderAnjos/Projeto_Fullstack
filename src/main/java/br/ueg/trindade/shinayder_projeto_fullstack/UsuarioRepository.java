package br.ueg.trindade.shinayder_projeto_fullstack;

import org.springframework.data.jpa.repository.JpaRepository;

public interface UsuarioRepository extends JpaRepository<Usuario, Long> {
}
