import enum


def init():
    print('Escolha quantas caixas de cada tipo serão necessárias:')
    for k, dimensoes in tipos_caixa.items():
        volume = dimensoes['volume']
        peso = dimensoes['peso']
        print(f'{k}\t=> v:{volume} cm³, c:{peso} kg')

    escolhidas = {
        "pequena": input('pequena:'),
        "media": input('media:'),
        "grande": input('grande:'),
        "big": input('big:'),
    }

    print("Escolhidas:", end=' ')
    for n, i in escolhidas.items():
        print(f"{n}: {i}", end=' ')
    print()

    return escolhidas

def calcula(caixas):
    volume_total = 0
    peso_total = 0
    for caixa, numero in caixas.items():

        volume_total += tipos_caixa[caixa]['volume'] * int(numero)
        peso_total += tipos_caixa[caixa]['peso'] * int(numero)
    
    return [volume_total, peso_total]

def ve_se_cabe(volume, peso):
    container = {
        'volume': 23100000, # cm³
        'capacidade': 24000 # kg
    }

    if volume * 0.9 < container['volume']:
        if peso * 0.9 < container['capacidade']:
            return 'cabe'
        else:
            print('muito pesado')
            return 'peso'
    else:
        print('muito grande')
        'volume'

def caixa_info(caixas): 
    for nome, numero in caixas.items():
        print(f"{nome}:   {numero}", end=' ')
        print(f"(v: {tipos_caixa[nome]['volume'] * numero}, p:{tipos_caixa[nome]['peso'] * numero})")
        print('Total => v: {}, p: {}'.format(*calcula(caixas)))

tipos_caixa = {             # m³          # kg
    "pequena" : { 'volume': 4320,   'peso': 2 },
    "media" :   { 'volume': 34560,  'peso': 8 },
    "grande" :  { 'volume': 268800, 'peso': 20 },
    "big" :     { 'volume': 720000, 'peso': 20 },
}

escolhidas = init()
caixas = {x: int(i) for x, i in escolhidas.items()}

while True:
    if ve_se_cabe(*calcula(caixas)) == 'cabe':
        print('cabe')
        break

    caixa_info(caixas)
    print('qual tipo deseja remover?')
    for counter, caixa in enumerate(caixas.items()):
        tipo, numero = caixa
        if int(numero) > 0:
            print(f"{counter + 1}: {tipo}", end="" if len(caixas) + 1 == counter else ", ")

    removeu = int(input()) - 1
    
    tipos_list = ['pequena', 'media', 'grande', 'big']

    if caixas[tipos_list[int(removeu)]] > 0:
        caixas = caixas[tipos_list[int(removeu)]] - 1
