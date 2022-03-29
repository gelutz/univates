def calcula(caixas):
    volume_total = 0
    peso_total = 0
    for caixa, numero in caixas.items():

        volume_total += tipos_caixa[caixa]['volume'] * int(numero)
        peso_total += tipos_caixa[caixa]['peso'] * int(numero)
    
    return [volume_total, peso_total]

def ve_se_cabe(volume, peso):
    caminhao = {
        'volume': 23100000, # cm³
        'capacidade': 24000 # kg
    }

    if volume * 0.9 < caminhao['volume']:
        if peso * 0.9 < caminhao['capacidade']:
            return 'cabe'
        else:
            print('muito pesado')
            return 'peso'
    else:
        print('muito grande')
        'volume'


tipos_caixa = {
    "pequena" : {
        'volume': 4320,
        'peso': 2
    },
    "media" : {
        'volume': 34560,
        'peso': 8
    },
    "grande" : {
        'volume': 268800,
        'peso': 20
    },
    "big" : {
        'volume': 720000,
        'peso': 20
    },
}

escolhidas = {
    "pequena": input('pequena:'),
    "media": input('media:'),
    "grande": input('grande:'),
    "big": input('big:'),
}

caixas = escolhidas.copy()
print(caixas)
while True:
    if ve_se_cabe(*calcula(caixas)) == 'cabe':
        print('cabe')
        break

    print('qual tipo deseja remover?')

    if int(caixas['pequena']) > 0:
        print('1: pequena', end=', ')

    if int(caixas['media']) > 0:
        print('2: media', end=', ')

    if int(caixas['grande']) > 0:
        print('3: grande', end=', ')

    if int(caixas['big']) > 0:
        print('4: big')

    removeu = int(input()) - 1
    
    tipos_list = ['pequena', 'media', 'grande', 'big']

    if caixas[removeu] > 0:
        caixas[removeu] - 1
