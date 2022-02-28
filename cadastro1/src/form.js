const { ipcRenderer } = require('electron')

const replaceText = (selector, text) => {
    const element = document.getElementById(selector)
    if (element) element.innerText = text
}

const submit = (e) => {
    e.preventDefault();
    ipcRenderer.send('asynchronous-message', 'ping')
    ipcRenderer.on('asynchronous-reply', (event, arg) => {
        replaceText('result', arg)
    })
}