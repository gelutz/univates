idade(evandro,46).
idade(xyz, 30).
idade(abc, 65).
idade(xzy, 50).
menor_50(X, I) :- idade(X, I), I<50.
maior_30(X, I) :- idade(X, I), I<30.
l1([a,b,c,d]).

