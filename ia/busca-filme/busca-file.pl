% - Quais filmes são recomendados para uma determinada pessoa?
% - Quem deveria ver um determinado filme?
% - Quem já assistiu ou gosta de filmes com um determinado ator?
% - Para quem seria recomendado assistir filmes de um determinado gênero?

% pessoas
idade(pessoa1, 18).
idade(pessoa2, 22).
idade(pessoa3, 35).
idade(pessoa4, 12).
idade(pessoa5, 17).

gosta(pessoa1, acao).
gosta(pessoa2, aventura).
gosta(pessoa3, comedia).
gosta(pessoa4, comedia).
gosta(pessoa5, terror).

sexo(pessoa2, f).
sexo(pessoa1, m).
sexo(pessoa3, f).
sexo(pessoa4, f).
sexo(pessoa5, m).

% filmes
filme(filme1)
duracao(filme1,1 18).
genero(filme1, acao).
dublado(filme1, sim).
legendado(filme1, sim).
produtora(filme1, produtora2).
faixa_etaria(filme1, 0).
elenco(filme1, ator1).

filme(filme2)
duracao(filme2,120).
genero(filme2, terror).
dublado(filme2, sim).
legendado(filme2, sim).
produtora(filme2, produtora1).
faixa_etaria(filme2, 16).
elenco(filme2, ator2).

filme(filme3)
duracao(filme3,140).
genero(filme3, comedia).
dublado(filme3, sim).
legendado(filme3, sim).
produtora(filme3, produtora2).
faixa_etaria(filme3, 10).
elenco(filme3, ator3).

filme(filme4)
duracao(filme4,100).
genero(filme4, danca).
dublado(filme4, sim).
legendado(filme4, sim).
produtora(filme4, produtora1).
faixa_etaria(filme4, 18).
elenco(filme4, ator4).

filme(filme5)
duracao(filme5,90).
genero(filme5, documentario).
dublado(filme5, nao).
legendado(filme5, sim).
produtora(filme5, produtora2).
faixa_etaria(filme5, 12).
elenco(filme5, ator5).


assistiu(pessoa1, filme2).
assistiu(pessoa2, filme2).
assistiu(pessoa4, filme2).
assistiu(pessoa5, filme2).
assistiu(pessoa1, filme4).
assistiu(pessoa2, filme4).
assistiu(pessoa3, filme4).

% classificação indicativa
pode_olhar(P, F, Y) :- faixa_etaria(F, X1), idade(P, X2), X2>X1.
% vai toma no cu evandro
recomendar_para(P, X) :- gosta(P, Y), genero(X, Y).

sugerir(P, X) :- idade(P, I1), faixa_etaria(F, I2), I1<I2, gosta().