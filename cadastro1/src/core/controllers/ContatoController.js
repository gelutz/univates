const Contato = require('../../infra/classes/Contato');
const { saveToFile } = require('../helpers/saveToFile')

class ContatoController {
    static method = 'file'

    static salvar(data) {
        if (!data.name) {
            return 'Erro. Nome é obrigatório.'
        }

        let contato = new Contato(data.name, data.phone)

        switch (ContatoController.method) {
            case 'file':
                ContatoController.salvarEmArquivo(contato)
                break;

            default:
                break;
        }

        return `Olá, ${data.name}`
    }

    static salvarEmArquivo(contato) {
        let time = new Date()
        let data = `name=${contato.name};phone=${contato.phone};timestamp=${time.getTime()}`
        let filename = `${contato.name}-${time.getTime().toString().slice(0, 3)}`
        saveToFile(filename, data)
    }
}

module.exports = ContatoController