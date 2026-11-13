package br.ueg.trindade.shinayder_projeto_fullstack.model;

import java.util.ArrayList;
import java.util.List;

import com.fasterxml.jackson.annotation.JsonIgnore;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;

@Entity
public class Torneio {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	private String nome;
	private String descricao;

	@OneToMany(mappedBy = "torneio")
	@JsonIgnore
	private List<Inscricao> inscricoes = new ArrayList<>();

	public Torneio() {}
	public Long getId() { return id; }
	public void setId(Long id) { this.id = id; }
	public String getNome() { return nome; }
	public void setNome(String nome) { this.nome = nome; }
	public String getDescricao() { return descricao; }
	public void setDescricao(String descricao) { this.descricao = descricao; }
	public List<Inscricao> getInscricoes() { return inscricoes; }
	public void setInscricoes(List<Inscricao> inscricoes) { this.inscricoes = inscricoes; }
}
