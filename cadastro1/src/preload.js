const { contextBridge } = require('electron');

contextBridge.exposeInMainWorld("api", {
    loadscript(filename) {
        require(filename);
    }
});
