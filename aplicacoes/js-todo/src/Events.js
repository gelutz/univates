// arquivo equivalente às rotas da aplicação
// ex: ipcMain.on(rota, (e, item) => controller(item))

const { ipcMain } = require("electron");
const ContatoController = require("./controllers/ContatoController");

function handleEvent(window, action, item, returnText) {

    // roda a função do controller e envia o retorno da função para o frontend
    window.webContents.send(returnText, action(item))
}

module.exports = {
    loadEvents(window) {
        ipcMain.on('send@form', (e, item) =>
            handleEvent(window, ContatoController.salvar, item, 'return@form')
        )
    }
}