import { contextBridge } from 'electron'
import * as path from 'path';


contextBridge.exposeInMainWorld("api", {
    loadscript(filename) {
        require(path.join(__dirname, filename));
    }
});
