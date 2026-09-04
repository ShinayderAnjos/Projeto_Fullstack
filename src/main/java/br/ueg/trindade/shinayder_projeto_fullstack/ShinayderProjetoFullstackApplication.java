package br.ueg.trindade.shinayder_projeto_fullstack;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.web.SecurityFilterChain;

@SpringBootApplication
public class ShinayderProjetoFullstackApplication {

	public static void main(String[] args) {
		SpringApplication.run(ShinayderProjetoFullstackApplication.class, args);
	}

	@Bean
	SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
		return http
				.authorizeHttpRequests(authorize -> authorize
						.requestMatchers("/permissoes", "/jogos").permitAll()
						.anyRequest().authenticated())
				.build();
	}

}
