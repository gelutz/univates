const Contato = require('../../infra/classes/Contato');
const File = require('../database/File')
const { connect } = require('../database/Connection')

class ContatoController {
    static salvar(data) {
        if (!data.name) {
            return 'Erro. Nome é obrigatório.'
        }

        let contato = new Contato(data.name, data.phone)

        connect().then((client) => {
            client.query('SELECT NOW()').then(console.log)
        })

        return `Olá, ${data.name}`
    }

    static salvarEmArquivo(contato) {
        let time = new Date()
        let data = `name=${contato.name};phone=${contato.phone};timestamp=${time.getTime()}`
        let filename = `${contato.name}-${time.getTime().toString().slice(0, 3)}`
        File.save(filename, data)
    }
}

module.exports = ContatoController