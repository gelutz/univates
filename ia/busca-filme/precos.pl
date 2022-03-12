preco(a, 1).
preco(b, 2).
preco(c, 5).
preco(1, 10).
quantidade(a, 50).
quantidade(b, 120).
quantidade(c, 43).
quantidade(1, 7).

valortotal(X, Y) :- preco(X, Precoprod), quantidade(X, Quantprod), Y is Precoprod*Quantprod.
valortotal2(X, Y, Preco1, Preco2) :- preco(X, Preco1), preco(Y, Preco2).




