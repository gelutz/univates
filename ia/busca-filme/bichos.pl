%

tempele(X) :- animal(X).

animal(X) :- peixe(X).
animal(X) :- passaro(X).
animal(X) :- mamifero(X).

temnadadeira(X) :- peixe(X).
nada(X) :- temnadadeira(X).

temasa(X) :- passaro(X).
temasa(X) :- morcego(X).

voa(X) :- temasa(X), not(avestruz(X)).

peixe(X) :- tubarao(X).

peixe(X) :- salmao(X).

poeovos(X) :- passaro(X).
poeovos(X) :- peixe(X), not(tubarao(X)).

anda(X) :- passaro(X).
anda(X) :- mamifero(X), not(morcego(X)).

cor(amarelo,X) :- canario(X).
passaro(X) :- canario(X).

passaro(X) :- avestruz(X).

comida(X) :- vaca(X).

mamifero(X) :- vaca(X).
mamifero(X) :- morcego(X).

% os bichos
canario(amrelinho).
tubarao(tuba).
vaca(mimosa).
morcego(vlad).
avestruz(xica).
salmao(sassa).

% ......



