// arquivo equivalente às rotas da aplicação
// ex: ipcMain.on(rota, (e, item) => controller(item))

const { ipcMain } = require("electron");
const ContatoController = require("./controllers/ContatoController");

function handleEvent(window, action, item, returnText) {

    // roda a função do controller e envia o retorno da função para o frontend
    fetch({
        url: 'http://localhost:3000/'
    }).then((data) => {
        window.webContents.send(returnText, action(data))
    })

}

module.exports = {
    loadEvents(window) {
        ipcMain.on('test@server', (e, item) => {
            handleEvent(window, console.log, item, 'return@test')
        })
        ipcMain.on('send@form', (e, item) =>
            handleEvent(window, ContatoController.salvar, item, 'return@form')
        )
    }
}