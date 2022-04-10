const { contextBridge } = require('electron')
const path = require('path')


contextBridge.exposeInMainWorld("api", {
    loadscript(filename) {
        require(path.join(__dirname, filename));
    }
});
