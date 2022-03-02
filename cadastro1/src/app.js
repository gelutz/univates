const path = require('path')
const { app, BrowserWindow } = require('electron')

const events = require('./core/events')

// arquivo inicial, que inicia o app e carrega os eventos (rotas)
app.whenReady().then(() => {
    const win = new BrowserWindow({
        width: 1000,
        height: 800,
        webPreferences: {
            preload: path.join(__dirname, 'preload.js'),
            nodeIntegration: true,
        }
    })

    events.loadEvents(win)

    // carrega o arquivo da página
    win.loadFile(path.join(__dirname, 'presentation', 'index.html'))

    app.on('closed', () => app.quit())
})


