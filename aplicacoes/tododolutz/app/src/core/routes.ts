import { ipcMain, BrowserWindow } from "electron";

function handleEvent(window: BrowserWindow, action: CallableFunction, item: string, returnPath: string) {

    // roda a função do controller e envia o retorno da função para o frontend
    window.webContents.send(returnPath, action(item))
}

export const loadEvents = (window: BrowserWindow): void => {
    ipcMain.on('send@data', (e, item) => 
        handleEvent(window, () => console.log, item, 'return@data')
    )
}