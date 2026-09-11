INSERT INTO usuario (nome, username, senha, email)
SELECT 'Joao', 'joao123', 'senha123', 'joao@example.com'
WHERE NOT EXISTS (SELECT 1 FROM usuario WHERE username = 'joao123');

INSERT INTO usuario (nome, username, senha, email)
SELECT 'Maria', 'maria456', 'senha456', 'maria@example.com'
WHERE NOT EXISTS (SELECT 1 FROM usuario WHERE username = 'maria456');

INSERT INTO permissao (nome, descricao)
SELECT 'Administrador', 'Acesso completo ao sistema'
WHERE NOT EXISTS (SELECT 1 FROM permissao WHERE nome = 'Administrador');

INSERT INTO permissao (nome, descricao)
SELECT 'Usuario', 'Acesso basico ao sistema'
WHERE NOT EXISTS (SELECT 1 FROM permissao WHERE nome = 'Usuario');

INSERT INTO jogo (nome, descricao)
SELECT 'Roleta', 'Jogo de roleta com fichas virtuais'
WHERE NOT EXISTS (SELECT 1 FROM jogo WHERE nome = 'Roleta');

INSERT INTO jogo (nome, descricao)
SELECT 'Caca-niquel', 'Jogo de caca-niquel com fichas virtuais'
WHERE NOT EXISTS (SELECT 1 FROM jogo WHERE nome = 'Caca-niquel');
