package br.ueg.trindade.shinayder_projeto_fullstack.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import br.ueg.trindade.shinayder_projeto_fullstack.model.Permissao;

public interface PermissaoRepository extends JpaRepository<Permissao, Long> {}
