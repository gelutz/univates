nasceu(evandro, arroiodomeio).
nasceu(jose, lajeado).
nasceu(joao, lajeado).
nasceu(luis, santacruzdosul).
nasceu(carlos, venancioaires).
nasceu(paulo, lajeado).
nasceu(martina, matoleitao).
nasceu(maria, encantado).
nasceu(carla, portoalegre).
nasceu(sandra, lajeado).
nasceu(luisa, portoalegre).
mora(luisa, encantado).
mora(evandro, matoleitao).
mora(jose, lajeado).
mora(joao, estrela).
mora(luis, venancioaires).
mora(carlos, venancioaires).
mora(paulo, estrela).
mora(martina, matoleitao).
mora(maria, estrela).
mora(carla, portoalegre).
mora(sandra, venancioaires).
ligacao_direta(encantado, arroiodomeio).
ligacao_direta(arroiodomeio, lajeado).
ligacao_direta(lajeado, estrela).
ligacao_direta(estrela, portoalegre).
ligacao_direta(lajeado, matoleitao).
ligacao_direta(matoleitao, venancioaires).
ligacao_direta(venancioaires, santacruzdosul).
ligacao_direta(taquari, venancioaires).
distancia_direta(encantado, arroiodomeio, 20).
distancia_direta(arroiodomeio,lajeado,6).
distancia_direta(lajeado, estrela, 5).
distancia_direta(lajeado, matoleitao, 19).
distancia_direta(matoleitao, venancioaires, 11).
distancia_direta(venancioaires, santacruzdosul, 34).
distancia_direta(estrela, portoalegre, 110).
distancia(Cidade1, Cidade2, D):-distancia_direta(Cidade1,Cidade2,D).
distancia(Cidade1, Cidade2, D):-distancia_direta(Cidade1,C, D1), distancia(C,Cidade2,D2),  D is D1+D2.
ligacao(Cidade1, Cidade2):-ligacao_direta(Cidade1, Cidade2).
ligacao(Cidade1, Cidade2):-ligacao_direta(Cidade1, C), ligacao(C, Cidade2).
visita(Pessoa1, Pessoa2, D):-mora(Pessoa1, C), mora(Pessoa2, C2),ligacao(C, C2), distancia(C, C2, D).







