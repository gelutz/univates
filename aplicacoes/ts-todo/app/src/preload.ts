import { contextBridge } from 'electron'
import * as path from 'path';


contextBridge.exposeInMainWorld("api", {
    loadscript(filename: string) {
        require(path.join(__dirname, filename));
    }
});
