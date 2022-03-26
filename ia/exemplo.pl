duracao(exorcista,150).
genero(exorcista, terror).
dublado(exorcista, sim).
legendado(exorcista, sim).
produtora(exorcista, produtora1).
faixa_etaria(exorcista,30).

duracao(demolidor,140).
genero(demolidor, acao).
dublado(demolidor, nao).
legendado(demolidor, sim).
produtora(demolidor, produtora1).
faixa_etaria(demolidor,15).

duracao(avatar,170).
genero(avatar, aventura).
dublado(avatar, sim).
legendado(avatar, nao).
produtora(avatar, produtora2).
faixa_etaria(avatar,20).

duracao(velozes,110).
genero(velozes, corrida).
dublado(velozes, nao).
legendado(velozes, nao).
produtora(velozes, produtora2).
faixa_etaria(velozes,50).

duracao(fighter,210).
genero(fighter, luta).
dublado(fighter, sim).
legendado(fighter, sim).
produtora(fighter, produtora2).
faixa_etaria(fighter,35).

recomendado_menor_25(X, I) :- faixa_etaria(X,I), I<25.
recomendado_maior_25(X, I) :- faixa_etaria(X,I), I>25.
produtora1(X, I) :- produtora(X, produtora1).
produtora2(X, I) :- produtora(X, produtora2).
not_legend(X, I) :- legendado(X, nao).
is_legend(X, I) :- legendado(X, sim).
not_dublado(X, I) :- dublado(X, nao).
is_dublado(X, I) :- dublado(X, sim).
duracao_menor_135(X, I) :- duracao(X,I), I<135.
duracao_maior_135(X,I) :- duracao(X,I), I>135.
