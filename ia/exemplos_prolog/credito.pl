% Base para definir se é possivel conceder credito, qual o risco
% Informacoes da pessoa: renda mensal, idade (ano mes e dia de
% nascimento), genero. Outros dados: valor do emprestimo.
nasc_pess(p1, 1980, 4, 10).
nasc_pess(p2, 2000, 10, 20).
nasc_pess(p3, 1995, 7, 15).
renda_mensal(p1, 3000).
renda_mensal(p2, 1500).
renda_mensal(p3, 1200).
genero(p1, m).
genero(p2, f).

% definição da idade da pessoa considerando que na consulta seja
% informado o ano, mes e dia da data atual.
idade_pess(X, AA, MA, DA, I) :- nasc_pess(X, A, M, D), I is ((AA*360+MA*30+DA)-(A*360+M*30+D))/360.

%regras para indicar se concede emprestimo
concede_empr(X, AA, MA, DA, R):- idade_pess(X, AA, MA, DA, I), I<20, R is 1.
concede_empr(X, AA, MA, DA, R):- idade_pess(X, AA, MA, DA, I), I>20, renda_mensal(X, RM), RM>1500, R is 2.
concede_empr(X, AA, MA, DA, R):- idade_pess(X, AA, MA, DA, I), I>20, renda_mensal(X, RM), RM<1500, R is 3.
