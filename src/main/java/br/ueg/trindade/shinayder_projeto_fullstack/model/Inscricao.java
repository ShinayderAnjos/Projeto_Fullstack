package br.ueg.trindade.shinayder_projeto_fullstack.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;

@Entity
public class Inscricao {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	private String nomeParticipante;
	private String email;

	@ManyToOne
	@JoinColumn(name = "torneio_id")
	private Torneio torneio;

	public Inscricao() {}
	public Long getId() { return id; }
	public void setId(Long id) { this.id = id; }
	public String getNomeParticipante() { return nomeParticipante; }
	public void setNomeParticipante(String nomeParticipante) { this.nomeParticipante = nomeParticipante; }
	public String getEmail() { return email; }
	public void setEmail(String email) { this.email = email; }
	public Torneio getTorneio() { return torneio; }
	public void setTorneio(Torneio torneio) { this.torneio = torneio; }
}
