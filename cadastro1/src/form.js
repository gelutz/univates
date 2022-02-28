const { ipcRenderer } = require('electron')

let name = document.getElementById('name')
let phone = document.getElementById('phone')

let form = document.querySelector('form')

form.addEventListener('submit', e => {
    e.preventDefault()
    ipcRenderer.send('sent', { name: name.value, phone: phone.value })
    form.reset()
})

ipcRenderer.on('returned', (e, data) => {
    let result = document.getElementById('result')
    result.innerText = data
})


