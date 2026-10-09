package br.ueg.trindade.shinayder_projeto_fullstack.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import br.ueg.trindade.shinayder_projeto_fullstack.model.Jogo;

public interface JogoRepository extends JpaRepository<Jogo, Long> {}
