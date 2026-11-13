package br.ueg.trindade.shinayder_projeto_fullstack.config;

import java.util.HashSet;
import java.util.Set;

import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.crypto.password.PasswordEncoder;

import br.ueg.trindade.shinayder_projeto_fullstack.model.Permissao;
import br.ueg.trindade.shinayder_projeto_fullstack.model.Usuario;
import br.ueg.trindade.shinayder_projeto_fullstack.repository.PermissaoRepository;
import br.ueg.trindade.shinayder_projeto_fullstack.repository.UsuarioRepository;

@Configuration
public class ConfiguracaoInicial {
	@Bean
	CommandLineRunner carregarDados(UsuarioRepository usuarios, PermissaoRepository permissoes, PasswordEncoder encoder) {
		return args -> {
			Permissao admin = permissoes.findByNome("ADMIN").orElseGet(() -> {
				Permissao p = new Permissao(); p.setNome("ADMIN"); p.setDescricao("Acesso total"); return permissoes.save(p);
			});
			Permissao user = permissoes.findByNome("USER").orElseGet(() -> {
				Permissao p = new Permissao(); p.setNome("USER"); p.setDescricao("Acesso comum"); return permissoes.save(p);
			});
			if (usuarios.findByUsername("admin").isEmpty()) {
				Usuario usuario = new Usuario();
				usuario.setNome("Administrador"); usuario.setUsername("admin");
				usuario.setSenha(encoder.encode("admin123")); usuario.setEmail("admin@ueg.br");
				usuario.setPermissoes(new HashSet<>(Set.of(admin, user)));
				usuarios.save(usuario);
			}
			if (usuarios.findByUsername("joao").isEmpty()) {
				Usuario usuario = new Usuario();
				usuario.setNome("João"); usuario.setUsername("joao");
				usuario.setSenha(encoder.encode("joao123")); usuario.setEmail("joao@ueg.br");
				usuario.setPermissoes(new HashSet<>(Set.of(user)));
				usuarios.save(usuario);
			}
		};
	}
}
