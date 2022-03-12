% filmes: atores, o gênero, a duração, o ano
% pessoas: idade, sexo, nacionalidade, profissão,

duracao(filme1, 3).
ator(filme1, pessoa1).
genero(filme1, aventura).
ano(filme1, 1999).

duracao(filme2, 20).
ator(filme2, pessoa2).
genero(filme2, terror).
ano(filme2, 2022).

duracao(filme3, 2).
ator(filme3, pessoa3).
genero(filme3, terror).
ano(filme3, 2022).

idade(pessoa1, 20).
sexo(pessoa1, masc).
nacionalidade(pessoa1, br).
profissao(pessoa1, dev).

idade(pessoa2, 22).
sexo(pessoa2, fem).
nacionalidade(pessoa2, eua).
profissao(pessoa2, dev).

idade(lutz, 20).
sexo(lutz, masc).
nacionalidade(lutz, br).
profissao(lutz, dev).

recomenda_filme_ano(A, F) :- ano(F, A).