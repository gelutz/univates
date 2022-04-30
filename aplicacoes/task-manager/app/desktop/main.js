const { app, BrowserWindow } = require("electron");
const path = require("path");

// const { loadEvents } = require("./core/routes");

function createWindow() {
    // Create the browser window.
    const mainWindow = new BrowserWindow({
        height: 600,
        webPreferences: {
            preload: path.join(__dirname, "preload.js"),
            contextIsolation: true,
        },
        width: 800,
    });

    // and load the index.html of the app.
    mainWindow.url
    mainWindow.loadURL('http://10.0.0.10:3333')
    // loadEvents(mainWindow)
}

app.on("ready", () => {
    createWindow();

    app.on("activate", function () {
        if (BrowserWindow.getAllWindows().length === 0) createWindow();
    });
});

app.on("window-all-closed", app.quit);