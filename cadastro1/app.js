const fs = require('fs')
const path = require('path')
const { app, BrowserWindow, ipcMain } = require('electron')

app.whenReady().then(() => {
    const win = new BrowserWindow({
        width: 1000,
        height: 800,
        webPreferences: {
            preload: path.join(__dirname, 'src', 'preload.js'),
            nodeIntegration: true,
        }
    })

    ipcMain.on('sent', (e, item) => {
        let time = new Date()

        let data = `${time.toLocaleDateString()}: name=${item.name};phone=${item.phone}`

        fs.writeFileSync(path.join(__dirname, 'tmp', 'data.log'), data)
    })


    // carrega o arquivo da página
    win.loadFile(path.join(__dirname, 'src', 'index.html'))

    // fecha o app
    app.on('closed', () => app.quit())
})


